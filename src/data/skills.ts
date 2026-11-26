export type SkillGroup = { scope: '個人の使用経験' | 'チーム全体の使用技術' | '受講中'; items: { name: string; usage: string }[] };
export const skills: {category:string; groups:SkillGroup[]}[] = [
 {category:'AI / Machine Learning',groups:[
  {scope:'個人の使用経験',items:[{name:'Python / PyTorch / NumPy',usage:'深層学習モデルの実装・評価'},{name:'OpenAI API / Gemini API / Lyria',usage:'漫画・記事・歌詞・音源の生成、出力の照合・検証'},{name:'Whisper',usage:'音声認識による歌詞時刻の取得・照合'}]},
  {scope:'受講中',items:[{name:'GCI 2026 Winter',usage:'データサイエンス'},{name:'Deep Learning 基礎講座2026｜Autumn',usage:'深層学習の基礎と実装'}]}
 ]},
 {category:'Development',groups:[{scope:'個人の使用経験',items:[{name:'TypeScript / JavaScript / React Native',usage:'ドパBOOKsのAPI・しおり・読書画面の実装'},{name:'Node.js / Web Audio API',usage:'ドパNEWSのバックエンド・音声同期処理'},{name:'Git / GitHub',usage:'ブランチ開発・チームの変更の統合'}]}]},
 {category:'Infrastructure',groups:[{scope:'個人の使用経験',items:[{name:'Linux / CUDA',usage:'GPUを用いたモデル推論・評価'}]}]},
 {category:'Team Development',groups:[{scope:'チーム全体の使用技術',items:[{name:'React / React Native / Expo',usage:'ドパBOOKsのWeb・iPhone向けアプリ'},{name:'Freesound API / AT Protocol',usage:'音源検索・読書の感想共有'},{name:'HTML / CSS / JavaScript / Node.js',usage:'ドパNEWSの画面とサーバー'},{name:'生成AI API / Web Audio API',usage:'両作品の生成機能と音声処理'}]}]}
];
