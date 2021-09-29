import ApplicationFacade from "./org/ApplicationFacade"

export const enum SceneEvent {
  INIT_COMPLETE = "init_complete",
  CREATE_COMPLETE = "create_complete",
}

export default class Game extends Phaser.Game {

  public static NAME = ""

  public static NUM = 0

  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config)
    Game.NAME = "game" + Game.NUM++
  }

  protected start() {
    super.start()
    let app: ApplicationFacade = ApplicationFacade.getInstance(Game.NAME) as ApplicationFacade
    app.startup(this)
  }
}