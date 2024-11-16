import Mediator = puremvc.Mediator;
import IMediator = puremvc.IMediator;
import InitLoading from "./scenes/loading/InitLoading"
import Scene, {SceneEvent} from "./base/Scene";
import SceneCommand from "../controller/commands/SceneCommand";

export default class LoadingMediator extends Mediator implements IMediator {
  public static NAME: string = "loading_mediator"

  constructor(viewComponent: any) {
    super(LoadingMediator.NAME, viewComponent)
    this.initLoading.on(SceneEvent.INIT_COMPLETE, this.initComplete, this);
  }

  private initComplete() {
    var _asset = ["./static/assets/assets.json"];
    var _assetLoader = new PIXI.loaders.Loader();
    _assetLoader.add(_asset);
    _assetLoader.once("complete", () => {
      this.sendNotification(SceneCommand.TO_START, {from: this.initLoading});
    });
    _assetLoader.on("progress", (e) => {
      console.log("加载百分比" + e.progress + "%");
    });
    _assetLoader.load();
  }

  public get initLoading() {
    return this.viewComponent as InitLoading
  }
}