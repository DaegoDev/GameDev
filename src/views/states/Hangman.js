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
    this.load.image('mouse', './assets/images/mouse.png')
    this.load.image('keyboard', './assets/images/keyboard.png')
    this.load.spritesheet('hangman', './assets/images/man.png', 75, 200, 18);
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
  }

  create() {
    this.presenter = new HangmanPresenter()

    this.keyboard = new Keyboard(this, 0, 150, 60, 60);  
    this.keyboard.setDelegate(this)

    this.wordBox = new WordBox(this, 25,0, this.presenter.word);

    var sprite = this.add.sprite(800, 200, 'hangman');
    sprite.animations.add('walk');
    sprite.animations.play('walk', 30, true);

    var graphics = game.add.graphics(0, 0);
    
    // draw a rectangle
    graphics.lineStyle(2, 0xE4E4E4, 1);
    graphics.beginFill(0xE4E4E4);
    graphics.drawRect(0, 550, 1000, 75);
    graphics.endFill();

    graphics.beginFill(0xd7d7d7);
    graphics.drawRect(0, 550, 250, 75);
    graphics.endFill();

    this.character = this.game.add.text(
      80,
      575,
      "Controls", 
      {
          font: "bold 18px Arial",
          align: "center",
          color: "red",
      }
  );

    sprite = this.add.sprite(270, 550, 'keyboard');
    sprite = this.add.sprite(460, 550, 'mouse');
  }

  render() {

  }

  // Delegate Methods
  letterClicked(letter) {
    console.log(letter.character.text);
    this.wordBox.guessLetter(letter.character.text)
  }
}