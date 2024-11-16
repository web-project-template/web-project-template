import Facade = puremvc.Facade;
import IFacade = puremvc.IFacade;
import Game = Phaser.Game
import StartupCommand from "./controller/StartupCommand"
import GameCommand from "./controller/commands/GameCommand"

export default class ApplicationFacade extends Facade implements IFacade {
  public static STARTUP = "startup"

  public static instance = null

  public static game: Game = null

  constructor(key) {
    super(key)
  }

  public static getInstance(key): ApplicationFacade {
    if (null == key) return null

    if (Facade.instanceMap[key] == null) {
      Facade.instanceMap[key] = new ApplicationFacade(key)
    }

    return Facade.instanceMap[key]
  }

  public initializeController(): void {
    super.initializeController()
    this.registerCommand(ApplicationFacade.STARTUP, StartupCommand)
  }

  public initializeModel(): void {
    super.initializeModel()
  }

  public startup(game) {
    ApplicationFacade.game = game
    this.sendNotification(ApplicationFacade.STARTUP, game)
    this.removeCommand(ApplicationFacade.STARTUP)
    this.sendNotification(GameCommand.INIT_GAME_DATA)
  }

  public destory() {
    if (this.game2) {
      this.game2.destroy(true)
      this.game2 = null
    }

    window.TweenMax.killAll()
  }

  public set game2(val) {
    ApplicationFacade.game = val
  }

  public get game2() {
    return ApplicationFacade.game
  }
}