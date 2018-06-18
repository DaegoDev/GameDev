/**
 * @author       Diego Alejandro Alvarez Gallego <da.alvarez@globant.com>
 * @copyright    2018 Globant
 * @license      Globant
 */

import Phaser from 'phaser'
import config from '../../config';

import { ControlsBanner } from '../common/ControlsBanner'

export class GameOverState extends Phaser.State {
  init() { 
      
  }

  preload() {

  }

  create() {
    this.controlsBanner = new ControlsBanner(this, 0, config.gameHeight - 75, config.gameWidth, 75)
  }

  render() {

  }

}