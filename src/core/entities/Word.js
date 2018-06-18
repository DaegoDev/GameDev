/**
 * @author       Diego Alejandro Alvarez Gallego <da.alvarez@globant.com>
 * @copyright    2018 Globant
 * @license      Globant
 */

export class Word {
  constructor (word, definition, hints = []) {
    this.wordText = word
    this.definition = definition
    this.hints = hints
  }
}