/**
 * @author       Diego Alejandro Alvarez Gallego <da.alvarez@globant.com>
 * @copyright    2018 Globant
 * @license      Globant
 */

export const ResourceConstants = {
    common: {
        sprites: [
            { key: 'mouse', src: './assets/images/common/mouse.png' },
            { key: 'keyboard', src: './assets/images/common/keyboard.png' }
        ],
        spriteSheets: [
            { key: 'button', src: './assets/images/common/button.png', width: 180, height: 50, frames: 3 }
        ]
    },
    hangman: {
        sprites: [
            { key: 'tile', src: './assets/images/hangman/tile2.png' }
        ],
        spriteSheets: [
            { key: 'hangman', src: './assets/images/hangman/hangman.png', width: 75, height: 200, frames: 7 }
        ]
    }
}