# mini-con-webhid

Nintendo Switch Joy-Conをウェブブラウザから操作するためのライブラリです。WebHID APIを使用しています。

## デモ
https://code4fukui.github.io/mini-con-webhid/ でデモページを公開しています。

## 機能
- Nintendo Switch Joy-Conの接続
- アナログスティックやボタンの入力イベントの取得

## 使い方

```html
<button id=connectButton>接続</button><br>
<textarea id=ta></textarea>

<script type="module">
import { connectMiniCon } from "https://code4fukui.github.io/mini-con-webhid/connectMiniCon.js";

connectButton.onclick = () => {
  connectMiniCon((e) => {
    ta.value = JSON.stringify(e, null, 2);
  });
};
</script>
```

## ライセンス
MIT License