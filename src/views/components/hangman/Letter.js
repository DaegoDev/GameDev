/**
 * @author       Diego Alejandro Alvarez Gallego <da.alvarez@globant.com>
 * @copyright    2018 Globant
 * @license      Globant
 */

export class Letter {

    constructor(game, x, y, key, character) {
        this.game = game;
        this.x = x;
        this.y = y;

        this.letterBox = this.game.add.image(x, y, key);
        this.letterBox.width = 60;
        this.letterBox.height = 60;

        this.character = this.game.add.text(
            x + (this.letterBox.width / 2),
            y + (this.letterBox.height / 2),
            character, {
                font: "bold 30px Arial",
                align: "center",
                color: "red",
            }
        );

        this.character.anchor.set(0.5)

        this.letterBox.inputEnabled = true
        this.letterBox.events.onInputDown.add(this.onInputDown, this);

    }

    setDelegate(delegate) {
        this.delegate = delegate
    }

    disable() {
        this.letterBox.visible = false
        this.character.visible = false
    }

    onInputDown() {
        this.delegate.letterClicked(this)
    }
}
