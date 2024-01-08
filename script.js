const button = document.getElementById('btn')
const nome = document.getElementById('nome')
const form = document.getElementById('form')
const nameList = document.getElementById('name-list')

const btnClick = event => {
    event.preventDefault()

    localStorage.setItem('player', nome.value)
    localStorage.setItem('nameList', nameList.value)

    window.location = '../task-list/task-list.html'
}

form.addEventListener("submit" , btnClick)

if(localStorage.player){
    nome.value = localStorage.player
}

if(localStorage.nameList){
    nameList.value = localStorage.nameList
}