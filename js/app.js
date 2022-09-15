let game = null;  
const startButton = document.getElementById('btn__reset');
const keys = document.getElementsByClassName('key');

startButton.addEventListener('click', () => {
    game = new Game()
    game.startGame();
});

function buttonClicked() {
    for(let i = 0; i < keys.length; i++) {
        keys[i].addEventListener('click', (e) => {
            const button = e.target;
            game.handleInteraction(button);
        })
    };
}
buttonClicked();
