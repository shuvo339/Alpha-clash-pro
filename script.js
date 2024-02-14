// function play(){
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden');
//     const playgroundScetion = document.getElementById('playground');
//     playgroundScetion.classList.remove('hidden');
// }

function continueGame(){
    const alphabet = getARandomAlphabet();
    const letter = document.getElementById('letter');
    letter.innerText = alphabet;
    setBgColorById(alphabet);
}

function play(){
    hideElementById('home');
    unhideElementById('playground');
    continueGame();
}

