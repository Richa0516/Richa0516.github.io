# Keita Matsui Portfolio

公開予定URLは [https://richa0516.github.io/](https://richa0516.github.io/) です。

Node.js 24で `npm ci` を実行し、`npm run dev` で開発サーバーを起動します。更新後は `npm run typecheck`、`npm run lint`、`npm run build` を実行してください。静的出力は `out/` に生成されます。

プロフィールや作品、実績は `src/data/` で更新します。公開許可を確認した画像は `public/images/` に配置し、作品データに代替テキストとともに登録してください。

GitHub Pagesの配信元はGitHub Actionsです。公開承認後に `main` へpushすると、ワークフローが静的出力を生成してデプロイします。結果はGitHubのActionsタブで確認できます。
