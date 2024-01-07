const list1 = document.getElementById('list-1')
const list2 = document.getElementById('list-2')
const list3 = document.getElementById('list-3')
const edit1 = document.getElementById('edit1')
const edit2 = document.getElementById('edit2')
const edit3 = document.getElementById('edit3')

edit1.addEventListener('click', () => {
        list1.select()
        list1.removeAttribute('readonly')
})

document.addEventListener('mousedown', (event) =>{
    if(list1.contains(event.target)){

    }else{
        list1.setAttribute('readonly','')
    }
})

edit2.addEventListener('click', () => {
    list2.select()
    list2.removeAttribute('readonly')
})

document.addEventListener('mousedown', (event) =>{
if(list2.contains(event.target)){

}else{
    list2.setAttribute('readonly','')
}
})

edit3.addEventListener('click', () => {
    list3.select()
    list3.removeAttribute('readonly')
})

document.addEventListener('mousedown', (event) =>{
if(list3.contains(event.target)){

}else{
    list3.setAttribute('readonly','')
}
})

// Colors

const colorList1 = document.getElementById('color-list1')
const colorList2 = document.getElementById('color-list2')
const colorList3 = document.getElementById('color-list3')
const classTodo = document.querySelector('.todo')
const classDoing = document.querySelector('.doing')
const classDone = document.querySelector('.done')

if(localStorage.colorList1){
    classTodo.style.backgroundColor = localStorage.colorList1
}else{
    localStorage.setItem('colorList1' , '#FFDDE2')
}

colorList1.addEventListener('input' , ()=>{
    localStorage.setItem('colorList1' , colorList1.value)
    classTodo.style.backgroundColor = colorList1.value
})

if(localStorage.colorList2){
    classDoing.style.backgroundColor = localStorage.colorList2
}else{
    localStorage.setItem('colorList2' , '#FDECC8')
}

colorList2.addEventListener('input' , ()=>{
    localStorage.setItem('colorList2' , colorList2.value)
    classDoing.style.backgroundColor = colorList2.value
})


if(localStorage.colorList3){
    classDone.style.backgroundColor = localStorage.colorList3
}else{
    localStorage.setItem('colorList3' , '#DBEDDB')
}

colorList3.addEventListener('input' , ()=>{
    localStorage.setItem('colorList3' , colorList3.value)
    classDone.style.backgroundColor = colorList3.value
})

// LISTAS

if(localStorage.lista1){
    list1.value = localStorage.lista1
}else{
    localStorage.setItem('lista1' , 'lista 1')
    list1.value = localStorage.lista1
}

list1.addEventListener('input', () =>{
    localStorage.lista1 = list1.value
})

if(localStorage.lista2){
    list2.value = localStorage.lista2
}else{
    localStorage.setItem('lista2' , 'lista 2')
    list2.value = localStorage.lista2
}
list2.addEventListener('input', () =>{
    localStorage.lista2 = list2.value
})

if(localStorage.lista3){
    list3.value = localStorage.lista3
}else{
    localStorage.setItem('lista3' , 'lista 3')
    list3.value = localStorage.lista3
}
list3.addEventListener('input', () =>{
    localStorage.lista3 = list3.value
})