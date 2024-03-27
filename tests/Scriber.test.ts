import * as fs from 'fs';
import { Character } from "../src/classes/Character/Character";
import { Scriber } from "../src/classes/Scriber/Scriber";

let scribe = new Scriber('./files');

describe('Scriber upon Initialization', () => {
    test.todo('Scrungulus');
});

describe('Scriber saving character data', () => {
    let Euler = new Character('Euler');
    let Newton = new Character('Newton');

    test('Scriber should save with no errors.', () => {
        expect(() => {
            scribe.saveCharacter(Euler);
        }).not.toThrow();
    });

    test('Scriber should save again with no errors.', () => {
        expect(() => {
            scribe.saveCharacter(Newton);
        }).not.toThrow();
    });
});