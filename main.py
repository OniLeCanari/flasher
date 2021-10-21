def on_forever():
    pins.digital_write_pin(DigitalPin.P1, 1)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                # . . . .
    """)
    basic.pause(100)
    pins.digital_write_pin(DigitalPin.P1, 0)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                # # . . .
                . # . . .
    """)
    basic.pause(100)
    basic.show_leds("""
        . . . . .
                . . . . .
                # # . . .
                . . # . .
                . . # . .
    """)
    basic.pause(100)
    basic.show_leds("""
        . . . . .
                # # # . .
                . . . # .
                . . . # .
                . . . # .
    """)
    basic.pause(600)
basic.forever(on_forever)
