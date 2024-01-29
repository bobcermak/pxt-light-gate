
let soucet: number
let soucetvse: number
let soucetvse2:number
let kalibrace: boolean = false


input.onButtonPressed(Button.A, function() {
    kalibrace = true
    for (let i = 0; i < 20; i++) {
        console.log(input.lightLevel())
        basic.pause(50)
        soucetvse += input.lightLevel()
    }

    soucetvse2 = soucetvse / 20
    music.playTone(400,500)

    kalibrace = false
})

while (true) {
    if(!kalibrace) {
        if (input.lightLevel() < soucetvse2 ) {
            music.playTone(400,500)
        }
    }
    console.log(input.lightLevel())
    basic.pause(100)
    

}












