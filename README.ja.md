# mini-con-webhid

WebHID APIを使用して、ブラウザ上でNintendo SwitchのJoy-Conに接続するための軽量ライブラリです。

## デモ

**ライブデモ: https://github.com/code4fukui/mini-con-webhid

デモを使用するには:
1.  Joy-ConをBluetooth経由でコンピュータとペアリングします。
2.  対応ブラウザでデモページを開きます。
3.  「connect」ボタンをクリックし、デバイスリストからJoy-Conを選択します。
4.  ボタンを押したりアナログスティックを動かしたりして、JSON出力を確認します。

## 特徴

-   Joy-Conに接続するためのシンプルな単一関数のAPI。
-   ボタン入力やアナログスティックの方向を簡略化したイベントオブジェクトとして提供。
-   基盤となる[Joy-Con WebHID](https://github.com/code4fukui/joy-con-webhid/)ライブラリの低レベルな詳細を抽象化。

## 要件

-   [WebHID API](https://developer.mozilla.org/en-US/docs/Web/API/WebHID_API)をサポートするブラウザ（例: PC版のChrome、Edge、Opera）。
-   Bluetooth経由でコンピュータとペアリングされたJoy-Conコントローラー。

## 使い方

CDNから`connectMiniCon`をインポートし、コントローラーのイベントリスナーを登録します。

```html
<button id="connectButton">Connect Joy-Con</button><br>
<textarea id="output" style="width: 90vw; height: 20em; margin-top: 1em;"></textarea>

<script type="module">
  import { connectMiniCon } from "https://code4fukui.github.io/mini-con-webhid/connectMiniCon.js";

  const output = document.getElementById("output");

  connectButton.onclick = () => {
    // The connectMiniCon function takes a callback that will receive event data.
    connectMiniCon((event) => {
      output.value = JSON.stringify(event, null, 2);
    });
  };
</script>
```

## APIリファレンス

### `connectMiniCon(listener)`

接続プロセスを開始します。この関数はユーザーの操作（例: ボタンクリック）から呼び出す必要があります。ユーザーにHIDデバイスの選択を促すプロンプトを表示します。

-   `listener`: Joy-Conからの新しい入力があるたびにイベントオブジェクトを受け取るコールバック関数。

### イベントオブジェクト

`listener`コールバックは、以下のプロパティを持つイベントオブジェクトを受け取ります:

| プロパティ | 型      | 説明                                                  |
|----------|---------|-------------------------------------------------------|
| `up`     | boolean | 左のアナログスティックが上に倒された場合に`true`。    |
| `down`   | boolean | 左のアナログスティックが下に倒された場合に`true`。    |
| `left`   | boolean | 左のアナログスティックが左に倒された場合に`true`。    |
