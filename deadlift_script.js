import { swipeDetect, player } from './script.js'

const deadliftCanvas = document.querySelector('#deadlift__canvas')
const deadliftCtx = deadliftCanvas.getContext('2d')

const DEADLIFT_WIDTH = (deadliftCanvas.width = 600)
const DEADLIFT_HEIGHT = (deadliftCanvas.height = 600)

const deadliftImage = new Image()
deadliftImage.src = 'deadlift.png'

deadliftImage.onload = function () {
	deadliftCtx.clearRect(0, 0, DEADLIFT_WIDTH, DEADLIFT_HEIGHT)
	deadliftCtx.drawImage(deadliftImage, 75, 190, 100, 180, 200, 100, 200, 400)
	//deadliftCtx.drawImage(deadliftImage, 70, 360, 115, 180, 200, 100, 200, 400)
}

const deadliftSequence = ['down', 'up', 'left']
let whichDeadliftSwipe = 0
let deadliftSwipeDirection = 'none'

swipeDetect(deadliftCanvas, function (swipedir) {
	if (swipedir !== deadliftSequence[whichDeadliftSwipe]) {
		whichDeadliftSwipe = 0
		deadliftCtx.clearRect(0, 0, DEADLIFT_WIDTH, DEADLIFT_HEIGHT)
		deadliftCtx.drawImage(deadliftImage, 75, 190, 100, 180, 200, 100, 200, 400)
		deadliftSwipeDirection = 'none'
		console.log('incorrect swipe')
		player.incorrectSequence()
		return
	}
	whichDeadliftSwipe++
	deadliftSwipeDirection = swipedir
	deadliftCtx.clearRect(0, 0, DEADLIFT_WIDTH, DEADLIFT_HEIGHT)
	deadliftCtx.drawImage(deadliftImage, 70, 360, 115, 180, 200, 100, 200, 400)
	console.log('correct swipe')
	if (whichDeadliftSwipe >= deadliftSequence.length) {
		deadliftCtx.clearRect(0, 0, DEADLIFT_WIDTH, DEADLIFT_HEIGHT)
		deadliftCtx.drawImage(deadliftImage, 75, 190, 100, 180, 200, 100, 200, 400)
		whichDeadliftSwipe = 0
		deadliftSwipeDirection = 'none'
		player.correctSequence()
		return
	}
})
