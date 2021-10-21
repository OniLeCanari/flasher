basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # . . .
        . # . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        . . # . .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # # # . .
        . . . # .
        . . . # .
        . . . # .
        `)
    basic.pause(600)
})
