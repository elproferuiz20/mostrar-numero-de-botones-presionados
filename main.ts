input.onButtonPressed(Button.A, function () {
    basic.showNumber(1)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(1)
    basic.clearScreen()
})
basic.forever(function () {
    basic.showNumber(0)
    while (input.buttonIsPressed(Button.AB)) {
        basic.showNumber(2)
        basic.clearScreen()
    }
})
