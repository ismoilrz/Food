const reservationBtn = document.getElementById('reservationBtn');
const overlay = document.getElementById('overlay');
const reservationModal = document.getElementById('reservationModal')
const reservationCloseBtn = document.getElementById('reservationCloseBtn')

reservationBtn.addEventListener('click', () => {
    overlay.classList.add('active')
})

overlay.addEventListener('click', () => {
    overlay.classList.remove('active')
})

reservationModal.addEventListener('click', (e) => {
    e.stopPropagation()
})

reservationCloseBtn.addEventListener('click', () => {
    overlay.classList.remove('active')
})

const menuBtn = document.getElementById('menuBtn')
const menuPage = document.getElementById('menuPage')
const closeMenu = document.getElementById('closeMenu')
const reservationBtnMenu = document.getElementById('reservationBtnMenu')

menuBtn.addEventListener('click', () => {
    menuPage.classList.remove("hidden")
    menuPage.classList.add('active')
})

closeMenu.addEventListener('click', () => {
    menuPage.classList.remove('active')
    menuPage.classList.add('hidden')
})

reservationBtnMenu.addEventListener('click', () => {
    menuPage.classList.remove('active')
    menuPage.classList.add('hidden')

    overlay.classList.add('active')
})