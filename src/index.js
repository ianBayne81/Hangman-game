import Hangman from './hangman.js'
import { backDrop } from './canvas.js'
import { getPuzzle } from './puzzle.js'

const puzzleEl = document.querySelector("#puzzle")
const statusEl = document.querySelector("#guesses")
const guessedLetEl = document.querySelector("#guessedLetters")
let game1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

document.querySelector("#letterA").addEventListener('click', (e) => {
    let guess = String.fromCharCode(65)
    game1.makeGuess(guess)
    render()
})

document.querySelector("#letterB").addEventListener('click', (e) => {
    let guess = String.fromCharCode(66)
    game1.makeGuess(guess)
    render()
})

document.querySelector("#letterC").addEventListener('click', (e) => {
    let guess = String.fromCharCode(67)
    game1.makeGuess(guess)
    render()
})

document.querySelector("#letterD").addEventListener('click', (e) => {
    let guess = String.fromCharCode(68)
    game1.makeGuess(guess)
    render()
})

document.querySelector("#letterE").addEventListener('click', (e) => {
    let guess = String.fromCharCode(69)
    game1.makeGuess(guess)
    render()
})

document.querySelector("#letterF").addEventListener('click', (e) => {
    let guess = String.fromCharCode(70)
    game1.makeGuess(guess)
    render()
})

document.querySelector("#letterG").addEventListener('click', (e) => {
    let guess = String.fromCharCode(71)
    game1.makeGuess(guess)
    render()
})

document.querySelector("#letterH").addEventListener('click', (e) => {
    let guess = String.fromCharCode(72)
    game1.makeGuess(guess)
    render()
})

document.querySelector("#letterI").addEventListener('click', (e) => {
    let guess = String.fromCharCode(73)
    game1.makeGuess(guess)
    render()
})

document.querySelector("#letterJ").addEventListener('click', (e) => {
    let guess = String.fromCharCode(74)
    game1.makeGuess(guess)
    render()
})

document.querySelector("#letterK").addEventListener('click', (e) => {
    let guess = String.fromCharCode(75)
    game1.makeGuess(guess)
    render()
})

document.querySelector("#letterL").addEventListener('click', (e) => {
    let guess = String.fromCharCode(76)
    game1.makeGuess(guess)
    render()
})

document.querySelector("#letterM").addEventListener('click', (e) => {
    let guess = String.fromCharCode(77)
    game1.makeGuess(guess)
    render()
})

document.querySelector("#letterN").addEventListener('click', (e) => {
    let guess = String.fromCharCode(78)
    game1.makeGuess(guess)
    render()
})

document.querySelector("#letterO").addEventListener('click', (e) => {
    let guess = String.fromCharCode(79)
    game1.makeGuess(guess)
    render()
})

document.querySelector("#letterP").addEventListener('click', (e) => {
    let guess = String.fromCharCode(80)
    game1.makeGuess(guess)
    render()
})

document.querySelector("#letterQ").addEventListener('click', (e) => {
    let guess = String.fromCharCode(81)
    game1.makeGuess(guess)
    render()
})

document.querySelector("#letterR").addEventListener('click', (e) => {
    let guess = String.fromCharCode(82)
    game1.makeGuess(guess)
    render()
})

document.querySelector("#letterS").addEventListener('click', (e) => {
    let guess = String.fromCharCode(83)
    game1.makeGuess(guess)
    render()
})

document.querySelector("#letterT").addEventListener('click', (e) => {
    let guess = String.fromCharCode(84)
    game1.makeGuess(guess)
    render()
})

document.querySelector("#letterU").addEventListener('click', (e) => {
    let guess = String.fromCharCode(85)
    game1.makeGuess(guess)
    render()
})

document.querySelector("#letterV").addEventListener('click', (e) => {
    let guess = String.fromCharCode(86)
    game1.makeGuess(guess)
    render()
})

document.querySelector("#letterW").addEventListener('click', (e) => {
    let guess = String.fromCharCode(87)
    game1.makeGuess(guess)
    render()
})

document.querySelector("#letterX").addEventListener('click', (e) => {
    let guess = String.fromCharCode(88)
    game1.makeGuess(guess)
    render()
})

document.querySelector("#letterY").addEventListener('click', (e) => {
    let guess = String.fromCharCode(89)
    game1.makeGuess(guess)
    render()
})

document.querySelector("#letterZ").addEventListener('click', (e) => {
    let guess = String.fromCharCode(90)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.innerHTML = ''
    guessedLetEl.innerHTML = ''
    statusEl.textContent = game1.status

    game1.getPuzzle.split('').forEach((letter) => {
    const letterEl = document.createElement('span')
    letterEl.textContent = letter
    puzzleEl.appendChild(letterEl)
    })

    game1.wrongLetters.forEach((letter) => {
        const lettersEl = document.createElement('span')
        lettersEl.textContent = letter
        guessedLetEl.appendChild(lettersEl)
    })
}
    
const startGame = () => {
    const puzzle = getPuzzle()
    game1 = new Hangman(puzzle, 7)
    backDrop()
    render()
}

document.querySelector("#reset").addEventListener('click', startGame) 
    
startGame()






