// Create DRUM arrays based on sound's names
const drumButtons = document.querySelectorAll('.drum');
let drumArr = Array.from(drumButtons).map(button => button.id);
let drumPressLetters = ['w', 'a', 's', 'd', 'j', 'k', 'l'];

// Creat Piano arrays
const pianoButtons = document.querySelectorAll('.key');
let pianoArr = Array.from(pianoButtons).map(button => button.id);
let pianoPressLetters = ['q','2','w','3','e','r','5','t','6','y','7','u','v','g','b','h','n','m','k',',','l','.',';','/'];

//apply sound for drum

drumButtons.forEach(button => {
  button.addEventListener('click', function(){playSound(button.id)});
});
pianoButtons.forEach(button => {
  button.addEventListener('click', function() {playSound(button.id)})
})

// play the sound based on the value
function playSound(keyNote){
  function buttonAnimation(){
      let a = document.querySelector('#'+ keyNote);
      a.classList.add("pressed");
      setTimeout(function(){
          a.classList.remove("pressed")
      },100)
  }
  let sound = new Audio('../sounds/' + keyNote + '.mp3');
  sound.currentTime = 0;
  sound.play();
  buttonAnimation();
}

// Define what happens when the user presses a key and call makeSound function
document.addEventListener('keydown', function(event) {
  if (event.repeat) return;

  let keyIndex, name;

  if (window.location.pathname.split('/').pop() === 'index.html') {
    keyIndex = drumPressLetters.indexOf(event.key);
    name = drumArr[keyIndex];
  } else if (window.location.pathname.split('/').pop() === 'piano.html') {
    keyIndex = pianoPressLetters.indexOf(event.key);
    name = pianoArr[keyIndex];
  }

  if (keyIndex !== -1) {
    playSound(name);
    buttonAnimation(event.key);
  }
});







