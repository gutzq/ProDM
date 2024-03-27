import * as fs from 'fs';
import { Character } from "../src/classes/Character/Character";
import { Scriber, characterSaveFileName, eventsSaveFileName } from "../src/classes/Scriber/Scriber";

const saveDirectory = './files';
let scribe = new Scriber(saveDirectory);

let Gauss = new Character('Gauss');
{ // block statements to avoid poisoning main scope
    let charactersPath = `${saveDirectory}/${characterSaveFileName}`
    let characters = JSON.parse(fs.readFileSync(charactersPath, 'utf-8'));
    characters[Gauss.name] = {stats: Object.entries(Gauss.stats)};
    fs.writeFileSync(charactersPath, JSON.stringify(characters));
}

describe('Scriber upon Initialization', () => {
    test(`Scriber should have created ${characterSaveFileName} in ` + saveDirectory, () => {
        expect(fs.existsSync(saveDirectory + '/' + characterSaveFileName)).toBe(true)
    });

    test(`Scriber should have created ${eventsSaveFileName} in ` + saveDirectory, () => {
        expect(fs.existsSync(saveDirectory + '/' + eventsSaveFileName)).toBe(true)
    });
});

describe('Scriber Data Save Behavior', () => {
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

    describe('Scriber Overwrite Test', () => {
        test('Scriber should not overwrite already saved data.', () => {
            let characters = JSON.parse(fs.readFileSync(saveDirectory + '/' + characterSaveFileName, 'utf-8'));
            let GaussJSON = characters[Gauss.name];
            expect(GaussJSON).toBeDefined()
        });
    });

    describe('Scriber Clean up', () => {
        test('Clean up shall not throw.', () => {
            expect(() => {
                fs.rmSync(saveDirectory, {recursive: true, force: true}); // clean up. like rm -rf
            }).not.toThrow()
        })
    });
});