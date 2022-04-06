const dino = document.querySelector('.dino');

function handKeyUp(event) {
    if( event.keyCode === 32 ){
        console.log('precionou espaço');
    }
}

document.addEventListener('keyup', handKeyUp);