const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const contador = document.querySelector('.contador');
let count = 0;

const jump = () => {

    mario.classList.add('jump');
    count++;
    contador.innerText = count;    

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');


    
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;


        mario.src = './mario-jump-images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
        
        setTimeout(() => {
            location.reload();
            
        }, 3000)
    }
}, 10)

document.addEventListener('keydown', jump);