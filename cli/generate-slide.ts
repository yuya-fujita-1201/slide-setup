#!/usr/bin/env node

import { Command } from 'commander';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import Handlebars from 'handlebars';
import yaml from 'js-yaml';
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Go up one level: cli -> root (but in source, not dist)
const rootDir = process.cwd();

// Register Handlebars partials
const headerPartial = readFileSync(join(rootDir, 'templates/partials/header.hbs'), 'utf-8');
const footerPartial = readFileSync(join(rootDir, 'templates/partials/footer.hbs'), 'utf-8');
Handlebars.registerPartial('header', headerPartial);
Handlebars.registerPartial('footer', footerPartial);

// Register custom helpers
Handlebars.registerHelper('lookup', function(obj: any, field: any) {
  return obj && obj[field];
});

interface SlideConfig {
  title: string;
  description?: string;
  type: 'timeline' | 'content' | 'comparison';
  data: any;
}

interface TimelineData {
  period: {
    start: string;
    end: string;
    duration?: string;
  };
  tasks: Array<{
    category: string;
    items: Array<{
      name: string;
      start: string;
      end: string;
      status: 'completed' | 'pending' | 'milestone';
    }>;
  }>;
}

interface ContentData {
  cards: Array<{
    title: string;
    items: string[];
  }>;
}

function calculateWeeks(startMonth: string, endMonth: string): number {
  const monthMap: { [key: string]: number } = {
    '1月': 1, '2月': 2, '3月': 3, '4月': 4, '5月': 5, '6月': 6,
    '7月': 7, '8月': 8, '9月': 9, '10月': 10, '11月': 11, '12月': 12
  };
  
  const start = monthMap[startMonth] || parseInt(startMonth);
  const end = monthMap[endMonth] || parseInt(endMonth);
  
  const months = end >= start ? end - start + 1 : (12 - start + 1) + end;
  return months * 4; // 4 weeks per month
}

function processTimelineData(data: TimelineData) {
  const weeks = calculateWeeks(data.period.start, data.period.end);
  
  // Generate month headers
  const months = [];
  const startMonth = parseInt(data.period.start.replace('月', '')) || 1;
  const endMonth = parseInt(data.period.end.replace('月', '')) || 12;
  
  for (let i = startMonth; i <= endMonth; i++) {
    months.push({
      name: `${i}月`,
      weekCount: 4
    });
  }
  
  // Generate week headers
  const weekHeaders = [];
  for (let w = 1; w <= weeks; w++) {
    weekHeaders.push(`${w}w`);
  }
  
  // Calculate today percentage (mock - 50% for demo)
  const todayPct = 50;
  
  // Process task categories
  const taskCategories = data.tasks.map(category => ({
    name: category.category,
    tasks: category.items.map((task, index) => ({
      name: task.name,
      status: task.status,
      startPct: (index * 20) % 80, // Mock calculation
      durPct: 15 + (index * 5) % 20 // Mock duration
    }))
  }));
  
  return {
    weeks,
    todayPct,
    months,
    weekHeaders,
    taskCategories
  };
}

function generateSlide(config: SlideConfig): string {
  const templatePath = join(rootDir, `templates/${config.type}.hbs`);
  const templateSource = readFileSync(templatePath, 'utf-8');
  const template = Handlebars.compile(templateSource);
  
  let templateData = {
    ...config,  // Use entire config first
    title: config.title,  // Then override title and description if needed
    description: config.description
  };
  
  // Debug: log template data
  console.log('Template Data:', JSON.stringify(templateData, null, 2));
  
  // Process data based on slide type
  if (config.type === 'timeline') {
    // For timeline, the YAML contains period and tasks at root level
    const timelineData = {
      period: (config as any).period,
      tasks: (config as any).tasks
    };
    const processedData = processTimelineData(timelineData as TimelineData);
    templateData = { ...templateData, ...processedData };
  }
  
  return template(templateData);
}

function createOutputDirectory(slideType: string): string {
  const timestamp = new Date().toISOString()
    .replace(/[-:]/g, '')
    .replace(/\..+/, '')
    .replace('T', '_');
  
  const outputDir = join(rootDir, 'slides', slideType, timestamp);
  mkdirSync(outputDir, { recursive: true });
  return outputDir;
}

const program = new Command();

program
  .name('acn-slide')
  .description('Generate Accenture-branded HTML slides')
  .version('1.0.0');

program
  .command('generate')
  .description('Generate a slide from configuration')
  .requiredOption('-t, --type <type>', 'Slide type (timeline, content, comparison)')
  .requiredOption('-c, --config <path>', 'Path to YAML configuration file')
  .option('-o, --output <path>', 'Output directory (default: slides/timestamp)')
  .action((options) => {
    try {
      console.log(chalk.blue('🎯 Generating Accenture slide...'));
      
      // Read configuration
      const configPath = options.config;
      const configContent = readFileSync(configPath, 'utf-8');
      const config: SlideConfig = yaml.load(configContent) as SlideConfig;
      config.type = options.type;
      
      // Debug: log loaded config
      console.log('Loaded Config:', JSON.stringify(config, null, 2));
      
      // Generate HTML
      const html = generateSlide(config);
      
      // Create output directory
      const outputDir = options.output || createOutputDirectory(config.type);
      mkdirSync(outputDir, { recursive: true });
      
      // Write HTML file
      const outputPath = join(outputDir, 'index.html');
      writeFileSync(outputPath, html, 'utf-8');
      
      console.log(chalk.green('✅ Slide generated successfully!'));
      console.log(chalk.gray(`📁 Output: ${outputPath}`));
      console.log(chalk.gray(`🌐 Open in browser: file://${outputPath}`));
      
    } catch (error) {
      console.error(chalk.red('❌ Error generating slide:'));
      console.error(error);
      process.exit(1);
    }
  });

program
  .command('list-types')
  .description('List available slide types')
  .action(() => {
    console.log(chalk.blue('📋 Available slide types:'));
    console.log('  • timeline   - Timeline/roadmap slides with dynamic period calculation');
    console.log('  • content    - General content slides with cards or lists');
    console.log('  • comparison - Before/after or feature comparison slides');
  });

if (process.argv.length < 3) {
  program.help();
}

program.parse();