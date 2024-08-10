const menuToggle = document.querySelector('#menuToggle')
const links = document.querySelector('#menu2')
const navbar = document.querySelector('.navbar')

menuToggle.addEventListener('click', function(){
    if(links.classList.contains('showLinks')){
        links.classList.remove('showLinks')
    }else links.classList.add('showLinks')
})