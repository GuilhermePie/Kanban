document.getElementById('name-list').innerHTML = localStorage.nameList
document.getElementById("user-name").innerHTML = localStorage.player

const dia = document.getElementById('dia')
const date = new Date()

dia.innerHTML = [date.getDate(), date.getMonth(), date.getFullYear()].join('/')

//------------------------------------------------------------------------------

const task = document.getElementById('task-input')
const taskBtn = document.getElementById('task-btn')
const toDo = document.getElementById('to-do')
const fristLetter = document.getElementById('frist-letter')

fristLetter.innerHTML = localStorage.player.substr(0, 1).toUpperCase()

let taskList = []
recoverList()
taskBtn.addEventListener('click', ()=>{
    if(task.value != ''){
        insertTask({nome: task.value, id: newId()}) 
        task.value = '';  
    }   
})

function recoverList(){
    let listTasks = localStorage.getItem('listakanban')
    if(listTasks){
        let items = JSON.parse(listTasks)
        for(const item of items){
            insertTask(item, false)
        }
       

    }
}

function newId(){
    return Math.floor(Math.random() * 8000);
}

function insertTask(item, task = true){
    taskList.push(item)
    toDo.appendChild(createTaksList(item))
    if(task){
        localStorage.setItem('listakanban', JSON.stringify(taskList))
    }
}

function createTaksList(item){
    let div = document.createElement('div')
    div.classList.add('example-draggable')
    div.setAttribute('draggable', 'true')
    let btnDelete = '<img src="../assets/close-svgrepo-com.svg" class="x" alt="botão de apagar" onClick="deletarItem('+item.id+')">'
    div.innerHTML = item.nome + btnDelete
    div.addEventListener('dragstart', (event)=>{
        event
            .dataTransfer
            .setData('text/plain', event.target.id)
    })
    div.id = item.id
    return div 
}

function deletarItem(id){
    let indice = taskList.findIndex(i => i.id == id)
    if(indice < 0){
        alert('Id não encontrado')
        return
    }
    taskList.splice(indice, 1);
    localStorage.setItem('listakanban', JSON.stringify(taskList))

    document.getElementById(''+id+'').remove();
}
