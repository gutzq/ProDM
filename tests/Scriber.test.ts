import * as fs from 'fs';
import { Character } from "../src/classes/Character/Character";
import { Scriber, characterSaveFileName, eventsSaveFileName } from "../src/classes/Scriber/Scriber";

const saveDirectory = './files';
let scribe = new Scriber(saveDirectory);

describe('Scriber upon Initialization', () => {
    test(`Scriber should have created ${characterSaveFileName} in ` + saveDirectory, () => {
        expect(fs.existsSync(saveDirectory + characterSaveFileName)).toBe(true)
    });

    test(`Scriber should have created ${eventsSaveFileName} in ` + saveDirectory, () => {
        expect(fs.existsSync(saveDirectory + eventsSaveFileName)).toBe(true)
    });
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

    test('Scriber should not overwrite already written data.', () => {
        let characters = JSON.parse(fs.readFileSync(saveDirectory + characterSaveFileName, 'utf-8'));
        let GaussJSON = characters['Gauss'];
        expect(GaussJSON).toBeDefined();
    });
});