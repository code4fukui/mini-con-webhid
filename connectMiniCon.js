import { connectJoyCon, connectedJoyCons } from "https://code4fukui.github.io/joy-con-webhid/src/index.js";

let listener = null;
export const connectMiniCon = (_listener) => {
  connectJoyCon();
  listener = _listener;
};

setInterval(async () => {
  for (const joyCon of connectedJoyCons.values()) {
    if (joyCon.eventListenerAttached) {
      continue;
    }
    await joyCon.open();
    await joyCon.enableStandardFullMode();
    await joyCon.enableIMUMode();
    //await joyCon.enableVibration();
    //console.log(joyCon); // GeneralController
    joyCon.addEventListener('hidinput', (event) => {
      //visualize(joyCon, event.detail);
      //console.log(event.detail);
      //console.log(event.detail.analogStickLeft);
      const h = event.detail.analogStickLeft?.horizontal || 0;
      const v = event.detail.analogStickLeft?.vertical || 0;
      const e = { target: joyCon };
      e.up = v < -1;
      e.down = v > 1;
      e.left = h < -1;
      e.right = h > 1;
      const btn = event.detail.buttonStatus;
      e.a = btn.a;
      e.b = btn.b;
      e.x = btn.x;
      e.y = btn.y;
      e.r = btn.r;
      e.l = btn.l;
      e.select = btn.minus;
      e.start = btn.plus;
      //console.log(up, down, left, right);
      //console.log(e);
      if (listener) listener(e);
      //console.log(event.detail);
    });
    joyCon.eventListenerAttached = true;
  }
}, 1000);
