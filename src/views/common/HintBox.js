/**
 * @author       Diego Alejandro Alvarez Gallego <da.alvarez@globant.com>
 * @copyright    2018 Globant
 * @license      Globant
 */

export class HintBox {

    constructor(game, x, y, hint) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.hint = hint

        this.buildHintBox();            
    }

    buildHintBox() {
        var style = { 
            font: 'bold 14pt Arial', 
            fill: 'black', 
            align: 'left', 
            wordWrap: true, 
            wordWrapWidth: 800 
          };

          this.hintLabel = this.game.add.text(
            this.x,
            this.y, 
            "Hint:", 
            style
          );

          style = { 
            font: 'normal 14pt Arial', 
            fill: 'black', 
            align: 'left', 
            wordWrap: true, 
            wordWrapWidth: 800 
          };

          this.hintText = this.game.add.text(
            this.x + 50,
            this.y, 
            this.hint, 
            style
          );
    }

    setHint(hint) {
        this.hintText.setText(hint);
    }
}
