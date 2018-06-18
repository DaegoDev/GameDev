/**
 * @author       Diego Alejandro Alvarez Gallego <da.alvarez@globant.com>
 * @copyright    2018 Globant
 * @license      Globant
 */

export class ControlsBanner {

    constructor(game, x, y, width, height) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.buildControlsBanner()
    }

    buildControlsBanner() {
        var graphics = this.game.add.graphics(0, 0);
    
        // draw and fill rectangle.
        graphics.lineStyle(2, 0xE4E4E4, 1);
        graphics.beginFill(0xE4E4E4);
        graphics.drawRect(this.x, this.y, this.width, this.height);
        graphics.endFill();
    
        graphics.beginFill(0xd7d7d7);
        graphics.drawRect(this.x, this.y, this.width / 4, this.height);
        graphics.endFill();
    
        // Write control text.
        this.character = this.game.add.text(
          this.x + 80,
          this.y + 25,
          "Controls", 
          {
              font: "bold 18px Arial",
              align: "center",
              color: "red",
          }
         );
    
         this.game.add.sprite(this.x + 270, this.y, 'keyboard');
         this.game.add.sprite(this.x + 460, this.y, 'mouse');
    }
}
