// This file is the entry point of the application. It initializes the game, manages the game loop, and handles user input for taking cards or stopping.

import { Deck } from './game/deck';
import { Player } from './game/player';
import { Rules } from './game/rules';

class Game {
    private deck: Deck;
    private player: Player;
    private rules: Rules;

    constructor() {
        this.deck = new Deck();
        this.player = new Player();
        this.rules = new Rules();
        this.startGame();
    }

    private startGame(): void {
        this.deck.shuffle();
        this.player.addCard(this.deck.drawCard());
        this.player.addCard(this.deck.drawCard());
        this.gameLoop();
    }

    private gameLoop(): void {
        let playing = true;

        while (playing) {
            console.log(`Your hand: ${this.player.getHand()} - Score: ${this.player.calculateScore()}`);
            const action = this.getUserInput();

            if (action === 'take') {
                this.player.addCard(this.deck.drawCard());
                if (this.rules.checkLoss(this.player.calculateScore())) {
                    console.log('You lost! Your score exceeded 7.5');
                    playing = false;
                }
            } else if (action === 'stop') {
                console.log(`Your final score: ${this.player.calculateScore()}`);
                if (this.rules.checkWin(this.player.calculateScore())) {
                    console.log('You won!');
                } else {
                    console.log('Game over. Better luck next time!');
                }
                playing = false;
            }
        }
    }

    private getUserInput(): string {
        // Placeholder for user input logic
        // In a real application, this would be replaced with actual input handling
        return 'stop'; // Default action for demonstration
    }
}

new Game();