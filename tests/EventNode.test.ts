import { EventNode } from "../src/classes/EventNode/EventNode"
let mockName = "Node";

describe('EventNode upon initialization:', () => {
    
    let node = new EventNode(mockName);
    
    test('Children should be zero.', () => {        
        expect(node.outcomes.size).toBe(0);
    }),
    test(`EventNode.name should return ${mockName}.`, () => {
        expect(node.name).toBe(mockName);
    })
})

describe('EventNode behavior testing:', () => {
    let root = new EventNode(mockName.concat('0'));
    let node1 = new EventNode(mockName.concat('1'));
    
    let node2 = new EventNode(mockName.concat('2'));
    let node21 = new EventNode(mockName.concat('21'));

    root.add(node1);
    root.add(node2);

    node2.add(node21);

    test(`EventNode should have ${2} immediate children after additions.`, () =>{
        expect(root.outcomes.size).toBe(2);
    });

    test('EventNode should have proper tree structure.', () => {
        expect(root.toString()).toBe('Node0\n\tNode1\n\tNode2\n\t\tNode21\n');
    });

    test('EventNode\'s invariant should throw for invalid addition.', () => {
        expect(() => {
            node1.add(node21)
        }).toThrow(new Error(`Addition of ${node21.name} has caused a cycle.`));
    });
})