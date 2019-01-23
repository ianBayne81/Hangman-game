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






