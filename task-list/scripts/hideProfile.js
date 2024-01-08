const btnClose = document.getElementById('btn-close')
const perfil = document.getElementById('perfil')
const closeBox = document.getElementById('close-box')
const setaImg = document.getElementById('seta-img')

btnClose.addEventListener('click' , ()=>{
    perfil.classList.toggle('perfil')
    closeBox.classList.toggle('open-box')
    setaImg.classList.toggle('giro')
})