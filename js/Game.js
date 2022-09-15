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
        if(shownLetters.length === phraseLetters.length) {
            return true; 
        } else {
            return false; 
        }
    }

    gameOver(gameWon) {
        const screenOverlay = document.getElementById("overlay");
        let gameOverMessage = document.getElementById('game-over-message');
        screenOverlay.style.display = '';
        if(gameWon) {
            screenOverlay.className = 'win';
           gameOverMessage.innerHTML = `Great job, you've correctly figured out the phrase!`;
        } else {
            screenOverlay.className = 'lose';
            gameOverMessage.innerHTML = `Bummer, you didn't correctly figure out the phrase. Give it another shot!`;
        }
        this.resetGame();
    }

    removeLife() {
        const heartsLeft = document.querySelectorAll('img');
        if(this.missed < 4) {
            heartsLeft[this.missed].src = 'images/lostHeart.png';
            this.missed += 1
        } else {
            this.gameOver();
        }
    }
}
