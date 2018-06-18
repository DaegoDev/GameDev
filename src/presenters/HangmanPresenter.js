/**
 * @author       Diego Alejandro Alvarez Gallego <da.alvarez@globant.com>
 * @copyright    2018 Globant
 * @license      Globant
 */

 import { Word } from '../core/entities/Word'
import { log } from 'util';

export class HangmanPresenter {
    constructor(view) {
        this.view = view
        this.points = 6;

        var hints = [
            "Is the responsible for giving an opinion about the candidate in the technical interview"
        ]
        var definition = ""

        this.word = new Word("THE GATEKEEPER", definition, hints);
    }

    losePoint() {
        this.points -= 1;
        if (this.points == 0) {
            this.view.loseGame(10)
        }
        console.log(this.points);        
    }

    getWord() {
        return this.word.wordText
    }

    getHint() {
        return this.word.hints[0]
    }

    getDefinition() {
        return this.word.definition
    }
}
