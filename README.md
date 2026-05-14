# mini-con-webhid

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A lightweight library for connecting to Nintendo Switch Joy-Cons in the browser using the WebHID API.

## Demo

**Live Demo: https://code4fukui.github.io/mini-con-webhid/**

To use the demo:
1.  Pair your Joy-Con with your computer via Bluetooth.
2.  Open the demo page in a compatible browser.
3.  Click the "connect" button and select your Joy-Con from the device list.
4.  Press buttons and move the analog stick to see the JSON output.

## Features

-   Simple, one-function API to connect to Joy-Cons.
-   Provides a simplified event object for button presses and analog stick directions.
-   Abstracts the low-level details of the underlying [Joy-Con WebHID](https://github.com/code4fukui/joy-con-webhid/) library.

## Requirements

-   A browser that supports the [WebHID API](https://developer.mozilla.org/en-US/docs/Web/API/WebHID_API) (e.g., Chrome, Edge, or Opera on desktop).
-   A Joy-Con controller paired with your computer via Bluetooth.

## Usage

Import `connectMiniCon` from the CDN and use it to register a listener for controller events.

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

## API Reference

### `connectMiniCon(listener)`

Initiates the connection process. This function should be called from a user gesture, like a button click. It will prompt the user to select a HID device.

-   `listener`: A callback function that receives an event object each time there is new input from the Joy-Con.

### Event Object

The `listener` callback receives an event object with the following properties:

| Property | Type    | Description                                                 |
|----------|---------|-------------------------------------------------------------|
| `up`     | boolean | `true` if the left analog stick is pushed up.               |
| `down`   | boolean | `true` if the left analog stick is pushed down.             |
| `left`   | boolean | `true` if the left analog stick is pushed left.             |