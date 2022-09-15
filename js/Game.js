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
        let phraseLetters = document.getElementsByClassName("letter");
        let shownLetters = document.getElementsByClassName("show");
        if(shownLetters.length === phraseLetters.length) {
            return true; 
        } else {
            return false; 
        }
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
