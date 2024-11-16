import Container = PIXI.Container

export default class DragContainer extends Container {

  public element: any;

  constructor() {
    super()

    let sp = this.element = PIXI.Sprite.fromFrame("t1.png");
    sp.anchor.set(0.5, 0.5)
    this.addChild(sp);
    sp.name = "t1.png";
    sp.buttonMode = true;
    sp.interactive = true;

    var squares = [createSquare(), createSquare(), createSquare(), createSquare()];

    squares.map((currentValue, index, array) => {
      currentValue.name = "square" + index.toString();
      this.addChild(currentValue);
    });

    var w = this.element.width,
      h = this.element.height,
      p = new PIXI.Point(this.element.x - w / 2, this.element.y - h / 2);

    squares[0].x = p.x;
    squares[0].y = p.y;

    p = new PIXI.Point(this.element.x + this.element.width - w / 2, this.element.y - h / 2);
    squares[1].x = p.x;
    squares[1].y = p.y;

    p = new PIXI.Point(this.element.x + this.element.width - w / 2, this.element.y + this.element.height - h / 2);
    squares[2].x = p.x;
    squares[2].y = p.y;

    p = new PIXI.Point(this.element.x - w / 2, this.element.y + this.element.height - h / 2);
    squares[3].x = p.x;
    squares[3].y = p.y;

    console.log(this)
    console.log(this.width, this.height)

    sp.on("pointerdown", this.onDragStart);
    sp.on("pointerup", this.onDragEnd);
    sp.on("pointerupoutside", this.onDragEnd);
    sp.on("pointermove", this.onDragMove);
  }

  public onDragStart(event) {
    console.log("dragstart: " + event.target.name);
  }

  public onDragEnd(event) {

  }

  public onDragMove(event) {
    console.log(event.data.global.x, event.data.global.y);
  }
}

function createSquare() {
  var graphics = new PIXI.Graphics();
  graphics.beginFill(0xff0000, 1);
  graphics.drawRect(-10, -10, 20, 20);
  graphics.interactive = true;
  return graphics;
}