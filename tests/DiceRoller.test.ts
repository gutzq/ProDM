import { DiceRoller } from "../src/classes/DiceRoller/DiceRoller"

describe('DiceRoller upon Initialization:', () => {
    const n = 6;
    let dn = new DiceRoller(n);
    
    test(`D6 shall have ${n} PMF values.`, () => {
        expect(dn.pmf).toHaveLength(n);
    });
    
    test(`D6 shall have ${n} CDF values.`, () => {
        expect(dn.cdf).toHaveLength(n);
    });

    test(`D6's PMF values shall sum to 1.`, () => {
        expect(dn.pmf.reduce((acc, x) => acc + x)).toBeCloseTo(1);
    });

    
});

describe('DiceRoller Behavior Testing.', () => {
    
});