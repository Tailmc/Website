const menu = document.querySelector('#mobilemenu')
const menul = document.querySelector('.navimenu')

menu.addEventListener('click', function(){
    menu.classList.toggle('active')
    menul.classList.toggle('activated')
})