import { EventNode } from "../src/classes/EventNode/EventNode"

let mockName = "node";
let node = new EventNode(mockName);

describe('EventNode upon initialization', () => {
    test('Children should be zero', () => {        
        expect(node.outcomes.size).toBe(0);
    }),
    test(`EventNode.name should return ${mockName}`, () => {
        expect(node.name).toBe(mockName);
    })
})