import Container = Phaser.GameObjects.Container
import {SceneEvent} from "../../../../Game";

export default class StartScene extends Phaser.Scene {
  public static NAME: string = "start_scene"

  public layer1: Container

  constructor() {
    super({key: StartScene.NAME})
  }

  public init(data) {
    // console.log("StartScene init:", data)
    this.data.values = data

    let relativeX = (Number(this.game.config.width) - 1024) / 2
    let centerX = Number(this.game.config.width) / 2
    let centerY = Number(this.game.config.height) / 2
    this.layer1 = this.add.container(relativeX, 0)

    let blackRect = this.add.graphics({x: centerX - 50, y: centerY - 50})
      .fillStyle(0x000000, 1)
      .fillRect(0, 0, 100, 100)
    this.layer1.add(blackRect)

    this.events.emit(SceneEvent.INIT_COMPLETE)
  }

  public preload() {
    this.load.image("bg_default.png", "./static/assets/start/bg_default.png")
  }

  public create() {
    let bgImg = this.add.image(0, 0, "bg_default.png").setOrigin(0, 0)
    this.layer1.addAt(bgImg, 0)

    this.events.emit(SceneEvent.CREATE_COMPLETE)
  }

  public sceneIn() {
    window.TweenMax.fromTo(this.layer1, 1, {alpha: 0}, {alpha: 1, ease: window.Power0.easeNone})
  }

  public sceneOut() {
    window.TweenMax.to(this.layer1, 0.5, {alpha: 0, ease: window.Power0.easeNone})
  }

  public shutdownListener() {

  }

  public destoryListener() {
    this.shutdownListener()
  }
}