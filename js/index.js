let arr = ['crash', 'kick-bass', 'snare', 'tom-1', 'tom-2', 'tom-3', 'tom-4'];
let arrLetters = ['w','a','s','d','j','k','l'];

for (let i = 0; i < document.querySelectorAll('.drum').length; i++){   
        let audio = new Audio('sounds/'+ arr[i] + '.mp3');
        document.querySelectorAll('.drum')[i].addEventListener('click',function () {audio.play();});  
}
document.addEventListener('keydown', function(event){
    let num = arrLetters.indexOf(event.key);
    let sound = new Audio('sounds/'+ arr[num] + '.mp3');
    sound.play();
})






