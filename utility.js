
function hideElementById(id){
    const element = document.getElementById(id);
    element.classList.add('hidden');
}
function unhideElementById(id){
    const element = document.getElementById(id);
    element.classList.remove('hidden');
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqurstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}

function setBgColorById(id){
    const element = document.getElementById(id);
    element.classList.add('bg-orange-400')
}