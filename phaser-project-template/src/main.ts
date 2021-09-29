import Game from "./Game"

// let maxZoomRatio = 16 / 9 // ~=1.777
let maxZoomRatio = 12 / 9
let minZoomRatio = 4 / 3 // ~=1.333

let windowWidth = document.documentElement.clientWidth || document.body.clientWidth
let windowHeight = document.documentElement.clientHeight || document.body.clientHeight
let windowRatio = windowWidth / windowHeight

let stageHeight = 768
let stageWidth = stageHeight * (
  (windowRatio < minZoomRatio)
    ? minZoomRatio
    : (windowRatio > maxZoomRatio)
    ? maxZoomRatio
    : windowRatio)

let game = new Game({
  type: Phaser.AUTO,
  transparent: true,
  // backgroundColor: 0x1099bb,
  autoFocus: true,
  scale: {
    parent: "phaser_player",
    width: stageWidth,
    height: stageHeight,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
})