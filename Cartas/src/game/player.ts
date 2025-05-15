class Player {
    hand: string[];
    score: number;

    constructor() {
        this.hand = [];
        this.score = 0;
    }

    addCard(card: string): void {
        this.hand.push(card);
        this.calculateScore();
    }

    calculateScore(): void {
        this.score = 0;
        for (const card of this.hand) {
            const cardValue = this.getCardValue(card);
            this.score += cardValue;
        }
    }

    private getCardValue(card: string): number {
        const value = card.split(' ')[0]; // Assuming card format is "value suit"
        if (value === 'J' || value === 'Q' || value === 'K') {
            return 0.5; // Face cards are worth 0.5
        } else if (value === 'A') {
            return 1; // Ace is worth 1
        } else {
            return parseInt(value); // Number cards are worth their value
        }
    }

    getScore(): number {
        return this.score;
    }

    getHand(): string[] {
        return this.hand;
    }

    clearHand(): void {
        this.hand = [];
        this.score = 0;
    }
}