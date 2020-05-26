namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -110
    }
})
info.player2.onLifeZero(function () {
    game.showLongText("player 1 wins!", DialogLayout.Center)
    game.reset()
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (mySprite2.vy == 0) {
        mySprite2.vy = -110
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (mySprite.vy > 0) {
        info.player2.changeLifeBy(-1)
        pause(1000)
    } else if (mySprite2.vy > 0) {
        info.player1.changeLifeBy(-1)
        pause(1000)
    }
})
info.player1.onLifeZero(function () {
    game.showLongText("player two wins!", DialogLayout.Center)
    game.reset()
})
let number_of_bounce = 0
let mySprite: Sprite = null
let mySprite2: Sprite = null
mySprite2 = sprites.create(img`
8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 
`, SpriteKind.Enemy)
mySprite = sprites.create(img`
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 
`, SpriteKind.Player)
mySprite2.setPosition(40, 104)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.player2.setLife(4)
tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010101010101010101`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tilePath5],
            TileScale.Sixteen
        ))
controller.player1.moveSprite(mySprite, 100, 0)
info.player1.setLife(5)
mySprite.ay = 200
mySprite2.ay = 200
controller.player2.moveSprite(mySprite2, 100, 0)
forever(function () {
	
})
forever(function () {
    blockSettings.writeNumber("high score", info.highScore())
})
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        number_of_bounce = 0
    }
})
