# Accenture Slide Generator

Dynamic HTML slide generator with Accenture branding and responsive timeline calculations.

## Features

- **Dynamic Period Calculation**: Automatically calculates timeline grids based on month ranges
- **Consistent Branding**: Accenture purple gradient, typography, and layout standards
- **Multiple Slide Types**: Timeline/roadmap, content cards, and comparison slides
- **Print-Ready**: Optimized for PDF generation with proper page sizing (1600×900px)
- **CLI Interface**: Easy command-line slide generation from YAML configs

## Quick Start

```bash
# Install dependencies
npm install

# Build TypeScript
npm run build

# Generate a timeline slide
npm run generate -- --type timeline --config configs/timeline.yaml

# List available slide types
npm run generate -- list-types
```

## Slide Types

### Timeline/Roadmap
Perfect for project schedules, implementation plans, and milestone tracking.

```yaml
title: "プロジェクトロードマップ"
description: "システム開発の全体スケジュール"
period:
  start: "7月"
  end: "10月"
tasks:
  - category: "システム開発"
    items:
      - name: "要件定義"
        start: "7月1日"
        end: "7月31日"
        status: "completed"
```

### Content Cards
General information slides with flexible card layouts.

```yaml
title: "システムの主な機能"
description: "新システムで提供される機能一覧"
cards:
  - title: "データ管理"
    items:
      - "リアルタイムデータ同期"
      - "バックアップ機能"
```

## GitHub Copilot Integration

This repository includes Copilot instructions for AI-assisted slide generation:

1. **Chat with Copilot**: Ask for slide creation using natural language
2. **YAML Configuration**: Always create YAML files in the `/configs` directory
3. **Automatic Generation**: Copilot applies consistent Accenture branding and calculates dynamic layouts

### Example Copilot Usage

```
@copilot /timeline 7月から10月までの新システム開発ロードマップを作成してください
```

**Important**: When creating new YAML configuration files, always place them in the `/configs` directory to maintain project organization.

## ⚠️ File Protection Notice

**DO NOT modify these directories:**
- `samples/` - Reference slides for users to understand output format
- `yaml-templates/` - Template files with documentation comments
- `templates/` - Core Handlebars templates for slide generation

**Always create new files in:** `configs/` directory only.

## Getting Started

### 1. View Sample Slides
Check the `samples/` directory to see what each slide type looks like:
- `timeline-sample.html` - Timeline/roadmap slide example
- `content-sample.html` - Content cards slide example  
- `comparison-sample.html` - Comparison table slide example

### 2. Copy YAML Templates
Use the templates in `yaml-templates/` as starting points:
- `timeline-template.yaml` - Timeline slide configuration template
- `content-template.yaml` - Content slide configuration template
- `comparison-template.yaml` - Comparison slide configuration template

### 3. Create Your Slides
1. Copy a template from `yaml-templates/` to `configs/`
2. Customize the YAML with your content
3. Generate: `npm run generate -- --type [timeline|content|comparison] --config configs/your-file.yaml`

## Project Structure

```
├── samples/                        # Generated sample slides for reference
│   ├── timeline-sample.html       # Timeline slide example
│   ├── content-sample.html        # Content slide example
│   └── comparison-sample.html     # Comparison slide example
├── yaml-templates/                 # YAML templates with documentation
│   ├── timeline-template.yaml     # Timeline configuration template
│   ├── content-template.yaml      # Content configuration template
│   └── comparison-template.yaml   # Comparison configuration template
├── configs/                        # YAML configuration files (place all new configs here)
│   ├── timeline.yaml              # Timeline slide example
│   ├── content.yaml               # Content slide example
│   └── comparison.yaml            # Comparison slide example
├── templates/
│   ├── partials/
│   │   ├── header.hbs             # Common header with title/accent bar
│   │   └── footer.hbs             # Common footer with chevron/copyright
│   ├── timeline.hbs               # Timeline slide template
│   └── content.hbs                # Content slide template
├── cli/
│   └── generate-slide.ts          # CLI script for slide generation
└── slides/                        # Generated output (gitignored)
```

## Development

```bash
# Install dependencies
npm install

# Development mode (watch for changes)
npm run dev

# Lint and format
npm run lint
npm run format

# Clean generated files
npm run clean
```

## Design Standards

All slides follow Accenture design guidelines:
- **Page Size**: 1600×900px
- **Typography**: Meiryo UI font family
- **Colors**: Purple gradient (#a855f7 → #8b5cf6 → #7c3aed)
- **Branding**: Chevron ">" symbol and consistent copyright

## Timeline Features

- **Flexible Periods**: 2-12 months supported with automatic week calculation
- **Dynamic Grids**: CSS Grid adjusts to period length (weeks × 4 per month)
- **Today Marker**: Red line showing current date position
- **Task Overlaps**: Multi-tier positioning for overlapping tasks
- **Status Colors**: Completed (gray), Pending (purple), Milestone (orange)

## License

MIT License - Copyright © 2025 Accenture