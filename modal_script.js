const openBtn = document.querySelector('#open__modal')
const closeBtn = document.querySelector('#close__modal')
const modal = document.querySelector('#modal')

openBtn.addEventListener('click', () => {
    modal.classList.add('open')
})

closeBtn.addEventListener('click', () => {
    modal.classList.remove('open')
})