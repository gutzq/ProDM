class NormalizationError extends Error {}

export class DiceRoller {
    readonly sides: number;
    readonly pmf: Array<number>;
    readonly cdf: Array<number>;

    constructor(numSides: number, weights?: Array<number>) {
        this.sides = numSides;
        this.pmf = weights ? weights : new Array(numSides).fill(1/numSides)
        let normalSum = this.pmf.reduce((acc, curr) => {return acc + curr;})
        if (Math.abs(1 - normalSum) >= 0.01) {
            throw new NormalizationError("Sum of weights does not equal 1.");
        }
        this.cdf = this.pmf.map((sum => value => sum += value)(0));
    }

    roll(): number {
        var rand = Math.random();
        return this.cdf.findIndex(el => rand <= el);
    }
    
}