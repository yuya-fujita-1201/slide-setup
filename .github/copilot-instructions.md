# ⚠️ MANDATORY COPILOT INSTRUCTIONS - READ FIRST ⚠️

## 🚨 CRITICAL FILE PLACEMENT RULES - NO EXCEPTIONS 🚨

### ❌ NEVER CREATE THESE DIRECTORIES:
- `examples/` - DEPRECATED, DO NOT USE
- `configs/` - DEPRECATED, DO NOT USE
- Any new directories for YAML files

### ✅ ALWAYS CREATE NEW YAML FILES IN:
- **`yaml-presentations/`** - THE ONLY LOCATION FOR NEW SLIDE YAML FILES
- Path example: `yaml-presentations/your-slide-name.yaml`

### 📋 MANDATORY WORKFLOW:
1. **STOP** - Check if `yaml-presentations/` directory exists
2. **COPY** template from `yaml-templates/` to `yaml-presentations/`
3. **EDIT** the copied file with user content  
4. **BUILD** - Run `npm run build` to compile TypeScript
5. **GENERATE** - Use exact command: `npm run generate -- --type [TYPE] --config yaml-presentations/[FILE].yaml`
6. **NEVER** create `examples/` or any other directories

### 🚨 EXACT CLI COMMANDS TO USE:
```bash
# 1. Always build first
npm run build

# 2. Generate slide (use exact syntax)
npm run generate -- --type content --config yaml-presentations/your-file.yaml
npm run generate -- --type timeline --config yaml-presentations/your-file.yaml
npm run generate -- --type comparison --config yaml-presentations/your-file.yaml
```

### ❌ WRONG COMMANDS (DO NOT USE):
- `node cli/generate-slide.ts` (TypeScript files cannot be run directly)
- `node ./cli/generate-slide.ts` (Same issue)
- `npm run generate -- generate --type` (Double "generate" is wrong)
- Windows backslashes in paths (use forward slashes)

### 🚫 PROTECTED DIRECTORIES (DO NOT MODIFY):
- `samples/` - Reference slide examples
- `yaml-templates/` - Template files with documentation
- `templates/` - Handlebars template files

## Design Standards (DO NOT CHANGE)

### Page Configuration
- **Page size**: 1600px × 900px (fixed)
- **Margins**: 30px (top/left/right), 35px (bottom)
- **Font family**: 'Meiryo UI', 'Meiryo', sans-serif
- **Base font size**: 12pt
- **Line height**: 1.4

### Color Palette (Fixed)
- **Primary gradient**: #a855f7 → #8b5cf6 → #7c3aed
- **Background**: white (#fff)
- **Main text**: #333
- **Secondary text**: #444, #555
- **Border/divider**: rgba(139, 92, 246, 0.2)

### Required Elements
1. **Main title**: 32pt, font-weight: 700, color: #333
2. **Accent bar**: 4px height, full-width gradient (#a855f7 → #8b5cf6 → #7c3aed)
3. **Accenture logo position**: Top-left area (implied in header)
4. **Footer chevron**: ">" symbol, 32pt, #a855f7, Arial font
5. **Copyright**: "Copyright © 2025 Accenture, All rights reserved." (bottom-right, 10pt, #666)

### Layout Rules
- **Content section**: 18pt font, #444 color, 1.5 line-height
- **Card layouts**: Flex-based, 20px gaps, rounded corners (8px)
- **Card backgrounds**: rgba(139, 92, 246, 0.05) with rgba(139, 92, 246, 0.2) borders
- **Card titles**: 16pt, #a855f7 color, font-weight: 600
- **Tables**: Full-width, bordered, alternating headers with gradient background

### Roadmap-Specific Rules
- **Dynamic period calculation**: Extract months from user input, calculate weeks (months × 4)
- **Grid system**: "100px repeat([WEEKS], 1fr)" template
- **Today marker**: Red line (#ef4444) with arrow and "今日" label
- **Task statuses**: 
  - Completed: #9ca3af (gray)
  - Pending: #8b5cf6 (purple)
  - Milestone: #f59e0b (orange)
- **Legend**: Top-right positioning with color boxes and Japanese labels

### Typography Hierarchy
- **Main title**: 32pt, bold
- **Section headers**: 18pt, medium weight
- **Card titles**: 16pt, semi-bold, accent color
- **Body text**: 14pt, regular
- **Small text**: 12pt, regular
- **Footer text**: 10pt, regular

## Content Generation Rules

### Always Include
1. Proper HTML5 structure with meta tags
2. Complete CSS embedded in `<style>` tag
3. Responsive design considerations
4. Print-friendly media queries
5. Proper Japanese character support

### Slide Type Detection
- **Timeline/Roadmap**: Keywords like "ロードマップ", "スケジュール", "タイムライン", month references
- **Content slides**: General information, lists, comparisons
- **Process slides**: Step-by-step workflows

### Dynamic Calculations
- Period extraction from Japanese text
- Week count calculation (months × 4)
- Percentage-based positioning
- Today marker placement
- Task overlap handling

## File Organization
- **Output Structure**: Save generated HTML files in organized folders
  - Timeline slides: `slides/timeline/YYYYMMDD_HHMM/index.html`
  - Content slides: `slides/content/YYYYMMDD_HHMM/index.html`
  - Comparison slides: `slides/comparison/YYYYMMDD_HHMM/index.html`
- **Timestamp Format**: Use ISO format (YYYYMMDD_HHMM) for folder names
- **File Naming**: Always use `index.html` as the main slide file

## Usage Instructions
1. **Always start with fixed design elements**
2. **Extract period information** for timeline slides
3. **Calculate dynamic values** (weeks, percentages)
4. **Apply consistent styling** across all elements
5. **Include all required branding** (chevron, copyright)
6. **Save in organized folder structure** (slides/[type]/[timestamp]/)
7. **Test for print compatibility**

## Quality Checklist
- [ ] Page dimensions: 1600×900px
- [ ] Accent gradient bar present
- [ ] Footer chevron and copyright included  
- [ ] Proper font family applied
- [ ] Color palette compliance
- [ ] Responsive layout structure
- [ ] Print media queries included
- [ ] Japanese text support confirmed

**Remember**: Always generate slides with consistent Accenture branding and professional appearance. Never deviate from the established design system.