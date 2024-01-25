import { swipeDetect, player } from "./script.js"

const squatCanvas = document.querySelector('#squat__canvas')
const squatCtx = squatCanvas.getContext('2d')

const SQUAT_WIDTH = (squatCanvas.width = 600)
const SQUAT_HEIGHT = (squatCanvas.height = 600)

const squatImage = new Image()
squatImage.src = 'squat.png'

squatImage.onload = function () {
	squatCtx.clearRect(0, 0, SQUAT_WIDTH, SQUAT_HEIGHT)
	squatCtx.drawImage(squatImage, 520, 130, 120, 130, 200, 100, 200, 400)
}

const squatSequence = ['up', 'down', 'up']
let whichSquatSwipe = 0
let squatSwipeDirection = 'none'

swipeDetect(squatCanvas, function (swipedir) {
	if (swipedir !== squatSequence[whichSquatSwipe]) {
		whichSquatSwipe = 0
		squatCtx.clearRect(0, 0, SQUAT_WIDTH, SQUAT_HEIGHT)
		squatCtx.drawImage(squatImage, 520, 130, 120, 130, 200, 100, 200, 400)
		squatSwipeDirection = 'none'
		console.log('incorrect swipe');
		player.incorrectSequence()
		return
	}
    
	
	whichSquatSwipe++
    if(whichSquatSwipe == 2){
        squatCtx.clearRect(0, 0, SQUAT_WIDTH, SQUAT_HEIGHT)
        squatCtx.drawImage(squatImage, 520, 0, 120, 130, 200, 100, 200, 400)
    }
	squatSwipeDirection = swipedir
	console.log('correct swipe');
	if(whichSquatSwipe >= squatSequence.length)
	{
		squatCtx.clearRect(0, 0, SQUAT_WIDTH, SQUAT_HEIGHT)
		squatCtx.drawImage(squatImage, 520, 130, 120, 130, 200, 100, 200, 400)
		whichSquatSwipe = 0
		squatSwipeDirection = 'none'
		player.correctSequence()
		return
	}
})
