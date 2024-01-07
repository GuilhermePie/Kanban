document.getElementById('name-list').innerHTML = localStorage.nameList
document.getElementById("user-name").innerHTML = localStorage.player

const dia = document.getElementById('dia')
const date = new Date()

dia.innerHTML = [date.getDate(), (date.getMonth()+1), date.getFullYear()].join('/')

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

// criando elemento drag

function createTaksList(item){
    let div = document.createElement('div')
    div.classList.add('item')
    div.setAttribute('draggable', 'true')
    let btnDelete = '<img src="../assets/close-svgrepo-com.svg" class="x" alt="botão de apagar" onClick="deletarItem('+item.id+')">'
    div.innerHTML = item.nome + btnDelete
    // div.addEventListener('dragstart', (event)=>{
    //     event
    //         .dataTransfer
    //         .setData('text/plain', event.target.id)
    // })
    div.id = item.id
    return div 
}

const itens = document.querySelectorAll('.item')

itens.forEach(item =>{
    item.addEventListener('dragstart', ()=>{
        item.classList.add('is-dragging')
    })
    item.addEventListener('dragend' , ()=>{
        item.classList.remove('is-dragging')
    })
})

const dropzones = document.querySelectorAll('.dropzone') 

dropzones.forEach(zone => {
  zone.addEventListener('dragover', (e)=>{
    e.preventDefault();

    const bottomTask = insertAboveTask(zone, e.clientY)
    const curTask = document.querySelector(".is-dragging");

    if (!bottomTask) {
      zone.appendChild(curTask);
    } else {
      zone.insertBefore(curTask, bottomTask);
    }
  })
})

const insertAboveTask = (zone , mouseY) => {
 const els = zone.querySelectorAll('.item:not(is-dragging)') 

 const closestTask = null
 const closestOffset = Number.NEGATIVE_INFINITY

 els.forEach((item)=>{
    const { top } = item.getBoundingClientRect()
    const offset = mouseY - top

    if (offset < 0 && offset > closestOffset) {
        closestOffset = offset;
        closestTask = item;
      }
    });
  
    return closestTask;
};
//-----------------------------------

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
