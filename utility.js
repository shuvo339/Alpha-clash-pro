
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
function removeBgColorById(id){
    const element = document.getElementById(id);
    element.classList.remove('bg-orange-400')
}

 function getElementTextById(id){
    const element = document.getElementById(id);
    const elementText = element.innerText;
    return elementText;
 }
function getCurrentPointById(id){
    const element = document.getElementById(id);
    const elementText = element.innerText;
    const currentPoint = parseInt(elementText);
    return currentPoint;
}

function setUpdatedPointById(id, updatedPoint){
    const element = document.getElementById(id);
    element.innerText = updatedPoint;
}