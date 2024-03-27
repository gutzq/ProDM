import { Character } from "../src/classes/Character/Character";
import { CharacterStats, Stat } from "../src/classes/Character/CharacterStats";

let EulerStats = new CharacterStats();
let Euler = new Character('Euler', EulerStats);
const intStat = Math.exp(1) * 100;


describe('Character upon Initialization', () => {
    test('Character.stat exists.', () => {
        expect(Euler.stats).toBeDefined();
    })
    test('Character\'s stats exists.', () => {
        for (let name of Object.values(Stat)) {
            expect(Euler.stats.get(name)).toBeDefined();
        }
    });
});

describe('Character behaviors', () => {
    let identityStats = new CharacterStats();
    let newStats = new CharacterStats();
    newStats.set(Stat.INT, intStat);

    test('Stats shall be invariant on addition of the identity.', () => {
        Euler.addStats(identityStats);
        expect(Euler.stats).toEqual(Euler.stats);
    });

    test('Stats shall change upon addition.', () => {
        expect(Euler.stats).not.toEqual(newStats);
    });

    test('Stats shall scale correctly.', () => {
        Euler.scaleStats(0);
        expect(Euler.stats).toEqual(identityStats);
    })
});