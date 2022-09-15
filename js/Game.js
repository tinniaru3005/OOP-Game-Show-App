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
}
