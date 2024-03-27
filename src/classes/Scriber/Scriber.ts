import * as fs from 'fs';
import { EventNode } from '../EventNode/EventNode';
import { Character } from '../Character/Character';

const characterSaveFileName = '/Characters.json';
const eventsSaveFileName = '/Events.json';

export class Scriber {
    readonly saveDirectory: fs.PathOrFileDescriptor;

    constructor(saveDirectory: fs.PathOrFileDescriptor) {
        this.saveDirectory = saveDirectory;
    }

    saveEventCard(event: EventNode, imgPath: fs.PathOrFileDescriptor) {
        
    }

    saveCharacter(character: Character) {
        const newCharacter = {stats: Object.fromEntries(character.stats)};
        let characters = JSON.parse(
            fs.readFileSync(this.saveDirectory + characterSaveFileName, 'utf-8')
        );
        characters[character.name.toString()] = newCharacter;
        fs.writeFile(this.saveDirectory + characterSaveFileName, JSON.stringify(characters), (err) => {if (err) throw err;});
    }
}