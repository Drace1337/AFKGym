class Player {
	constructor(strength, stamina, maxStamina, health, level, injuryTime) {
		this.strength = strength
		this.stamina = stamina
		this.maxStamina = maxStamina
		this.health = health
		this.level = level
		this.injuryTime = injuryTime
	}
	static emptyPlayer(){
		return new Player(0, 20, 20, 100, 1, 0)
	}
	
	correctSequence() {
		this.strength += 1
		this.stamina -= 1
		this.checkLevelUp()
		this.restoreStamina()
		localStorage.setItem(
			'player',
			JSON.stringify({
				strength: player.strength,
				stamina: player.stamina,
				maxStamina: player.maxStamina,
				health: player.health,
				level: player.level,
				injuryTime: player.injuryTime,
			})
		)
	}
	restoreStamina() {
		let countTime
		clearInterval(countTime)
		countTime = setInterval(() => {
		player.stamina += 1
		if (player.stamina > player.maxStamina) {
			player.stamina = player.maxStamina
			console.log(player.stamina);
		}
	}, 300000)
	}
	checkLevelUp() {
		if (this.strength >= this.level * 10) {
			this.level += 1
			this.maxStamina += 5
			this.stamina = this.maxStamina
		}
	}
	incorrectSequence() {
		this.stamina -= 2
		this.health -= 10

		this.setInjuryTime()
		localStorage.setItem(
			'player',
			JSON.stringify({
				strength: player.strength,
				stamina: player.stamina,
				maxStamina: player.maxStamina,
				health: player.health,
				level: player.level,
				injuryTime: player.injuryTime,
			})
		)
	}
	restoreHealth() {
		if (this.injuryTime > 0) {
			console.log('Jesteś jeszcze kontuzjowany');
		}else{
			let countTime
			clearInterval(countTime)
			countTime = setInterval(() => {
				this.health += 20
				if (this.health > 100) {
					this.health = 100
					console.log(this.health);
				}
			}, 1200000)
		}
	}
	setInjuryTime() {
		if(this.health <= 0){
			this.injuryTime = 180
		}
		this.decreaseInjuryTime()
	}
	decreaseInjuryTime() {
		if(this.injuryTime == 180){
			let countTime
			clearInterval(countTime)
			countTime = setInterval(() => {
				this.injuryTime -= 1
			}, 60000)
		}
	}
}

export function swipeDetect(el, callback) {
	const touchSurface = el
	let swipedir
	let startX
	let startY
	let distX
	let distY
	const threshold = 150
	const restraint = 100
	const handleswipe = callback || function (swipedir) {}

	touchSurface.addEventListener(
		'touchstart',
		function (e) {
			const touchobj = e.changedTouches[0]
			swipedir = 'none'
			startX = touchobj.pageX
			startY = touchobj.pageY
			e.preventDefault()
		},
		false
	)

	touchSurface.addEventListener(
		'touchmove',
		function (e) {
			e.preventDefault()
		},
		false
	)

	touchSurface.addEventListener(
		'touchend',
		function (e) {
			const touchobj = e.changedTouches[0]
			distX = touchobj.pageX - startX
			distY = touchobj.pageY - startY

			if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
				swipedir = distX < 0 ? 'left' : 'right'
			} else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
				swipedir = distY < 0 ? 'up' : 'down'
			}
			handleswipe(swipedir)
			e.preventDefault()
		},
		false
	)
}

export const player = localStorage.getItem('player') === null ? Player.emptyPlayer() : new Player(...Object.values(JSON.parse(localStorage.getItem('player'))))
player.restoreHealth()

