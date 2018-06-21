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

export class HangmanGameOverState extends Phaser.State {
  init() { }

  preload() { }

  create() { }

  render() {
  }
}