# Development rules

- Next.js App Router / TypeScript / Tailwind CSS / Lucideで静的出力を維持する。
- `src/data/`と表示コンポーネントを分離し、既存データ型に沿って更新する。
- 日英対応を追加するときは日本語を既定にし、各言語データとUI辞書を分離する。
- 不明なプロフィール、担当範囲、資格、受賞名を推測で補わない。予定・学習中・達成済みを明確に区別する。
- チーム全体の技術や成果を個人の実績として表示しない。個人担当未確認はnullを保持する。
- 既存AIモデルを独自開発したように説明しない。完全自律修正は研究目標であり達成済みにしない。
- 未公開研究コード、具体的精度、患者画像、症例情報、内部パス、サーバー情報を掲載しない。研究画像は架空模式図と明示する。
- 架空の顔写真・作品スクリーンショットを生成しない。正式画像と権利を確認して掲載する。
- APIキー・認証情報を追加しない。公開連絡先以外の個人情報を追加しない。
- スキル習熟率や星評価を捏造しない。実績のないExperienceは非表示を維持する。
- 更新後はtypecheck、lint、buildを実行。画面変更はPC/モバイル、両テーマ、キーボード、reduced-motionを確認。
- profile.updatedとsitemapの更新日を合わせる。公開README等の照合結果はREADMEに記録する。
- リポジトリ作成・push・デプロイはユーザーによる内容確認後の指示があるまで実行しない。

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
