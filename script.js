const menuDiv = document.getElementById('nav-mobile')
const btn = document.getElementById('btn-menu')

menuDiv.addEventListener('click', animarBTN)

function animarBTN(){
    menuDiv.classList.toggle('abrir')
    btn.classList.toggle('ativarBTN')
}