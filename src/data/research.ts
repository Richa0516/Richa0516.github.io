export const research = {
 title: '深層学習を用いた全身CT画像の半自動セグメンテーション',
 description: 'CT画像から臓器や血管を抽出する既存の深層学習モデルを比較評価し、クリック操作で推論結果を修正する半自動抽出システムを研究しています。初期抽出から修正・可視化までをつなぎ、AIエージェントによる操作支援を目指します。',
 technologies: ['Python','PyTorch','NumPy','Docker','CUDA','Linux','3D Slicer','Git','CLI','JSONL'],
 projects: [
 {name:'SAM-Med3D',subtitle:'既存AIモデルの評価・改善',label:'01 / MODEL EVALUATION',description:'既存の医用3D画像モデルを実装し、臓器・血管の抽出結果を比較評価しています。nnU-Netの抽出結果を手がかりとして与え、推論方法の改善を検討しています。',items:['残す領域・除く領域のクリック指定による修正','統計解析・境界精度評価・可視化'],status:'研究・評価・改善を継続中'},
 {name:'nnInteractive',subtitle:'対話的な画像抽出・修正',label:'02 / INTERACTIVE SEGMENTATION',description:'既存の対話型モデルを用い、抽出結果の一部をクリックで修正する方法を評価しています。修正したい範囲（ROI）に絞った推論も検討しています。',items:['クリック戦略の検討','3D医用画像のGPU推論・比較評価'],status:'モデル評価・システム開発中'},
 {name:'AI Agent & System Integration',subtitle:'AIとソフトウェアのシステム統合',label:'03 / SYSTEM ENGINEERING',description:'3D SlicerとAI推論バックエンドをつなぐシステム基盤を開発。AIエージェントとの連携に向けてMCP・Bridgeを検討。',items:['CLI / JSONLによるモデル操作・Docker環境','安全停止・Undo・操作ログの検証'],status:'基盤開発・動作検証中。完全自律修正は研究目標'},
 ]
};
