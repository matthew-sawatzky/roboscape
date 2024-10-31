import { k } from "./kaboomLoader.js";
import { room1 } from "./scenes/room1.js";
import { room2 } from "./scenes/room2.js";
import { setBackgroundColor } from "./scenes/roomUtils.js";
import { makeNotificationBox } from "./ui/notificationBox.js";

async function main() {
  const room1Data = await (await fetch("./maps/room1.json")).json();
  const room2Data = await (await fetch("./maps/room2.json")).json();

  k.scene("room1", (previousSceneData = {}) => {
    room1(k, room1Data, previousSceneData);
  });

  k.scene("room2", (previousSceneData = {}) => {
    room2(k, room2Data, previousSceneData);
  });
}

main();

k.scene("intro", () => {
  setBackgroundColor(k, "#20214a");
  k.add(
    makeNotificationBox(
      k, 
      "ROBOSCAPE\n\nEscape the city!\nUse arrow keys to move, x to jump and z to attack.\nPress enter to start!",
    )
  )
  k.onKeyPress("enter", () => {
    const context = new AudioContext();
    context.resume();
    k.go("room1", { exitName: null });
  });
});



k.scene("final-exit", () => {
  setBackgroundColor(k, "#20214a");
  k.add(makeNotificationBox(k, "You escaped the city!\nThanks for playing!"));
});

k.go("intro");
