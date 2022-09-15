class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay() {
        const phraseArr = document.getElementById('phrase');
        const phrase_ul = document.querySelector('ul');
        for(let i = 0; i < phraseArr.length; i++) {
            if(phraseArr[i] === ' '){
                const space_li = document.createElement('li');
                space_li.className = 'space';
                phrase_ul.append(space_li);
            } else {   
                const letter_li = document.createElement('li');
                letter_li.className = 'hide letter';
                letter_li.textContent = `${phraseArr[i]}`;
                phrase_ul.append(letter_li);
            }
        }
        return phrase_ul; 
    }
}

