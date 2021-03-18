const navBtn = document.getElementById('nav-btn')
const navMenu = document.querySelector('.nav-mobile-container')

navBtn.addEventListener('click', function() {
    navMenu.classList.toggle('active')
})