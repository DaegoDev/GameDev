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

        this.createLetters()
    }

    createLetters() {
        this.letters = [];
        var letterConfig = KeyboardConfig["letters"];
        letterConfig.forEach(key => {
            var letter = new Letter(
                this.game, 
                key["x"] * this.letterWidth + this.x, 
                key["y"] * this.letterHeight + this.y, 
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
