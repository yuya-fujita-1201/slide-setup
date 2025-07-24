# Accenture Slide Repository Scaffold (v4)

This project provides a complete scaffold for generating Accenture-branded HTML presentation slides with dynamic period calculations and consistent design standards.

## Overview

The scaffold includes:
- **GitHub Copilot Integration**: Custom instructions and reusable prompts for AI-assisted slide generation
- **Dynamic Timeline Engine**: Automatic period calculation and grid generation for roadmap slides
- **Template System**: Handlebars-based templates with consistent Accenture branding
- **CLI Tool**: Command-line interface for batch slide generation from YAML configs

## Key Features

### 1. Fixed Design System
All slides maintain consistent Accenture branding:
- Page size: 1600×900px with proper margins
- Typography: Meiryo UI font family throughout
- Color palette: Purple gradient (#a855f7 → #8b5cf6 → #7c3aed)
- Required elements: Title, accent bar, footer chevron, copyright

### 2. Dynamic Period Calculation
Timeline slides automatically:
- Extract period information from Japanese text (e.g., "7月から10月")
- Calculate total weeks (months × 4 weeks per month)
- Generate responsive CSS Grid layout
- Position today marker and task bars with percentage calculations

### 3. Copilot-Ready Prompts
The `.github/prompts/` directory contains specialized prompts for:
- Timeline/roadmap slides with period analysis
- Content slides with card layouts
- Comparison slides with before/after tables

### 4. Professional Output
Generated slides are:
- Print-ready with PDF optimization
- Responsive across different screen sizes
- Accessible with proper semantic HTML
- Consistent with Accenture brand guidelines

## Quick Start

1. **Setup Project**:
   ```bash
   npm install && npm run build
   ```

2. **Generate Slide**:
   ```bash
   npm run generate -- --type timeline --config configs/timeline.yaml
   ```

3. **Use with Copilot**:
   - Chat: "Create a 4-month project roadmap"
   - Prompts: Use `/timeline` with project details
   - Output: Professional HTML slide with dynamic calculations

## Architecture

The project follows a modular architecture:
- **Templates**: Handlebars-based with shared partials
- **CLI**: TypeScript-based generation script
- **Prompts**: Reusable AI instructions for common slide types
- **Styles**: Embedded CSS with Accenture design standards

This scaffold provides a complete foundation for professional slide generation with minimal setup and maximum consistency.

## ⚠️ File Protection Guidelines

**Protected Directories (DO NOT MODIFY):**
- `samples/` - Reference slide examples for users
- `yaml-templates/` - Documented template files  
- `templates/` - Core Handlebars templates

**Working Directory:**
- `configs/` - Create all new YAML files here only

When assisting users, always copy from templates to configs/ and customize there.