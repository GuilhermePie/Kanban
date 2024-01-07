

// function onDragOver(event) {
//     event.preventDefault();
// }

// function onDrop(event) {
//   const id = event
//     .dataTransfer
//     .getData('text');

//     const draggableElement = document.getElementById(id);

//     const dropzone = event.target;

//     dropzone.appendChild(draggableElement);

//     event
//     .dataTransfer
//     .clearData();
// }

// plano de fundo alternavel

const back = document.getElementById('back')
const backgrounds = document.getElementById('backgrounds')


backgrounds.addEventListener('change' , ()=>{
  back.style.backgroundImage = backgrounds.value
})

