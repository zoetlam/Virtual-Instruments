let arr = ['crash', 'kick-bass', 'snare', 'tom-1', 'tom-2', 'tom-3', 'tom-4'];
let arrLetters = ['w','a','s','d','j','k','l'];
function makeSound(value){
    let sound = new Audio('sounds/'+ arr[value] + '.mp3');
    sound.play();
}

for (let i = 0; i < document.querySelectorAll('.drum').length; i++){   
        document.querySelectorAll('.drum')[i].addEventListener('click',function () {makeSound(i);});  
}
document.addEventListener('keydown', function(event){
    makeSound(arrLetters.indexOf(event.key));
})







