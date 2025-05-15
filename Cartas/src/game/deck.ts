class Card {
    suit: string;
    value: number;

    constructor(suit: string, value: number) {
        this.suit = suit;
        this.value = value;
    }
}

export class Deck {
    private cards: Card[];

    constructor() {
        this.cards = [];
        this.reset();
    }

    reset(): void {
        this.cards = [];
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        for (let suit of suits) {
            for (let value = 1; value <= 7; value++) {
                this.cards.push(new Card(suit, value));
            }
        }
        this.shuffle();
    }

    shuffle(): void {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    draw(): Card | null {
        return this.cards.length > 0 ? this.cards.pop() || null : null;
    }
}