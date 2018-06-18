/**
 * @author       Diego Alejandro Alvarez Gallego <da.alvarez@globant.com>
 * @copyright    2018 Globant
 * @license      Globant
 */

export class Timer {

    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;

        this.buildTimer()
        this.updateTime()
    }

    buildTimer() {
        this.timer = this.game.add.text(
            this.x,
            this.y,
            'Time: ', {
              font: "bold 18px Arial",
              align: "center",
              color: "red",
            }
          );
    }

    updateTime() {
        var minutes = this.game.time.totalElapsedSeconds() / 60
        var seconds = this.game.time.totalElapsedSeconds() % 60
        minutes = Math.floor(minutes)
        seconds = Math.floor(seconds)
    
        minutes = minutes.toString().length <= 1 ? "0" + minutes : minutes  
        seconds = seconds.toString().length <= 1 ? "0" + seconds : seconds  
    
        this.timer.setText('Time: ' + minutes + ":" + seconds)
    }
}
