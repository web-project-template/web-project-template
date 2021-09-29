import SimpleCommand = puremvc.SimpleCommand;
import ICommand = puremvc.ICommand
import GameCommand from "./commands/GameCommand"
import SceneCommand from "./commands/SceneCommand"

export default class ControllerPrepCommand extends SimpleCommand implements ICommand {
  constructor() {
    super()
  }

  public execute() {
    new GameCommand().register(this.facade)
    new SceneCommand().register(this.facade)
  }
}