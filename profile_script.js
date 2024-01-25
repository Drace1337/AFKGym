const playerData = JSON.parse(localStorage.getItem('player'))
document.querySelector('#strength').innerHTML = `Strength ${playerData.strength}`
document.querySelector('#stamina').innerHTML = `Stamina ${playerData.stamina}/${playerData.maxStamina}`
document.querySelector('#level').innerHTML = `Level ${playerData.level}`
console.log(playerData);