/**
 * @author       Diego Alejandro Alvarez Gallego <da.alvarez@globant.com>
 * @copyright    2018 Globant
 * @license      Globant
 */

import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './views/states/BootState'
import SplashState from './views/states/SplashState'

import { HangmanMenuState } from './views/states/hangman/HangmanMenuState'
import { HangmanGameState } from './views/states/hangman/HangmanGameState'
import { HangmanGameOverState } from './views/states/hangman/HangmanGameOverState'

import config from './config'

class Game extends Phaser.Game {
  constructor () {
    const docElement = document.documentElement
    // const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth
    // const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight
    
    const width = config.gameWidth 
    const height = config.gameHeight

    super(width, height, Phaser.AUTO, 'content', null)

    this.state.add('BootState', BootState, false)
    this.state.add('SplashState', SplashState, false)

    this.state.add('HangmanMenuState', HangmanMenuState, false)
    this.state.add('HangmanGameState', HangmanGameState, false)
    this.state.add('HangmanGameOverState', HangmanGameOverState, false)


    // with Cordova with need to wait that the device is ready so we will call the Boot state in another file
    if (!window.cordova) {
      this.state.start('BootState')
    }
  }
}

window.game = new Game()

if (window.cordova) {
  var app = {
    initialize: function () {
      document.addEventListener(
        'deviceready',
        this.onDeviceReady.bind(this),
        false
      )
    },

    // deviceready Event Handler
    //
    onDeviceReady: function () {
      this.receivedEvent('deviceready')

      // When the device is ready, start Phaser Boot state.
      window.game.state.start('Boot')
    },

    receivedEvent: function (id) {
      console.log('Received Event: ' + id)
    }
  }

  app.initialize()
}
