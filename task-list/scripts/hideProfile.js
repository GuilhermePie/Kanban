const btnClose = document.getElementById('btn-close')
const perfil = document.getElementById('perfil')
const closeBox = document.getElementById('close-box')

btnClose.addEventListener('click' , ()=>{
    perfil.classList.toggle('close-perfil')
    closeBox.classList.toggle('close-box')
})