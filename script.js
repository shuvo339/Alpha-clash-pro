// function play(){
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden');
//     const playgroundScetion = document.getElementById('playground');
//     playgroundScetion.classList.remove('hidden');
// }

const audio = new Audio();

function continueGame(){
    const alphabet = getARandomAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    setBgColorById(alphabet);
}

function play(){
    hideElementById('home');
    hideElementById('score-section');
    unhideElementById('playground');

    setUpdatedPointById('life', 5);
    setUpdatedPointById('score', 0);
    continueGame();
}

function gameOver(){
    hideElementById('playground');
    unhideElementById('score-section');

    const finalScore = document.getElementById('score').innerText;
    // console.log(finalScore);
    const currentText = getElementTextById('current-alphabet');
    removeBgColorById(currentText);
    setUpdatedPointById('final-score', finalScore);
}


function handledByKeyboard(e){
    const playerPressed = e.key;
if(playerPressed === 'Escape'){
    gameOver();
}

    const expextedAlphabet = document.getElementById('current-alphabet').innerText.toLowerCase();
    
    if((playerPressed===expextedAlphabet)){
        // option-1
        // const currentScore = parseInt(document.getElementById('score').innerText);
        // const newScore = currentScore+1;
        // document.getElementById('score').innerText = newScore;

        // option-2
        const currentScore = getCurrentPointById('score');
        const newScore = currentScore+1;
        setUpdatedPointById('score', newScore);

        removeBgColorById(expextedAlphabet);
        continueGame();
    }else{
        // option-1
        // const currentLifeElement =document.getElementById('life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // const newLife = currentLife-1;
        // currentLifeElement.innerText = newLife;

        // option-2
        const currentLife = getCurrentPointById('life');
        const newLife = currentLife-1;
        setUpdatedPointById('life', newLife);

        if(newLife === 0){
            gameOver();
        }
    }
}
document.addEventListener('keyup', handledByKeyboard)
