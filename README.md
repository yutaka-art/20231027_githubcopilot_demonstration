# SoEDay GitHub Copilot Copilot Chat デモ (2023.10.27)

## 0. 前提事項
- GitHib Copilotのライセンスを購入済であること
- VS Codeがインストールされ、GitHub Copilot、GitHub Copilot Chatの拡張機能がインストールされていること
- Node.jsがインストールされ、npmコマンドが実行可能なこと

## 1. Demo01(Node.JSで定義済み計算アプリのindex.jsにコメントを入力し、Copilotによる数値チェック関数を作成してもらう流れを説明)

### 1.1 環境準備
``` :shell
mkdir C:\SoeDay\Demo01
```

下記のコマンドを実行することで、計算機アプリが起動する

```:shell
node index.js
```

index.js の最終行にコメントとして対して下記を入れる
```
// この関数をindex.js内のコードに適切に適用した場合の全コードを提案してください。
```

GitHub Copilotがコードを補完することを確認する

## 2. Demo02(Next.JSを利用したマークエディタの作成)
全て VSCode Copilot Chatで実施する

### 2.1 環境準備
``` :shell
mkdir C:\SoeDay\Demo02
```

1.作成内容をCopilot Chatへインプット
```:prompt
Next.jsを使って、以下の条件を満たす簡単なmarkdownエディタを作ってください。

・reactフックを使う
・デフォルトは「ここにマークダウンを入力してください」というテキストを持つ、markdown用のstateを作成してください。
・ユーザがマークダウンを書けるテキストエリアを用意してください。
・入力したマークダウンテキストをライブプレビューを表示してください。
・ヘッダーや太字、斜体などの基本的なマークダウン記法をサポートしてください。
・Reactのmarkdownパッケージを使ってください。
・マークダウンテキストとそこから得られるHTMLはコンポーネントのstateとして保存され、リアルタイムで更新してください。
```

2.[1]でソースコードをそのまま提案してくるので、環境構築からしたい旨伝える
```:prompt
環境をセットアップし、必要な依存関係をインストールして、Markdownエディタを作成するための手順をステップバイステップで説明してください。
プロジェクトはコマンドで作成したいです。
Node.jsとnpmはインストール済みです。
```

3.環境インストール後のindex.jsを明確にどこへ作るかがわからないので確認する
```:prompt
pagesディレクトリはどこに作成すればよいですか？
```

4.指示通り、pages/index.js を入れて起動したものの、エラーになるため、エラーの内容を伝える
```:prompt
npm run dev で起動すると、下記のエラーがブラウザ上で表示されます
Failed to compile Next.js is up to date Conflicting app and page file was found, please remove the conflicting files to continue: "pages\index.js" - "app\page.js"
```

うまく表示できたら、マークダウンが機能しているか確認する

5.スタイルを当てるためにクラス名の付与を提案してもらう
```:prompt
このコンポーネントの各要素にクラス名を付与してください。
```

6.CSSファイルを提案してもらう
```:prompt
このmarkdownエディタ用のCSSファイルを作成してください。
```

7.スタイルがうまく当たらないのでどこに問題があるか確認
```:prompt
index.jsに適用しましたが、うまくスタイルが当たらないようです。どこに問題がありますか？
```

完成版のSrcは[リンクテキスト](URL "DemosSrc.zip")