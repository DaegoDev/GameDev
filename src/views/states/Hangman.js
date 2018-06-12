/**
 * @author       Diego Alejandro Alvarez Gallego <da.alvarez@globant.com>
 * @copyright    2018 Globant
 * @license      Globant
 */

import Phaser from 'phaser'
import { Keyboard } from '../components/hangman/Keyboard'
import { WordBox } from '../components/hangman/WordBox'
import { HangmanPresenter } from '../../presenters/HangmanPresenter'

export class Hangman extends Phaser.State {
  init() { }

  preload() { 
    this.load.image('tile', './assets/images/tile2.png')
  }

  create() {
    this.presenter = new HangmanPresenter()

    const bannerText = 'Phaser + ES6 + Webpack'
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText, {
      font: '40px Bangers',
      fill: '#77BFA3',
      smoothed: false
    })
    banner.padding.set(10, 16);
    banner.anchor.setTo(0.5);

    this.keyboard = new Keyboard(this, 0, 150, 80, 80);  
    this.keyboard.setDelegate(this)

    this.wordBox = new WordBox(this, 25,0, this.presenter.word);
  }

  render() {

  }

  // Delegate Methods
  letterClicked(letter) {
    console.log(letter.character.text);
    this.wordBox.guessLetter(letter.character.text)
  }
}
