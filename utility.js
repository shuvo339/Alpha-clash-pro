
function hideElementById(id){
    const element = document.getElementById(id);
    element.classList.add('hidden');
}
function unhideElementById(id){
    const element = document.getElementById(id);
    element.classList.remove('hidden');
}