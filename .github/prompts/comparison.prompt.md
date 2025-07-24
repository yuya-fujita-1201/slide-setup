!include ../copilot-instructions.md

# ⚠️ CRITICAL: Always create YAML files in yaml-presentations/ directory ONLY

# Comparison Slide Generator

## Purpose
Generate before/after, feature comparison, or option analysis slides.

## Input Format

```yaml
title: "新旧システム比較"
description: "現行システムと新システムの機能比較"
type: "before_after" # before_after, feature_matrix, options
comparison:
  headers: ["項目", "現行システム", "新システム", "改善効果"]
  rows:
    - ["処理速度", "30秒/件", "3秒/件", "90% 短縮"]
    - ["同時接続", "100ユーザー", "1000ユーザー", "10倍 向上"]
    - ["データ容量", "1GB", "100GB", "100倍 拡張"]
```

## Comparison Types

### Before/After (before_after)
Traditional comparison table with current vs. future state.

### Feature Matrix (feature_matrix)
```yaml
type: "feature_matrix"
features: ["機能A", "機能B", "機能C"]
options: ["プランA", "プランB", "プランC"]
matrix:
  - [true, false, true]   # プランA
  - [true, true, false]   # プランB
  - [true, true, true]    # プランC
```

### Options Analysis (options)
```yaml
type: "options"
options:
  - name: "オプション1"
    pros: ["利点1", "利点2"]
    cons: ["課題1", "課題2"]
    cost: "¥1,000,000"
```

## 🚨 MANDATORY FILE PLACEMENT RULES 🚨

### Step 1: YAML File Creation
1. **ALWAYS** create YAML files in `yaml-presentations/` directory
2. **NEVER** create `examples/` or `configs/` directories
3. **Example path**: `yaml-presentations/system-comparison.yaml`

### Step 2: HTML Generation
When generating comparison slides:
1. **Create organized folder structure**: `slides/comparison/YYYYMMDD_HHMM/`
2. **Use timestamp format**: YYYYMMDD_HHMM (e.g., 20250723_1430)
3. **Save as index.html**: Main slide file should always be named `index.html`
4. **Include complete HTML**: Self-contained file with embedded CSS and all required elements

**Example Workflow:**
```bash
# 1. Create YAML file
# Create: yaml-presentations/system-comparison.yaml

# 2. Build TypeScript
npm run build

# 3. Generate slide (EXACT COMMAND)
npm run generate -- --type comparison --config yaml-presentations/system-comparison.yaml

# Output: slides/comparison/YYYYMMDD_HHMM/index.html
```

### ❌ COMMON MISTAKES TO AVOID:
- `node cli/generate-slide.ts` ❌ (Cannot run TypeScript directly)
- `npm run generate -- generate --type` ❌ (Double "generate")
- Backslashes `\` in paths ❌ (Use forward slashes `/`)