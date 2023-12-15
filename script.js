const button = document.getElementById('btn')
const nome = document.getElementById('nome')
const form = document.getElementById('form')
const fem = document.getElementById('feminino')
const masc = document.getElementById('masculino')
const nameList = document.getElementById('name-list')
const audio = document.getElementById('audio')

// const validateInput = ({ target }) => {
//     if (target.value.length > 2) {
//       button.removeAttribute('disabled')
//     } else {
//       button.setAttribute('disabled', '')
//     }
//   }
  

const btnClick = event => {
    event.preventDefault()

    localStorage.setItem('player', nome.value)
    localStorage.setItem('nameList', nameList.value)

    window.location = '../task-list/task-list.html'
}

form.addEventListener("submit" , btnClick)