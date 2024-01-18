const bicepsCanvas = document.querySelector('#biceps__canvas')
const bicepsCtx = bicepsCanvas.getContext('2d')
console.log(bicepsCtx)

const BICEPS_WIDTH = (bicepsCanvas.width = 600)
const BICEPS_HEIGHT = (bicepsCanvas.height = 600)

const bicepImage = new Image()
bicepImage.src = 'bicep.png'

function animate() {
	bicepsCtx.clearRect(0, 0, BICEPS_WIDTH, BICEPS_HEIGHT)
	bicepsCtx.drawImage(bicepImage, 327, 0, 85, 200, 200, 100, 170, 400)
	requestAnimationFrame(animate)
}

animate()
