input.onButtonPressed(Button.A, function () {
    Character.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    Character.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    Character.change(LedSpriteProperty.X, 1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Character.change(LedSpriteProperty.Y, -1)
})
let Character: game.LedSprite = null
Character = game.createSprite(2, 2)
let Room = 0
basic.forever(function () {
    if (Room == 0) {
        led.plot(0, 0)
        led.plot(1, 0)
        led.plot(3, 0)
        led.plot(4, 0)
        led.plot(0, 1)
        led.plot(0, 2)
        led.plot(0, 3)
        led.plot(0, 4)
        led.plot(1, 4)
        led.plot(3, 4)
        led.plot(4, 4)
        led.plot(4, 3)
        led.plot(4, 2)
        led.plot(4, 1)
        if (Character.get(LedSpriteProperty.X) == 0) {
            Character.set(LedSpriteProperty.X, 1)
        }
        if (Character.get(LedSpriteProperty.X) == 4) {
            Character.set(LedSpriteProperty.X, 3)
        }
        if (Character.get(LedSpriteProperty.Y) == 4) {
            if (Character.get(LedSpriteProperty.X) == 1) {
                Character.set(LedSpriteProperty.Y, 3)
            }
        }
        if (Character.get(LedSpriteProperty.Y) == 4) {
            if (Character.get(LedSpriteProperty.X) == 3) {
                Character.set(LedSpriteProperty.Y, 3)
            }
        }
        if (Character.get(LedSpriteProperty.Y) == 0) {
            if (Character.get(LedSpriteProperty.X) == 3) {
                Character.set(LedSpriteProperty.Y, 1)
            }
        }
        if (Character.get(LedSpriteProperty.Y) == 0) {
            if (Character.get(LedSpriteProperty.X) == 1) {
                Character.set(LedSpriteProperty.Y, 1)
            }
        }
        if (Character.get(LedSpriteProperty.Y) == 0) {
            if (Character.get(LedSpriteProperty.X) == 2) {
                Character.set(LedSpriteProperty.Y, 3)
                Room = 1
            }
        }
    }
    if (Room == 1) {
        led.plot(1, 0)
        led.plot(1, 1)
        led.plot(1, 2)
        led.plot(1, 3)
        led.plot(1, 4)
        led.plot(3, 0)
        led.plot(3, 1)
        led.plot(3, 2)
        led.plot(3, 3)
        led.plot(3, 4)
        if (Character.get(LedSpriteProperty.X) == 1) {
            Character.set(LedSpriteProperty.X, 2)
        }
        if (Character.get(LedSpriteProperty.X) == 3) {
            Character.set(LedSpriteProperty.X, 2)
        }
        if (Character.get(LedSpriteProperty.Y) == 4) {
            Room = 0
            Character.set(LedSpriteProperty.Y, 1)
        }
        if (Character.get(LedSpriteProperty.Y) == 0) {
            Room = 2
            Character.set(LedSpriteProperty.Y, 3)
        }
    }
    if (Room == 2) {
        led.plot(1, 0)
        led.plot(1, 1)
        led.plot(0, 1)
        led.plot(3, 0)
        led.plot(3, 1)
        led.plot(4, 1)
        led.plot(0, 3)
        led.plot(1, 3)
        led.plot(1, 4)
        led.plot(3, 3)
        led.plot(3, 4)
        led.plot(4, 3)
        if (Character.get(LedSpriteProperty.X) == 1) {
            if (Character.get(LedSpriteProperty.Y) == 1) {
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.Y, 2)
            }
        }
        if (Character.get(LedSpriteProperty.X) == 3) {
            if (Character.get(LedSpriteProperty.Y) == 1) {
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.Y, 2)
            }
        }
        if (Character.get(LedSpriteProperty.X) == 3) {
            if (Character.get(LedSpriteProperty.Y) == 3) {
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.Y, 2)
            }
        }
        if (Character.get(LedSpriteProperty.X) == 1) {
            if (Character.get(LedSpriteProperty.Y) == 3) {
                Character.set(LedSpriteProperty.X, 2)
                Character.set(LedSpriteProperty.Y, 2)
            }
        }
        if (Character.get(LedSpriteProperty.X) == 0) {
            Room = 3
            Character.set(LedSpriteProperty.X, 3)
        }
        if (Character.get(LedSpriteProperty.X) == 4) {
            Room = 4
            Character.set(LedSpriteProperty.X, 1)
        }
        if (Character.get(LedSpriteProperty.Y) == 4) {
            Room = 2
            Character.set(LedSpriteProperty.X, 3)
        }
    }
})
