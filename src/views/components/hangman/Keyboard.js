/**
 * @author       Diego Alejandro Alvarez Gallego <da.alvarez@globant.com>
 * @copyright    2018 Globant
 * @license      Globant
 */

import { KeyboardConfig } from '../../consts/hangman/KeyboardConfig'
import { Letter } from '../../components/hangman/Letter'

export class Keyboard {

    constructor(game, x, y, letterWidth, letterHeight) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.letterWidth = letterWidth;
        this.letterHeight = letterHeight;
        this.spacing = 10

        this.createLetters()
    }

    createLetters() {
        this.letters = [];
        var letterConfig = KeyboardConfig["letters"];
        var horizontalSpacing = 0
        var verticalSpacing = 0

        letterConfig.forEach(key => {
            horizontalSpacing = this.spacing * key["x"]
            verticalSpacing = this.spacing * key["y"]

            var letter = new Letter(
                this.game, 
                key["x"] * this.letterWidth + this.x + horizontalSpacing, 
                key["y"] * this.letterHeight + this.y + verticalSpacing, 
                'tile', 
                key["letter"]
            )

            letter.setDelegate(this)
            this.letters.push(letter)
        });
    }

    setDelegate(delegate) {
        this.delegate = delegate
    }

    // Letter Delegate Methods

    letterClicked(letter) {
        letter.disable()
        this.delegate.letterClicked(letter)
    }

}
