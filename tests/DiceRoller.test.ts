import { DiceRoller } from "../src/classes/DiceRoller/DiceRoller"

describe('Dice Roller upon Initialization:', () => {
    const six = 6;
    let d6 = new DiceRoller(six);
    test(`D6 shall have ${six} PMF values.`, () => {
        expect(d6.pmf).toHaveLength(six);
    }),
    test(`D6 shall have ${six} CDF values.`, () => {
        expect(d6.cdf).toHaveLength(six);
    })
})