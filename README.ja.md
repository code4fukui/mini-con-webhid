# mini-con-webhid

https://code4fukui.github.io/mini-con-webhid/

Joy-ConをWebHIDで使うためのライブラリです。

## デモ

https://code4fukui.github.io/mini-con-webhid/ にデモページがあります。

## 機能

- Joy-Conの接続と入力イベントの取得
- アナログスティックやボタンの状態取得

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