/**
 * @author       Diego Alejandro Alvarez Gallego <da.alvarez@globant.com>
 * @copyright    2018 Globant
 * @license      Globant
 */

export class WordBox {

    constructor(game, x, y, word) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.word = word.split("");

        this.createWordBox()
    }

    createWordBox() {
        var characterCount = this.word.length;
        this.characters = []

        for (var i = 0; i < characterCount; i++) {
            if(this.word[i] === ' ') { continue }

            var tile = this.game.add.image(i * 60 + this.x, this.y, 'tile');
            tile.width = 60;
            tile.height = 60;

            var character = this.game.add.text(
                i * + 60 + this.x + (tile.width / 2),
                this.y + (tile.height / 2),
                "_", 
                {
                    font: "bold 40px Arial",
                    align: "center",
                    color: "red",
                }
            );
            character.anchor.set(0.5)

            this.characters[i] = character        
        }
    }

    guessLetter(letter)  {
        var characterCount = this.word.length;
        for (var i = 0; i < characterCount; i++) {
            if(this.word[i].toLowerCase() == letter.toLowerCase()) {
                this.characters[i].text = this.word[i]
                return true
            }
        }

        return false
    }
}
