const list1 = document.getElementById('list-1')
const list2 = document.getElementById('list-2')
const list3 = document.getElementById('list-3')

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