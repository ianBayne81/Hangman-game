import  { backDrop, headPhase, bodyPhase, leftLegPhase, rightLegPhase, leftArmPhase, rightArmPhase, ropePhase, dropPhase, detatchPhase} from './canvas.js'

class Hangman {
    constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.wrongLetters = []
    this.status = "Playing"
    }
    
    calculateStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')
        if (this.remainingGuesses === 0) {
            this.status = `GAME OVER! The word was ${this.word.join('').toUpperCase()}`
        } else if (finished) {
            this.status = "Great work, you guessed the word!"
        } else {
            this.status = `Playing - guesses left = ${this.remainingGuesses}`
        }
    }

    get getPuzzle() {

        let puzzle = ''

        this.word.forEach((letter) => {

            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter 
            } else {
                puzzle += '*'
            }
        })

        return puzzle
    }
    
    animateCanvas() {
        if (this.remainingGuesses === 7) {
            backDrop()
        }  
        if (this.remainingGuesses === 6) {
            headPhase()
        }
        if (this.remainingGuesses === 5) {
            bodyPhase()
        }
        if (this.remainingGuesses === 4) {
            leftLegPhase()
        }
        if (this.remainingGuesses === 3) {
            rightLegPhase()
        }
        if (this.remainingGuesses === 2) {
            leftArmPhase()
        }
        if (this.remainingGuesses === 1) {
            rightArmPhase()
        }
        if (this.remainingGuesses === 0) {
            rightArmPhase()
            setTimeout(ropePhase, 900)
            setTimeout(dropPhase, 1500)
            setTimeout(detatchPhase, 2000)
        }
    }

    makeGuess(guess) {
    guess = guess.toLowerCase() 
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)
    const disable = !this.status.includes('Playing')
    
    if (disable) {
        return 
    }

    if (isUnique) {
        this.guessedLetters.push(guess)
    }

    if (isUnique && isBadGuess) {
        this.remainingGuesses--
        this.wrongLetters.push(guess)
    } 

    this.calculateStatus()
    this.animateCanvas()
    
    }

}

export { Hangman as default }