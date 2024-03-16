const DELIMITER_LEN = 2
const DELIMITER = ' '

export class EventNode {
    readonly name: String;
    outcomes = new Map()

    constructor(name: String){
        this.name = name
    }
    
    add(eventNode: EventNode){
        this.outcomes.set(eventNode.name, eventNode)
    }

    remove(eventName: String){
        this.outcomes.delete(eventName)
    }

    generateLevels(){ // organize nodes by depth where array idx is depth, and array members are nodes at that depth
        let levels = new Array()
        this.preorder(
            (node, depth) => {
                levels[depth] = levels[depth] ? levels[depth]: new Array()
                levels[depth].push(node)
        })
        return levels
    }

    toString(): String { // represent tree as string. shows overall structure. indentation depth for each node reflects its actual depth 
        let s = ""
        this.preorder(
            (node, depth) => {s = s.concat(`${DELIMITER.repeat(DELIMITER_LEN * depth)}${node.name}\n`)}
        )
        return s
    }

    private invariant(recentNode: EventNode): Boolean { // what must be true after every insertion. in the case of a tree, no cycles
        let visitedNodes = new Set<EventNode>([recentNode])
        // this.preorder((node, depth) => {
            
        // })
        return true
    }

    private preorder(apply: (atNode: EventNode, depth: number) => void){ // preorder traversal with depth tracking
        const helper = (depth: number) => {
            depth = depth ? depth : 0
            apply(this, depth)
            if (this.outcomes.size > 0){
                for (const outcome of this.outcomes.values()) {
                    outcome.preorder(apply, depth + 1);
                }
            }
        }
        helper(0)
    }

}