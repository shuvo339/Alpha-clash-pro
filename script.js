// function play(){
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden');
//     const playgroundScetion = document.getElementById('playground');
//     playgroundScetion.classList.remove('hidden');
// }

function continueGame(){
    const alphabets = getARandomAlphabet();
}

function play(){
    hideElementById('home');
    unhideElementById('playground');
    continueGame();
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqurstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets;
    return alphabet;

}