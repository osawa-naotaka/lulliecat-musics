# lulliecat musics. — ゼロから作るWebサイト入門 サンプルサイト

手書きのHTMLとCSS(と少しのJavaScript)だけで、音楽紹介サイトを作って公開するまでを、順を追って学ぶためのサンプルです。

- 使うもの: **VSCode / GitHub / GitHub Pages** だけ
- 使わないもの: フレームワーク、ビルドツール、サーバー、データベース
- 完成形: <https://osawa-naotaka.github.io/lulliecat-musics/>

## このリポジトリの使い方

作る過程を、**1ステップ1ファイル**に分けてあります。`index-initial.html` から `index-10-csp.html` まで順に開くと、サイトが少しずつ出来上がっていく様子が分かります。

- 各ステップのファイルは、**前のステップから変わった箇所**を `00修正` `01修正` のようなコメントで囲んであります。コメントを探せば、そのステップで何を足したのかが分かります。
- 2つのファイルを並べて見比べると、変更点がもっとはっきりします。VSCodeのエクスプローラーで2つのファイルを選び、右クリックして「選択項目の比較」を選んでください。
- `index.html` が最終版で、公開されているサイトの本体です。

### ステップとファイルの対応

| ファイル | 内容 | 学ぶこと |
| --- | --- | --- |
| `index-initial.html` | HTMLだけの状態 | 文書の構造、見出し、リスト、リンクと画像、`header` `nav` `main` `section` `aside` `footer` |
| `index-00-decoration.html` | 色と文字の装飾 | CSSの書き方、セレクタ、`:root` と変数、メディアクエリ |
| `index-01-block.html` | 余白と箱 | `margin` `padding`、`box-sizing`、最大幅と中央寄せ、画像の扱い |
| `index-02-absolute.html` | 位置指定 | `position: absolute`、画像の上に文字を重ねる |
| `index-03-z-index.html` | 重なり順 | `position: fixed`、`z-index` |
| `index-04-flex.html` | 横並びと追従 | Flexbox、`position: sticky`、`scroll-margin`、二段組 |
| `index-05-grid.html` | カードの自動配置 | CSS Grid、`auto-fill` と `minmax` |
| `index-06-carousel.html` | アニメーション | `@keyframes`、`animation`、画像の切り替え |
| `index-07-tag.html` | タグによる絞り込み | `radio` と `label`、`:has()`(JavaScriptなしで実現) |
| `index-08-misc.html` | 仕上げ | Webフォント、favicon、OGP、`description` |
| `index-09-player.html` | 動画プレイヤー | JavaScript入門、`button`、イベント、キーボード操作とフォーカス |
| `index-10-csp.html` | セキュリティ | CSP(Content Security Policy)、CSSとJavaScriptをファイルに分ける理由 |
| `index.html` | 最終版 | 全ステップのまとめ(曲数も増えています) |

そのほかのファイルは、次のとおりです。

- `style.css` / `app.js`: ステップ10と最終版で使う、分離したCSSとJavaScript。ステップ00〜09では、CSSとJavaScriptを1つのHTMLファイルの中に書いています。
- `favicon.svg` / `favicon.ico`: サイトのアイコン。
- `*-unsplash*.jpg`: ヒーロー画像(写真)。

## 講座の章立て

動画講座の章立てです。ファイルがある章は、上の表のファイルに対応します。

**第1部 入門編: 作って公開する**

1. 完成サイトを見る・作るもの・静的サイトの利点
2. 準備: VSCode、GitHubアカウント、二段階認証(動画のみ)
3. HTMLの基本: 空のファイルから `index-initial.html` まで
4. GitHub Pagesで公開する(動画のみ)
5. CSS入門: `index-00-decoration.html`
6. 余白と箱: `index-01-block.html`
7. 更新して反映させる・まとめ(動画のみ)

**第2部 レイアウト編**

8. 位置指定: `index-02-absolute.html`
9. 重なり順: `index-03-z-index.html`
10. Flexbox: `index-04-flex.html`
11. Grid: `index-05-grid.html`

**第3部 応用編**

12. CSSアニメーション: `index-06-carousel.html`
13. CSSだけの絞り込み: `index-07-tag.html`
14. 仕上げ: `index-08-misc.html`
15. JavaScript入門: `index-09-player.html`
16. セキュリティ: `index-10-csp.html`
17. まとめ・次の学習

## 手元で表示する

1. このリポジトリをダウンロードするか、`git clone` します。
2. 見たいステップの `index-*.html` を、ブラウザにドラッグ&ドロップするか、ダブルクリックして開きます。
3. ステップ10と最終版の `index.html` は、`style.css` と `app.js` を読み込みます。3つのファイルを同じフォルダーに置いてください。

ローカルのファイルとして開くと、YouTubeの動画が再生されない場合があります。その場合は、次の方法で公開したページで確認してください。

## GitHub Pagesで公開する

1. 自分のGitHubアカウントにリポジトリを作り、ファイルをアップロード(またはpush)します。
2. リポジトリの **Settings** を開き、**Pages** を選びます。
3. **Build and deployment** の **Source** を **Deploy from a branch** にし、ブランチを `main`、フォルダーを `/ (root)` にして保存します。
4. しばらく待つと、`https://<ユーザー名>.github.io/<リポジトリ名>/` で公開されます。ルートの `index.html` が表示されます。

画面の操作は、動画で順を追って説明します。

## 動作環境

CSSの `:has()` や `rlh` 単位など、比較的新しい機能を使っています。最近のバージョンのChrome、Edge、Firefox、Safariで確認してください。古いブラウザでは、表示が崩れたり、タグの絞り込みが動かなかったりする場合があります。

## 注意事項

- **動画とサムネイル:** 掲載している曲の動画は、YouTubeの公式チャンネルが公開したものへのリンクと埋め込みです。動画本体とサムネイル画像は、YouTubeから読み込みます。このリポジトリには含まれていません。動画が削除されたり、埋め込みが無効にされたりすると、再生できなくなります。その場合は、別の動画に差し替えてください。
- **写真:** ヒーロー画像は [Unsplash](https://unsplash.com/) の写真です。ファイル名に、撮影者名と写真のIDが入っています。
- **曲名・アーティスト名:** 各権利者のものです。このサイトは、個人が好きな音楽を紹介するものです。

## 静的サイトとセキュリティについて

HTMLとCSSだけの静的なサイトには、サーバー側のプログラムもデータベースもないので、動的なサイトに比べて、攻撃を受ける場所が少なくて済みます。ただし、「絶対に安全」というわけではありません。

- 公開に使うGitHubアカウントが乗っ取られると、サイトを書き換えられてしまいます。**二段階認証**を設定してください。
- 外部から読み込むもの(今回はYouTubeとGoogle Fonts)は、サイトの外にあります。最終ステップの **CSP** で、読み込みを許可する場所を絞っています。
