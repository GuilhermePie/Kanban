const btnClose = document.getElementById('btn-close')
const perfil = document.getElementById('perfil')
const closeBox = document.getElementById('close-box')
const setaImg = document.getElementById('seta-img')

btnClose.addEventListener('click' , ()=>{
    perfil.classList.toggle('close-perfil')
    closeBox.classList.toggle('close-box')
    setaImg.classList.toggle('giro')
})