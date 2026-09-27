# Rintara's Portfolio

Rintaraのポートフォリオサイトです。フルスタックエンジニアとしての技術スキルとプロジェクトを紹介しています。

## 🚀 技術スタック

### フロントエンド
- **React 18** - ユーザーインターフェースライブラリ
- **TypeScript** - 静的型付けによる開発効率向上
- **Vite** - 高速なビルドツール
- **Tailwind CSS** - ユーティリティファーストのCSSフレームワーク
- **Framer Motion** - アニメーションライブラリ
- **GSAP** - 高性能アニメーション

### アニメーション・インタラクション
- **Split Type** - テキストアニメーション
- **Lucide React** - アイコンライブラリ
- **Sonner** - トーストメッセージ

### メール機能
- **EmailJS** - クライアントサイドからのメール送信

### バックエンド技術（専門領域）
- **Node.js** - JavaScript実行環境
- **Python** - データ処理・機械学習
- **Go** - 高性能バックエンドAPI

### クラウド・インフラ
- **AWS** - クラウドサービス
- **Firebase** - BaaS（Backend as a Service）

### 開発ツール
- **ESLint** - コード品質管理
- **PostCSS** - CSS処理ツール

### PWA（Progressive Web App）
- **vite-plugin-pwa** - Web App Manifest と Service Worker の自動生成
- **Workbox** - 静的アセットのキャッシュとオフライン対応
- **Sharp** - PWA用アイコン（192/512/Apple Touch）の生成

## 🛠️ セットアップ

### 必要要件
- Node.js 18.x以上
- npm または yarn

### インストール
```bash
npm install
```

### 開発サーバー起動
```bash
npm run dev
```

### ビルド
```bash
npm run build
```

### プレビュー
```bash
npm run preview
```

### PWAアイコンの再生成
```bash
npm run generate-icons
```

## 🌐 デプロイ

GitHub Actions により `main` ブランチへの push で [GitHub Pages](https://pages.github.com/) へ自動デプロイされます。

**公開URL:** https://rintaras.github.io/portfolio-website/

1. リポジトリの **Settings → Pages → Build and deployment** で **GitHub Actions** を選択
2. `main` に push すると `.github/workflows/deploy-pages.yml` がビルド・公開を実行

カスタムドメイン（例: `rintaras.tech`）を使う場合は、Pages の設定で CNAME を追加し、`vite.config.ts` の `base` を `'/'` にしたうえで別ホスト（Vercel 等）へデプロイする構成も可能です。

ローカルでビルドのみ確認する場合:

```bash
npm run build
```

## 📱 主な機能

- **レスポンシブデザイン** - モバイル・タブレット・デスクトップ対応
- **ダークモード対応** - ユーザビリティの向上
- **スムーズアニメーション** - GSAP & Framer Motionによる高品質なアニメーション
- **インタラクティブUI** - カスタムカーソル・スクロールインジケーター
- **コンタクトフォーム** - EmailJSによるメール送信機能
- **PWA対応** - ホーム画面への追加、オフラインキャッシュ、スタンドアロン表示
- **パフォーマンス最適化** - Viteによる高速ビルド

## 🎨 デザインシステム

- **カラーパレット**: プライマリ・セカンダリカラーシステム
- **タイポグラフィ**: 階層的なフォントサイズシステム
- **スペーシング**: 一貫性のあるマージン・パディング
- **アニメーション**: ユーザーエクスペリエンスを重視した動作

## 📞 連絡先

- **Email**: rintara@tech.com
- **GitHub**: [github.com/rintaras](https://github.com/rintaras)
- **LinkedIn**: [linkedin.com/in/rintara](https://linkedin.com/in/rintara)
- **Twitter**: [@rintaras_tech](https://twitter.com/rintaras_tech)

## 📄 ライセンス

MIT License

---

© 2024 Rintara. All rights reserved. 