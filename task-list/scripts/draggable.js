const modal = document.getElementById("modal")
const modalContent = document.getElementsByClassName('modal-content')[0]
const close = document.getElementById('close')
const audio = document.getElementById('audio')

function showModal(){
  modalContent.removeAttribute('animation-close')
  modal.style.display = "block";
};

function closeModal(){
  modal.style.display = "none"
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function apagarTudo(){
  localStorage.listakanban = ''
  location.reload()
}

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
  const id = event
    .dataTransfer
    .getData('text');

    const draggableElement = document.getElementById(id);

    const dropzone = event.target;

    dropzone.appendChild(draggableElement);

    event
    .dataTransfer
    .clearData();
}



    
