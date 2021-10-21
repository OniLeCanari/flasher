basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    led.plot(0, 4)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P1, 1)
    led.unplot(0, 4)
    basic.pause(900)
})
