let random     = Math.round(Math.random() * 10);
const screen1  = document.querySelector('.screen1');
const screen2  = document.querySelector('.screen2');
const btnTry   = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');
let xAttempts  = 1;

function handleTryClick(event) {
    event.preventDefault();
    
    const inputNumber = document.querySelector('#inputNumber');
    let condition     = inputNumber.value > 10 || inputNumber.value < 0;
    let condition2    = inputNumber.value == "";

    if (condition2) {

        alert('Preencha o campo!');

    } else {
        
        if (condition) {
    
            alert('Use números de 0 a 10');
    
        } else {
    
            let match = Number(inputNumber.value) == random;
        
            if (match) {
        
                toggleScreen();
        
                screen2.querySelector('h2').innerText = `Acertou em ${xAttempts} tentativas`;
        
            }
        
            xAttempts++;
            
        }
    }
    
    inputNumber.value = "";

}

function handleResetClick(event) {
    toggleScreen();
    random    = Math.round(Math.random() * 10);
    xAttempts = 1;
}

function toggleScreen(event) {
    screen1.classList.toggle('hide');
    screen2.classList.toggle('hide');
}

function pressEnter(e) {
    if (e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick();
    }
}

btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keypress', pressEnter)