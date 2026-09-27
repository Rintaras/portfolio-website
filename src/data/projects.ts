import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'リアルタイム分析ダッシュボード',
    description: 'Go + React で構築されたリアルタイムデータ分析プラットフォーム',
    longDescription: 'WebSocketを使用したリアルタイムデータ可視化システム。Go言語でバックエンドAPI、ReactとTypeScriptでフロントエンドを構築。AWS上でのスケーラブルなアーキテクチャを採用し、大量のデータを効率的に処理・表示します。',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Go', 'React', 'TypeScript', 'AWS', 'WebSocket'],
    link: 'https://github.com/rintaras/realtime-dashboard',
    github: 'https://github.com/rintaras/realtime-dashboard',
  },
  {
    id: 'project-2',
    title: 'AIコンテンツ管理システム',
    description: 'Python機械学習 + Next.js で構築されたCMSプラットフォーム',
    longDescription: 'AI技術を活用したコンテンツ管理システム。Pythonで機械学習モデルを構築し、コンテンツの自動分類・タグ付け・SEO最適化を実現。Next.jsとTypeScriptで構築されたフロントエンドで直感的な管理インターフェースを提供。',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Python', 'Next.js', 'TypeScript', 'Machine Learning', 'PostgreSQL'],
    link: 'https://github.com/rintaras/ai-cms',
    github: 'https://github.com/rintaras/ai-cms',
  },
  {
    id: 'project-3',
    title: 'マイクロサービス決済プラットフォーム',
    description: 'Go + Firebase で構築されたセキュアな決済システム',
    longDescription: 'マイクロサービスアーキテクチャで構築された決済プラットフォーム。Go言語でRESTful APIを設計し、Firebase Authで認証、Cloud Firestoreでデータ管理。リアルタイム取引監視とセキュリティ機能を実装。',
    image: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Go', 'Firebase', 'Microservices', 'gRPC', 'Security'],
    link: 'https://github.com/rintaras/payment-platform',
    github: 'https://github.com/rintaras/payment-platform',
  },
];