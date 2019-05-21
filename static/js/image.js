const sound = new Audio()
    const button = document.querySelector('button')
    button.addEventListener('click', playSound)
 button.addEventListener('click', pause)

function playSound(i) {
    sound.src = i
    sound.play()
}
function pause(i) {
    sound.src = i;
    sound.pause();
}

//const arr = []
//arr.forEach((path) => {
 //   ReplacingImage(path)
//})

function ReplacingImage(i,j,k){

    document.getElementById("x").src=i
    document.getElementById("y").innerHTML=j
    playSound(k)


}
