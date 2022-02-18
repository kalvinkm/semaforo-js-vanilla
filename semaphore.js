const image = document.getElementById('img')
const btns = document.getElementById('buttons')
let colorIndex = 0
let intervalId = null

const trafficLight = (event) => {
    stopAutomatic() 
    turnOn[event.target.id]()
}
    
    

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex]
    turnOn[color]()
    nextIndex()
}

const stopAutomatic = () => {
    clearInterval(intervalId)
}

const turnOn = {
    'red': () => img.src = "imgs/vermelho.png",
    'yellow': () => img.src = "imgs/amarelo.png",
    'green': () => img.src = "imgs/verde.png",
    'automatic': () => intervalId = setInterval(changeColor, 1000)
}

btns.addEventListener('click', trafficLight)