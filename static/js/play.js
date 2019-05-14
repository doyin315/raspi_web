const sound = new Audio()
    const button = document.querySelector('button')
    button.addEventListener('click', playSound)
 button.addEventListener('click', pause)

function playSound() {
    sound.src = 'static/audio/nums.aac'
    sound.play()
}

function pause() {
    sound.src = 'static/audio/nums.aac'
    sound.pause()
}

