const navBtn = document.getElementById('nav-btn')
const navMenu = document.querySelector('.nav-mobile-container')

const shortenBtn = document.getElementById('shorten-btn')
const inputVal = document.querySelector('.user-input')

navBtn.addEventListener('click', function() {
    navMenu.classList.toggle('active')
})

console.log(inputVal)

shortenBtn.addEventListener('click', function() {
    console.log(inputVal.value)
    if(inputVal.value === '') {
        inputVal.classList.toggle('active')
    } 
})