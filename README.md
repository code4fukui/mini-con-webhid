# mini-con-webhid

https://code4fukui.github.io/mini-con-webhid/

## usage

```html
<button id=connectButton>connect</button><br>
<textarea id=ta></textarea>

<script type="module">
import { connectMiniCon } from "https://code4fukui.github.io/mini-con-webhid/connectMiniCon.js";

connectButton.onclick = () => {
  connectMiniCon((e) => {
    //console.log(e);
    ta.value = JSON.stringify(e, null, 2);
  });
};
</script>
```

## lib

- [Joy-Con WebHID](https://github.com/code4fukui/joy-con-webhid/)
