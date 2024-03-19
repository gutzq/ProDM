const DELIMITER = '\t';

class CycleViolation extends Error {}

export class EventNode {
    readonly name: String;
    outcomes: Map<String, EventNode> = new Map();

    constructor(name: String) {
        this.name = name;
    }
    
    add(newEvent: EventNode) {
        this.outcomes.set(newEvent.name, newEvent);
    }

    remove(newEvent: String) { // add and remove accept different types. TODO: possible redesign?
        this.outcomes.delete(newEvent);
    }

    *[Symbol.iterator](): Generator<[EventNode, number], void, void> {
        yield* this.preorder(0);
    }

    generateLevels() { // organize nodes by depth where array idx is depth, and array members are nodes at that depth
        let levels: Array<Array<EventNode>> = new Array();
        for (const [outcome, depth] of this) {
            levels[depth] = levels[depth] ? levels[depth]: new Array();
            levels[depth].push(outcome);
        }
        return levels;
    }

    toString(): String { // represent tree as string. shows overall structure. indentation depth for each node reflects its actual depth 
        let s = '';
        for (const [outcome, depth] of this) {
            s = s.concat(`${DELIMITER.repeat(depth)}${outcome.name}\n`)
        }
        return s;
    }

    private *preorder(depth: number = 0): Generator<[EventNode, number], void, void>{ // preorder traversal with depth tracking
        yield [this, depth];
        if (this.outcomes.size > 0) {
            for (const outcome of this.outcomes.values()) {
                yield* outcome.preorder(depth + 1);
            }
        }
    }
}