"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventNode = void 0;
const DELIMITER_LEN = 2;
const DELIMITER = ' ';
class CycleViolationInTreeError extends Error {
}
class EventNode {
    constructor(name) {
        this.outcomes = new Map();
        this.name = name;
    }
    add(newEvent) {
        this.invariant(newEvent);
        this.outcomes.set(newEvent.name, newEvent);
    }
    remove(newEvent) {
        this.outcomes.delete(newEvent);
    }
    generateLevels() {
        let levels = new Array();
        this.preorder((node, depth) => {
            levels[depth] = levels[depth] ? levels[depth] : new Array();
            levels[depth].push(node);
        });
        return levels;
    }
    toString() {
        let s = "";
        this.preorder((node, depth) => { s = s.concat(`${DELIMITER.repeat(DELIMITER_LEN * depth)}${node.name}\n`); });
        return s;
    }
    invariant(recentNode) {
        let visitedNodes = new Set([recentNode]);
        let hasCycle = false;
        this.preorder((node, _) => {
            hasCycle = visitedNodes.has(node);
            visitedNodes.add(node);
        });
        if (hasCycle) {
            throw new CycleViolationInTreeError(`${recentNode.name} has caused a cycle in ${this.name}.`);
        }
        return !hasCycle;
    }
    //TODO: make this a generator
    preorder(apply) {
        const helper = (depth) => {
            depth = depth ? depth : 0;
            apply(this, depth);
            if (this.outcomes.size > 0) {
                for (const outcome of this.outcomes.values()) {
                    outcome.preorder(apply, depth + 1);
                }
            }
        };
        helper(0);
    }
}
exports.EventNode = EventNode;
