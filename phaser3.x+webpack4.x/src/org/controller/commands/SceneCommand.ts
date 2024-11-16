import SimpleCommand = puremvc.SimpleCommand
import ICommand = puremvc.ICommand
import INotification = puremvc.INotification
import StartScene from "../../view/scenes/start/StartScene"

export default class SceneCommand extends SimpleCommand implements ICommand {

  public static TO_START = "to_start"

  public static TO_MAIN = "to_main"

  constructor() {
    super()
  }

  public register(facade) {
    facade["registerCommand"](SceneCommand.TO_START, SceneCommand)
    facade["registerCommand"](SceneCommand.TO_MAIN, SceneCommand)
  }

  public execute(notification: INotification) {
    console.log("SceneCommand notification:", notification)
    let name = notification.getName()
    let body = notification.getBody()
    let {scene, data, current} = body
    switch (name) {
      case SceneCommand.TO_START:
        scene.scene.start(StartScene.NAME, data)
        scene.scene.bringToTop(StartScene.NAME)
        break
      case SceneCommand.TO_MAIN:

        break
    }
  }
}