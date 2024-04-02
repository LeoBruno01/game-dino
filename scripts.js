const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;

const pressSpace = (tecla) =>{
    if (tecla.keyCode === 32) {
        if(!isJumping){
            jump();
        }
    }
}

const jump = () =>{

    
    isJumping = true;

    let intervaloPulo = setInterval(() => { //setInterval executa uma função a cada tempo fixo determinado no segundo parametro.

        if(position >= 150) {
            // parar
        clearInterval(intervaloPulo)
        isJumping = false;

        let downInterval = setInterval(() => {
            position -= 20;
            dino.style.bottom = position + 'px';

            if(position <= 0){
                clearInterval(downInterval);
                isJumping = false;
            }
        })
    }   else {

        // subindo
        position += 20;
        dino.style.bottom = position + 'px';
    }    
}, 20) 

} 
  
function createCactus () {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000; // função que gera numeros aleatorios

    cactus.classList.add('cactus');

    cactus.style.left = cactusPosition + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
       
        if(cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60){
            //Gamer over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class = "game-over">Fim de jogo</h1>';
        }
        else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }

    }, 20);

    setTimeout(createCactus, randomTime); // função que executa uma função depois de um tempo determinado.
}
    
createCactus();
document.addEventListener('keyup', pressSpace);