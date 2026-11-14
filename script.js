import kaplay from "https://unpkg.com/kaplay@4000.0.0-alpha.27.1/dist/kaplay.mjs"

const kap = kaplay({
    canvas: document.getElementById("screen"),
    width: 1595,
    height: 1099,
    loadingScreen: false
});

kap.loadSprite("pico", "pico.png");
//kap.loadShaderURL("1", null, "shaders/1.frag");
//kap.loadShaderURL("2", null, "shaders/2.frag");
//kap.loadShaderURL("3", null, "shaders/3.frag");
//kap.loadShaderURL("4", null, "shaders/4.frag");
//kap.loadShaderURL("5", null, "shaders/5.frag");
//kap.loadShaderURL("6", null, "shaders/6.frag");
//kap.loadShaderURL("7", null, "shaders/7.frag");
//kap.loadShaderURL("8", null, "shaders/8.frag");
kap.loadShaderURL("9", null, "shaders/9.frag");


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
       pico.use(kap.shader("9"));
    }
});
