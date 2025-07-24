!include ../copilot-instructions.md

# ⚠️ CRITICAL: Always create YAML files in yaml-presentations/ directory ONLY

# Content Slide Generator

## Purpose
Generate standard content slides with cards, lists, or tables for general information presentation.

## Input Format

```yaml
title: "システムの主な機能"
description: "新システムで提供される機能一覧"
layout: "cards" # cards, table, list
content:
  - title: "データ管理"
    items:
      - "リアルタイムデータ同期"
      - "バックアップ機能"
      - "データ暗号化"
  - title: "ユーザー管理"
    items:
      - "シングルサインオン"
      - "権限管理"
      - "アクセスログ"
```

## Layout Options

### Card Layout (Default)
- 2-4 columns of content cards
- Purple accent borders
- Bullet-point lists within cards

### Table Layout
```yaml
layout: "table"
headers: ["項目", "従来", "改善後", "効果"]
rows:
  - ["処理速度", "30秒", "5秒", "83% 改善"]
  - ["データ量", "100MB", "1GB", "10倍 拡張"]
```

### List Layout
```yaml
layout: "list"
items:
  - "第一段階: 要件定義"
  - "第二段階: 設計・開発"
  - "第三段階: テスト・検証"
```

## Processing Steps
1. Apply Accenture design template
2. Generate appropriate layout structure
3. Populate content with provided data
4. Add consistent styling and branding

## 🚨 MANDATORY FILE PLACEMENT RULES 🚨

### Step 1: YAML File Creation
1. **ALWAYS** create YAML files in `yaml-presentations/` directory
2. **NEVER** create `examples/` or `configs/` directories
3. **Example path**: `yaml-presentations/ai-strategy-2025.yaml`

### Step 2: HTML Generation
When generating content slides:
1. **Create organized folder structure**: `slides/content/YYYYMMDD_HHMM/`
2. **Use timestamp format**: YYYYMMDD_HHMM (e.g., 20250723_1430)
3. **Save as index.html**: Main slide file should always be named `index.html`
4. **Include complete HTML**: Self-contained file with embedded CSS and all required elements

**Example Workflow:**
```bash
# 1. Create YAML file
# Create: yaml-presentations/ai-strategy-2025.yaml

# 2. Build TypeScript
npm run build

# 3. Generate slide (EXACT COMMAND)
npm run generate -- --type content --config yaml-presentations/ai-strategy-2025.yaml

# Output: slides/content/YYYYMMDD_HHMM/index.html
```

### ❌ COMMON MISTAKES TO AVOID:
- `node cli/generate-slide.ts` ❌ (Cannot run TypeScript directly)
- `npm run generate -- generate --type` ❌ (Double "generate")
- Backslashes `\` in paths ❌ (Use forward slashes `/`)