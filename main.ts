
let soucet: number
let soucetvse: number
let soucetvse2:number
let kalibrace: boolean = false


input.onButtonPressed(Button.A, function() {
    kalibrace = true
    for (let i = 0; i <= 20; i++) {
        let svetlo1: number = input.lightLevel()
        basic.pause(50)
        soucetvse += svetlo1
    }

    soucetvse2 = soucetvse / 20
    music.playTone(400,500)

})

while (true) {
    let svetlo2:number = input.lightLevel()
    console.log(svetlo2)
    basic.pause(50)
    if(kalibrace) {
        if (svetlo2 < soucetvse2 ) {
            music.playTone(400,500)
            
        }
    }

    
}












