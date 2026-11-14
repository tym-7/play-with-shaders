import kaplay from "https://unpkg.com/kaplay@4000.0.0-alpha.27.1/dist/kaplay.mjs"

const kap = kaplay({
    canvas: document.getElementById("screen"),
    width: 1595,
    height: 1099,
    loadingScreen: false
});

kap.loadSprite("pico", "pico.png");

kap.onLoad(() => {
  const pico = kap.add([
    kap.sprite("pico"),
    kap.pos (800, 550),
    kap.fixed(),
    kap.z(1),
    ]);
});

document.addEventListener("keydown", (e) => {
    if (e.key === "9") {
        // add shader
    }
});
