/**
 * @author       Diego Alejandro Alvarez Gallego <da.alvarez@globant.com>
 * @copyright    2018 Globant
 * @license      Globant
 */

export class Hangman {

    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;

        this.buildHangman()
    }

    buildHangman() {
        this.hagman = this.game.add.sprite(this.x, this.y, 'hangman');
    }

    losePoint() {
        this.hagman.frame += 1
    }
}
