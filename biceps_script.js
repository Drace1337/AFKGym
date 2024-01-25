import {swipeDetect, player} from "./script.js"

const bicepsCanvas = document.querySelector('#biceps__canvas')
const bicepsCtx = bicepsCanvas.getContext('2d')


const BICEPS_WIDTH = (bicepsCanvas.width = 600)
const BICEPS_HEIGHT = (bicepsCanvas.height = 600)

const bicepImage = new Image()
bicepImage.src = 'bicep.png'

bicepImage.onload = function () {
	bicepsCtx.clearRect(0, 0, BICEPS_WIDTH, BICEPS_HEIGHT)
	bicepsCtx.drawImage(bicepImage, 327, 0, 85, 200, 200, 100, 170, 400)
}

const bicepSequence = ['right', 'up']
let whichBicepSwipe = 0
let bicepsSwipeDirection = 'none'

swipeDetect(bicepsCanvas, function (swipedir) {
	if (swipedir !== bicepSequence[whichBicepSwipe]) {
		whichBicepSwipe = 0
		bicepsCtx.clearRect(0, 0, BICEPS_WIDTH, BICEPS_HEIGHT)
		bicepsCtx.drawImage(bicepImage, 327, 0, 85, 200, 200, 100, 170, 400)
		bicepsSwipeDirection = 'none'
		console.log('incorrect swipe');
		player.incorrectSequence()
		return
	}
	bicepsCtx.clearRect(0, 0, BICEPS_WIDTH, BICEPS_HEIGHT)
	bicepsCtx.drawImage(bicepImage, 237, 0, 85, 200, 200, 100, 170, 400)
	whichBicepSwipe++
	bicepsSwipeDirection = swipedir
	console.log('correct swipe');
	if(whichBicepSwipe >= bicepSequence.length)
	{
		bicepsCtx.clearRect(0, 0, BICEPS_WIDTH, BICEPS_HEIGHT)
		bicepsCtx.drawImage(bicepImage, 327, 0, 85, 200, 200, 100, 170, 400)
		whichBicepSwipe = 0
		bicepsSwipeDirection = 'none'
		player.correctSequence()
		console.log(player.strength);
		console.log(player.stamina);
		console.log(player.level);
		return
	}
})

