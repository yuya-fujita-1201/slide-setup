!include ../copilot-instructions.md

# Timeline / Roadmap Slide Generator

## Purpose
Generate dynamic timeline/roadmap slides with period-based calculations and task positioning.

## Input Format

### Basic Information
```yaml
title: "プロジェクトロードマップ"
description: "システム開発の全体スケジュール"
period:
  start: "7月"    # Start month
  end: "10月"     # End month  
  duration: "4ヶ月" # Optional duration
```

### Task Definition
```yaml
tasks:
  - category: "システム開発"
    items:
      - name: "要件定義"
        start: "7月1日"
        end: "7月31日"
        status: "completed" # completed, pending, milestone
      - name: "基本設計"
        start: "7月15日"
        end: "8月31日"
        status: "pending"
  - category: "テスト"
    items:
      - name: "単体テスト"
        start: "8月15日"
        end: "9月15日"
        status: "pending"
```

## Processing Logic

### Step 1: Period Analysis
1. **Extract period information** from Japanese text
2. **Calculate total weeks**: months × 4 weeks
3. **Generate grid structure**: `"100px repeat([WEEKS], 1fr)"`

### Step 2: Dynamic Calculations
1. **Week percentage**: 100% ÷ total weeks
2. **Task positioning**: (start date offset ÷ total period) × 100%
3. **Task width**: ((end date - start date) ÷ total period) × 100%
4. **Today marker**: Current date percentage from period start

### Step 3: HTML Generation
1. **Dynamic headers**: Month spans and week numbers
2. **Grid layout**: CSS Grid with calculated columns
3. **Task bars**: Positioned divs with calculated left/width percentages
4. **Today line**: Red vertical line with "今日" label

## Output Features

### Visual Elements
- **Month headers**: Purple background with month names
- **Week headers**: Lighter purple with week numbers
- **Task categories**: Gray sidebar labels
- **Task bars**: Color-coded arrows (completed=gray, pending=purple, milestone=orange)
- **Today marker**: Red line with arrow indicator
- **Legend**: Status explanation in top-right

### Responsive Design
- **Flexible periods**: 2-12 months supported
- **Auto-scaling**: Grid adjusts to period length
- **Tier handling**: Multiple tasks per category with vertical positioning
- **Print-friendly**: Optimized for PDF generation

## Example Usage

**Input Request:**
"7月から10月までの新システム開発ロードマップを作成してください"

**System Processing:**
1. Period: 7月-10月 = 4ヶ月 = 16週
2. Grid: `"100px repeat(16, 1fr)"`
3. Week %: 6.25% per week
4. Headers: 7月(span 4), 8月(span 4), 9月(span 4), 10月(span 4)

**Output:** 
Dynamic HTML slide with 16-week grid, month headers, and calculated task positions.

## File Output Instructions
When generating timeline slides:
1. **Create organized folder structure**: `slides/timeline/YYYYMMDD_HHMM/`
2. **Use timestamp format**: YYYYMMDD_HHMM (e.g., 20250723_1430)
3. **Save as index.html**: Main slide file should always be named `index.html`
4. **Include complete HTML**: Self-contained file with embedded CSS and all required elements

**Example Output Path:**
```
slides/timeline/20250723_1430/index.html
```