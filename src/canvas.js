// clear the canvas
// save the canvas state
// draw the animated shapes
// restore the canvas state

const canvas = document.querySelector("canvas")
const context = canvas.getContext("2d")
context.globalCompositeOperation = 'source-over'

const backDrop = function () { 
    //background
    context.fillStyle = 'black' 
    context.fillRect(0, 0, 300, 300)
    
    //upright beam
    context.fillStyle = 'white'
    context.fillRect(100, 30, 10, 250)
    
    //cross beam
    context.fillStyle = 'white'
    context.fillRect(90, 40, 100, 10)

    // top beam support
    context.beginPath()
    context.moveTo(138, 48)
    context.lineTo(108, 75)
    context.strokeStyle ='white'
    context.lineWidth = 4
    context.stroke()
    
    //bottom RHS beam support
    context.beginPath()
    context.moveTo(108, 255)
    context.lineTo(134, 280)
    context.lineWidth = 4
    context.stroke()
    
    //bottom LHS beam support
    context.beginPath()
    context.moveTo(102, 255)
    context.lineTo(74, 280)
    context.lineWidth = 4
    context.stroke()

    //ground
    context.beginPath()
    context.moveTo(40, 280)
    context.lineTo(200, 280)
    context.lineWidth = 3
    context.stroke()

    context.save()
}

const headPhase = function () {
    backDrop()
    
    context.strokeStyle = 'white'
    context.lineWidth = 2
    context.beginPath()
    context.arc(170, 110, 25, 0, 2 * Math.PI)
    context.stroke()
    context.save()
}

const bodyPhase = function () {
    backDrop()
    headPhase()

    context.strokeStyle = 'white'
    context.lineWidth = 2
    context.beginPath()
    context.moveTo(170, 135)
    context.lineTo(170, 205)
    context.stroke()
    context.save()
}

const leftLegPhase = function () {
    backDrop()
    headPhase()
    bodyPhase()

    context.beginPath() // beginPath() closePath() stoke() fill()
    context.moveTo(170, 205)
    context.lineTo(140, 255)
    context.strokeStyle = 'white'
    context.lineWidth = 2
    context.stroke()
    context.save()
}

const rightLegPhase = function () {
    backDrop()
    headPhase()
    bodyPhase()
    leftLegPhase()

    context.beginPath()
    context.moveTo(170, 205)
    context.lineTo(200, 255)
    context.strokeStyle = 'white'
    context.lineWidth = 2
    context.stroke()
    context.save()
}

const leftArmPhase = function () {
    backDrop()
    headPhase()
    bodyPhase()
    leftLegPhase()
    rightLegPhase()

    context.beginPath()
    context.moveTo(170, 150)
    context.lineTo(135, 180 )
    context.strokeStyle = 'white'
    context.lineWidth = 2
    context.stroke()
    context.save()
}

const rightArmPhase = function () {
    backDrop()
    headPhase()
    bodyPhase()
    leftLegPhase()
    rightLegPhase()
    leftArmPhase()

    context.beginPath()
    context.moveTo(170, 150)
    context.lineTo(205, 180)
    context.strokeStyle = 'white'
    context.lineWidth = 2
    context.stroke()
    context.save()
}

const ropePhase = function () {
    backDrop()
    headPhase()
    bodyPhase()
    leftLegPhase()
    rightLegPhase()
    leftArmPhase()
    rightArmPhase()

    //top section of rope
    context.beginPath()
    context.moveTo(170, 50)
    context.lineTo(170, 84)
    context.strokeStyle = 'yellow'
    context.lineWidth = 4
    context.stroke()
    context.save()
    
    //neck rope
    context.beginPath()
    context.moveTo(168, 137)
    context.lineTo(173, 137)
    context.strokeStyle = 'yellow'
    context.lineWidth = 4
    context.stroke()
    context.save()
}

const dropPhase = function () {
    //setTimeout('3s')
    backDrop()
    //head
    context.strokeStyle = 'white'
    context.lineWidth = 2
    context.beginPath()
    context.arc(170, 115, 25, 0, 2 * Math.PI)
    context.stroke()
    //body
    context.beginPath()
    context.moveTo(170, 140)
    context.lineTo(170, 210)
    context.stroke()
    //left leg
    context.beginPath() 
    context.moveTo(170, 210)
    context.lineTo(160, 260)
    context.stroke()
    //right leg
    context.beginPath()
    context.moveTo(170, 210)
    context.lineTo(180, 260)
    context.stroke()
    // left arm
    context.beginPath()
    context.moveTo(170, 155)
    context.lineTo(155, 195 )
    context.stroke()
    //right arm
    context.beginPath()
    context.moveTo(170, 155)
    context.lineTo(185, 195)
    context.stroke()
    //top section of rope
    context.beginPath()
    context.moveTo(170, 50)
    context.lineTo(170, 89)
    context.strokeStyle = 'yellow'
    context.lineWidth = 4
    context.stroke()

    //neck rope
    context.beginPath()
    context.moveTo(168, 142)
    context.lineTo(173, 142)
    context.strokeStyle = 'yellow'
    context.lineWidth = 4
    context.stroke()
    context.save()
}

const detatchPhase = function () {
    backDrop()
    //head
    context.strokeStyle = 'white'
    context.lineWidth = 2
    context.beginPath()
    context.arc(170, 125, 25, 0, 2 * Math.PI)
    context.stroke()
    //body
    context.beginPath()
    context.moveTo(170, 170)
    context.lineTo(170, 230)
    context.stroke()
    //left leg
    context.beginPath() 
    context.moveTo(170, 230)
    context.lineTo(160, 280)
    context.stroke()
    //right leg
    context.beginPath()
    context.moveTo(170, 230)
    context.lineTo(180, 280)
    context.stroke()
    // left arm
    context.beginPath()
    context.moveTo(170, 175)
    context.lineTo(155, 215 )
    context.stroke()
    //right arm
    context.beginPath()
    context.moveTo(170, 175)
    context.lineTo(185, 215)
    context.stroke()
    //top section of rope
    context.beginPath()
    context.moveTo(170, 50)
    context.lineTo(170, 99)
    context.strokeStyle = 'yellow'
    context.lineWidth = 4
    context.stroke()

    //neck rope
    context.beginPath()
    context.moveTo(168, 152)
    context.lineTo(173, 152)
    context.strokeStyle = 'yellow'
    context.lineWidth = 4
    context.stroke()
    context.save()
}

export { backDrop, headPhase, leftLegPhase, rightLegPhase, leftArmPhase, rightArmPhase, ropePhase, dropPhase, detatchPhase }

    
   
    
    
    


    