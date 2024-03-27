import * as fs from 'fs';
import { EventNode } from '../EventNode/EventNode';
import { Character } from '../Character/Character';

export const characterSaveFileName = '/Characters.json';
export const eventsSaveFileName = '/Events.json';

export class Scriber {
    readonly saveDirectory: fs.PathOrFileDescriptor;

    constructor(saveDirectory: fs.PathOrFileDescriptor) {
        this.saveDirectory = saveDirectory;
        fs.appendFileSync(this.saveDirectory + characterSaveFileName, '');
        fs.appendFileSync(this.saveDirectory + eventsSaveFileName, ''); // this is to create the file just in case. TS/JS has no method of just making one
    }

    saveEventCard(event: EventNode, imgPath: fs.PathOrFileDescriptor) {
        
    }

    saveCharacter(character: Character) {
        const newCharacter = {stats: Object.fromEntries(character.stats)};
        let file = fs.readFileSync(this.saveDirectory + characterSaveFileName, 'utf-8');
        let characters = JSON.parse(file);
        characters[character.name.toString()] = newCharacter;
        fs.writeFileSync(this.saveDirectory + characterSaveFileName, JSON.stringify(characters));
    }
}