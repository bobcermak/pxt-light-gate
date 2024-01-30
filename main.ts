
let soucetvse: number = 0
let prumer: number 





basic.forever(function () {
    if (input.lightLevel() < prumer) {
        music.playTone(400, 500)
    }

})


input.onButtonPressed(Button.A, function () {
    basic.showString("K!")
    for (let i = 0; i <= 20; i++) {
        basic.pause(50)
        soucetvse += input.lightLevel()
    }

    prumer = soucetvse / 20
    music.playTone(400, 500)
    basic.pause(50)

})

input.onLogoEvent(TouchButtonEvent.Pressed, function() {
    control.reset()
})

    


