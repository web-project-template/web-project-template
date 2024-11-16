import SimpleCommand = puremvc.SimpleCommand
import ICommand = puremvc.ICommand
import INotification = puremvc.INotification
import ApplicationFacade from "../../ApplicationFacade";
import GameProxy from "../../model/GameProxy"
import SceneCommand from "./SceneCommand";
import StartSceneMediator from "../../view/StartSceneMediator";
import StartScene from "../../view/scenes/start/StartScene";

export default class GameCommand extends SimpleCommand implements ICommand {

  public static INIT_GAME_DATA = "init_game_data"

  public static INIT_GAME_DATA_COMPLETE = "init_game_data_complete"

  public constructor() {
    super()
  }

  public register(facade) {
    facade["registerCommand"](GameCommand.INIT_GAME_DATA, GameCommand)
    facade["registerCommand"](GameCommand.INIT_GAME_DATA_COMPLETE, GameCommand)
  }

  public execute(notification: INotification): void {
    console.log("GameCommand notification:", notification)
    let gameProxy: GameProxy = this.facade["retrieveProxy"](GameProxy.NAME)
    let body = notification.getBody()
    let game = ApplicationFacade.game
    let scenePlugin = game.scene
    switch (notification.getName()) {
      case GameCommand.INIT_GAME_DATA:
        this.sendNotification(GameCommand.INIT_GAME_DATA_COMPLETE)
        break
      case GameCommand.INIT_GAME_DATA_COMPLETE:
        let startScene = scenePlugin.add(StartScene.NAME, StartScene, false)
        this.facade["registerMediator"](new StartSceneMediator(startScene))

        let commandName = SceneCommand.TO_START
        this.sendNotification(commandName, {
          scene: game,
          data: null
        })
        break
    }
  }
}