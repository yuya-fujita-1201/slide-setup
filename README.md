# Accenture スライドジェネレーター

アクセンチュアブランディングとレスポンシブタイムライン計算機能を備えた動的HTMLスライドジェネレーター

## 機能

- **動的期間計算**: 月範囲に基づいてタイムライングリッドを自動計算
- **一貫したブランディング**: アクセンチュア紫グラデーション、タイポグラフィ、レイアウト基準
- **複数のスライドタイプ**: タイムライン/ロードマップ、コンテンツカード、比較スライド
- **印刷対応**: 適切なページサイズ（1600×900px）でPDF生成に最適化
- **CLIインターフェース**: YAML設定からの簡単なコマンドラインスライド生成

## クイックスタート

```bash
# 依存関係をインストール
npm install

# TypeScriptをビルド
npm run build

# タイムラインスライドを生成
npm run generate -- --type timeline --config yaml-presentations/timeline.yaml

# 利用可能なスライドタイプを一覧表示
npm run generate -- list-types
```

## スライドタイプ

### タイムライン/ロードマップ
プロジェクトスケジュール、実装計画、マイルストーン追跡に最適。

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

### コンテンツカード
柔軟なカードレイアウトを持つ一般情報スライド。

```yaml
title: "システムの主な機能"
description: "新システムで提供される機能一覧"
cards:
  - title: "データ管理"
    items:
      - "リアルタイムデータ同期"
      - "バックアップ機能"
```

## GitHub Copilot 連携

このリポジトリには、AI支援スライド生成のためのCopilot指示が含まれています：

1. **Copilotとのチャット**: 自然言語でスライド作成を依頼
2. **YAML設定**: 常に `/yaml-presentations` ディレクトリにYAMLファイルを作成
3. **自動生成**: Copilotが一貫したアクセンチュアブランディングを適用し、動的レイアウトを計算

### Copilot使用例

```
@copilot /timeline 7月から10月までの新システム開発ロードマップを作成してください
```

**重要**: 新しいYAML設定ファイルを作成する際は、プロジェクト構成を維持するため、必ず `/yaml-presentations` ディレクトリに配置してください。

## 🚨 重要：ファイル配置ルール 🚨

### ❌ 絶対に作成してはいけないディレクトリ:
- `examples/` - 廃止済み、使用禁止
- `configs/` - 廃止済み、使用禁止

### ✅ 新しいYAMLファイルの作成場所:
- **`yaml-presentations/`** - スライドYAMLファイルの唯一の配置場所

### 🚫 変更禁止ディレクトリ:
- `samples/` - ユーザーが出力形式を理解するための参考スライド
- `yaml-templates/` - ドキュメント付きコメントを含むテンプレートファイル
- `templates/` - スライド生成用のコアHandlebarsテンプレート

## はじめ方

### 1. サンプルスライドを確認
`samples/` ディレクトリで各スライドタイプの外観を確認：
- `timeline-sample.html` - タイムライン/ロードマップスライドの例
- `content-sample.html` - コンテンツカードスライドの例  
- `comparison-sample.html` - 比較表スライドの例

### 2. YAMLテンプレートをコピー
`yaml-templates/` のテンプレートを開始点として使用：
- `timeline-template.yaml` - タイムラインスライド設定テンプレート
- `content-template.yaml` - コンテンツスライド設定テンプレート
- `comparison-template.yaml` - 比較スライド設定テンプレート

### 3. スライドを作成
1. `yaml-templates/` から `yaml-presentations/` にテンプレートをコピー
2. YAMLを自分のコンテンツでカスタマイズ
3. ビルド: `npm run build`
4. 生成: `npm run generate -- --type [timeline|content|comparison] --config yaml-presentations/your-file.yaml`

### 📋 正しいコマンド例
```bash
# 1. TypeScriptをビルド
npm run build

# 2. スライド生成（正確な構文）
npm run generate -- --type content --config yaml-presentations/my-slide.yaml
npm run generate -- --type timeline --config yaml-presentations/my-timeline.yaml
npm run generate -- --type comparison --config yaml-presentations/my-comparison.yaml
```

### ❌ よくある間違い
- `node cli/generate-slide.ts` ❌ (TypeScriptファイルは直接実行不可)
- `npm run generate -- generate --type` ❌ ("generate"が重複)
- バックスラッシュ `\` ❌ (スラッシュ `/` を使用)

## プロジェクト構造

```
├── cli/                            # スライド生成用CLIスクリプト
│   └── generate-slide.ts          # TypeScript CLIツール
├── yaml-presentations/             # YAMLスライドデータ（新しいスライドをここに作成）
├── docs/                           # プロジェクト文書
│   └── PROJECT_PROMPT_v4.md       # プロジェクト仕様書
├── samples/                        # 参考用生成済みサンプルスライド
│   ├── comparison-sample.html     # 比較スライドの例
│   ├── content-sample.html        # コンテンツスライドの例
│   └── timeline-sample.html       # タイムラインスライドの例
├── templates/                      # Handlebarsテンプレートファイル
│   ├── partials/
│   │   ├── footer.hbs             # シェブロン/コピーライトを含む共通フッター
│   │   └── header.hbs             # タイトル/アクセントバーを含む共通ヘッダー
│   ├── comparison.hbs             # 比較スライドテンプレート
│   ├── content.hbs                # コンテンツスライドテンプレート
│   └── timeline.hbs               # タイムラインスライドテンプレート
├── yaml-templates/                 # ドキュメント付きYAMLテンプレート
│   ├── comparison-template.yaml   # 比較設定テンプレート
│   ├── content-template.yaml      # コンテンツ設定テンプレート
│   └── timeline-template.yaml     # タイムライン設定テンプレート
├── package.json                   # Node.js依存関係とスクリプト
├── tsconfig.json                  # TypeScript設定
└── slides/                        # 生成された出力（gitignore対象）
```

## 開発

```bash
# 依存関係をインストール
npm install

# 開発モード（変更を監視）
npm run dev

# リントとフォーマット
npm run lint
npm run format

# 生成されたファイルをクリーンアップ
npm run clean
```

## デザイン基準

全てのスライドはアクセンチュアデザインガイドラインに従います：
- **ページサイズ**: 1600×900px
- **タイポグラフィ**: Meiryo UIフォントファミリー
- **カラー**: 紫グラデーション（#a855f7 → #8b5cf6 → #7c3aed）
- **ブランディング**: シェブロン「>」シンボルと一貫したコピーライト

## タイムライン機能

- **柔軟な期間**: 2-12ヶ月をサポート、自動週計算
- **動的グリッド**: CSS Gridが期間の長さに応じて調整（週 × 月当たり4週）
- **今日マーカー**: 現在の日付位置を示す赤いライン
- **タスクオーバーラップ**: オーバーラップするタスクのマルチティア配置
- **ステータスカラー**: 完了（グレー）、予定（パープル）、マイルストーン（オレンジ）

## ライセンス

MIT License - Copyright © 2025 Accenture