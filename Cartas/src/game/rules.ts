export class Rules {
    private static readonly WINNING_SCORE = 7.5;
    private static readonly LOSING_SCORE = 7;

    public checkWin(score: number): boolean {
        return score === Rules.WINNING_SCORE;
    }

    public checkLoss(score: number): boolean {
        return score > Rules.LOSING_SCORE;
    }

    public canContinue(score: number): boolean {
        return score < Rules.LOSING_SCORE;
    }
}