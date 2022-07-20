import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";

export class King extends Figure {

  isFirstStep: boolean = true;

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }

  canMove(target: Cell): boolean {
    if(!super.canMove(target))
      return false;
      const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1
      
//  move up & down
    if ((target.x === this.cell.x + direction || target.x === this.cell.x + (-direction) )
      && target.y === this.cell.y
      && this.cell.board.getCell(target.x, target.y).isEmpty()) {
      return true;
    }
// move left & right
    if ((target.y === this.cell.y + direction || target.y === this.cell.y + (-direction) )
      && target.x === this.cell.x
      && this.cell.board.getCell(target.x, target.y).isEmpty()) {
      return true;
    }

    if(target.x === this.cell.x + direction
    && (target.y === this.cell.y + 1 || target.y === this.cell.y - 1)
    && this.cell.isEnemy(target)) {
      return true;
    }

    return false;
  }

  moveFigure(target: Cell) {
    super.moveFigure(target);
  }
}
