!include ../copilot-instructions.md

# General Slide Generation Guide

## Overview
This prompt helps generate Accenture-branded HTML slides with consistent design and branding.

## Usage Instructions

### Step 1: Identify Content Type
Determine the most appropriate slide template based on content:
- **Timeline/Roadmap**: Project schedules, milestones, phased approaches
- **Content**: General information, feature lists, comparisons
- **Process**: Step-by-step workflows, methodologies

### Step 2: Content Input Format
Provide content in this structure:

```yaml
title: "Your Slide Title"
description: "Brief description or subtitle"
content:
  - type: "card" # or "table", "list"
    data: 
      # Specific to content type
```

### Step 3: Output Generation
The system will:
1. Apply fixed Accenture design elements
2. Generate responsive HTML structure
3. Include proper CSS styling
4. Add required branding elements

## Design Consistency
- All slides use 1600×900px format
- Meiryo UI font family
- Purple gradient accent bar (#a855f7 → #8b5cf6 → #7c3aed)
- Footer with chevron ">" and copyright
- Print-ready CSS media queries

## Quality Standards
- Professional appearance
- Consistent typography
- Proper spacing and alignment
- Responsive design principles
- Japanese text support

## File Organization
When generating slides, always organize output files properly:
- **Timeline slides**: `slides/timeline/YYYYMMDD_HHMM/index.html`
- **Content slides**: `slides/content/YYYYMMDD_HHMM/index.html` 
- **Comparison slides**: `slides/comparison/YYYYMMDD_HHMM/index.html`

Each slide type gets its own subdirectory, and individual slides are stored in timestamped folders for easy organization and version control.