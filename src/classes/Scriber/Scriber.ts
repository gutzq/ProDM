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
        const newEvent = {event: Object.fromEntries(event)}
    }

    saveCharacter(character: Character) {
        const newCharacter = {stats: Object.fromEntries(character.stats)};
        let file = fs.readFileSync(this.saveDirectory + characterSaveFileName, 'utf-8');
        let characters = JSON.parse(file);
        characters[character.name.toString()] = newCharacter;
        fs.writeFileSync(this.saveDirectory + characterSaveFileName, JSON.stringify(characters));
    }
}