import { EventNode } from "../src/classes/EventNode/EventNode"
let mockName = "Node";

describe('EventNode upon initialization:', () => {
    
    let node = new EventNode(mockName);
    
    test('Children should be zero.', () => {        
        expect(node.outcomes.size).toBe(0);
    });

    test(`EventNode.name should return ${mockName}.`, () => {
        expect(node.name).toBe(mockName);
    });
})

describe('EventNode behavior testing:', () => {
    let root = new EventNode(mockName.concat('Root'));
    let node1 = new EventNode(mockName.concat('1'));
    
    let node2 = new EventNode(mockName.concat('2'));
    let node21 = new EventNode(mockName.concat('21'));
    const two = 2;

    root.add(node1);
    root.add(node2);

    node2.add(node21);
    test(`${root.name} should have ${two} immediate children after additions.`, () =>{
        expect(root.outcomes.size).toBe(two);
    });

    test(`${root.name} should have proper tree structure.`, () => {
        expect(root.toString()).toBe(`${root.name}\n\t${node1.name}\n\t${node2.name}\n\t\t${node21.name}\n`);
    });

    test('EventNode\'s invariant should throw for invalid node addition.', () => {
        expect(() => {node21.add(root)}).toThrow();
    });
})