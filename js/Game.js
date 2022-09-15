class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [
            new Phrase('Set yourself free'),
            new Phrase('Day dreamer'), 
            new Phrase('Know your worth'), 
            new Phrase('Make it happen'), 
            new Phrase('Be kind')
        ];
        this.activePhrase = null;
    }

    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase]; 
    }

    startGame(phrase) {
        let startScreenOverlay = document.getElementById('overlay');
        startScreenOverlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        return this.activePhrase.addPhraseToDisplay();
    }

    checkForWin(letter) {
        let phraseLetters = document.getElementsByClassName('letter');
        let shownLetters = document.getElementsByClassName('show');
        if (shownLetters.length === phraseLetters.length) {
            return true; 
        } else {
            return false; 
        }
    }

    resetGame() {
        const phrase = document.getElementById('phrase');
        const resetHearts = document.querySelectorAll('.tries img');
        const keyboard = document.getElementById('qwerty');
        const button = qwerty.getElementsByTagName('button');
        phrase.querySelector('ul').innerHTML = '';
        this.missed = 0;
        for (let i = 0; i < button.length; i++) {
          button[i].disabled = false;
          button[i].classList.remove('chosen', 'wrong');
        }
        for (let i = 0; i < resetHearts.length; i++) {
          resetHearts[i].src = 'images/liveHeart.png';
        }
        this.missed = 0;
    }
    
    gameOver(gameWon) {
        const screenOverlay = document.getElementById("overlay");
        let gameOverMessage = document.getElementById('game-over-message');
        screenOverlay.style.display = '';
        if (gameWon) {
            screenOverlay.className = 'win';
           gameOverMessage.innerHTML = `Congratulations! That's the correct phrase!`;
        } else {
            screenOverlay.className = 'lose';
            gameOverMessage.innerHTML = `Sorry, That's not the correct phrase. Try again.`;
        }
        this.resetGame();
    }

    removeLife() {
        const heartsLeft = document.querySelectorAll('img');
        if (this.missed < 4) {
            heartsLeft[this.missed].src = 'images/lostHeart.png';
            this.missed += 1
        } else {
            this.gameOver();
        }
    }

    handleInteraction(button) {
        button.disabled = true;
        if (!this.activePhrase.phrase.includes(button.textContent)) {
            button.className = 'wrong';
            this.removeLife();
        } else {
            button.className = 'chosen';
            this.activePhrase.showMatchedLetter(button.textContent);
            this.checkForWin()
            if(this.checkForWin()) {
                this.gameOver(true) 
            }
        }
    }
}
