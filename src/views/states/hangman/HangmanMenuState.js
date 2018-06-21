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

export class HangmanMenuState extends Phaser.State {
  init() { }

  preload() {
    for (var sprite of ResourceConstants.common.sprites) {
      this.load.image(sprite.key, sprite.src)
    }

    for (var sprite of ResourceConstants.common.spriteSheets) {
      this.load.spritesheet(sprite.key, sprite.src, sprite.width, sprite.height, sprite.frames)
    }
  }

  create() {

    var style = { 
      font: "bold 30px Arial", 
      fill: "#000000", 
      align: "center"
      // wordWrap: true, 
      // wordWrapWidth: 600 
    };

    this.title = this.add.text(
      game.world.centerX,
      game.world.centerY - 100,
      "Hang Man", 
    style);
    this.title.anchor.setTo(0.5)

    style = { 
      font: "normal 12px Arial", 
      fill: "#000000", 
      align: "center"
      // wordWrap: true, 
      // wordWrapWidth: 600 
    };

    var guide = "The objective of the game Hangman is to guess the word (phrase) in the time limit.\n\
    After guessing a word you are going to guess the next one.\n\
    If you fail to guess the word in the time limit, '10 points' will be subtracted from your score.\n\n\
    Click a letter to guess it, or type with your keyboard."

    var text = this.add.text(
      game.world.centerX,
      game.world.centerY,
      guide, 
    style);
    text.anchor.setTo(0.5)

    var button = this.add.button(game.world.centerX, game.world.centerY + 100, 'button', this.actionOnClick, this, 1, 0, 2)
    button.anchor.setTo(0.5)

    this.buttonText = this.game.add.text(
      game.world.centerX,
      game.world.centerY + 100,
      'PLAY GAME', {
        font: "normal 14px Arial",
        align: "center",
        color: "red",
      }
    );
    this.buttonText.anchor.setTo(0.5)


    this.controlsBanner = new ControlsBanner(this, 0, config.gameHeight - 75, config.gameWidth, 75)
  }

  render() {
  }

  actionOnClick() {
    this.state.start('HangmanGameState')
  }
}