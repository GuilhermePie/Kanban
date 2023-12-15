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