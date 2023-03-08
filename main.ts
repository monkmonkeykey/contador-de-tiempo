let t0 = 0
let t1 = 0
let d = 0
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        t0 = control.eventTimestamp()
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        t1 = control.eventTimestamp()
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
        d = t1 - t0
        basic.showString("  ")
        basic.showNumber(d)
    }
})
