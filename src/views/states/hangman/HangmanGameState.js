/**
 * @author       Diego Alejandro Alvarez Gallego <da.alvarez@globant.com>
 * @copyright    2018 Globant
 * @license      Globant
 */

import Phaser from 'phaser'
import config from '../../../config';
import { Timer } from '../../common/Timer'
import { WordBox } from '../../components/hangman/WordBox'
import { HintBox } from '../../common/HintBox'
import { Keyboard } from '../../components/hangman/Keyboard'
import { Hangman } from '../../components/hangman/Hangman'
import { ControlsBanner } from '../../common/ControlsBanner'
import { HangmanPresenter } from '../../../presenters/HangmanPresenter'
import { ResourceConstants } from '../../consts/ResourceConstants'

export class HangmanGameState extends Phaser.State {
  init() { }

  preload() {
    // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
    
    for (var sprite of ResourceConstants.hangman.sprites) {
      this.load.image(sprite.key, sprite.src)
    }

    for (var sprite of ResourceConstants.hangman.spriteSheets) {
      this.load.spritesheet(sprite.key, sprite.src, sprite.width, sprite.height, sprite.frames)
    }
  }

  create() {
    this.presenter = new HangmanPresenter(this)

    this.timer = new Timer(this, 900, 25)
    this.wordBox = new WordBox(this, 25, 25, this.presenter.getWord());
    this.hintBox = new HintBox(this, 25, 120, this.presenter.getHint())
    this.keyboard = new Keyboard(this, 25, 200, 60, 60);
    this.hangman = new Hangman(this, 800, 200)
    this.controlsBanner = new ControlsBanner(this, 0, config.gameHeight - 75, config.gameWidth, 75)
   
    this.keyboard.setDelegate(this)
  }

  render() {
    this.timer.updateTime()
  }

  // Delegate Methods
  letterClicked(letter) {
    var wordGuessed = this.wordBox.guessLetter(letter.character.text)

    if(!wordGuessed) {
      this.hangman.losePoint()
      this.presenter.losePoint()
    }
  }

  // Presenter Callbacks
  loseGame(score) {
    this.state.start('GameOverState')
    console.log(score);    
  }
}