# mini-con-webhid

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A library to connect to the Nintendo Switch Joy-Con using the WebHID API.

## Demo
https://code4fukui.github.io/mini-con-webhid/

## Features
- Connect to Nintendo Switch Joy-Con using the WebHID API
- Retrieve input events from the Joy-Con, including analog stick and button states

## Usage

```html
<button id=connectButton>connect</button><br>
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

## Libraries
- [Joy-Con WebHID](https://github.com/code4fukui/joy-con-webhid/)

## License
MIT License