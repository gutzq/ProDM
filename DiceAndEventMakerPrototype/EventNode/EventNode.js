class EventNode {
    constructor(name){
        this.name = name
    }
    outcomes = new Map()
    
    addEvent(eventNode){
        this.outcomes.set(eventNode.name, eventNode)
    }

    removeEvent(eventNodeName){
        this.outcomes.delete(eventNodeName)
    }

    generateLevels(){ // organize nodes by depth where array idx is depth, and array members are nodes at that depth
        let levels = new Array()
        this.#preorder(
            (node, depth) => {
                levels[depth] = levels[depth] ? levels[depth]: new Array()
                levels[depth].push(node)
        })
        return levels
    }

    toString(){ // convert tree to a string. indentation depth for each node reflects its actual depth 
        let s = ""
        this.#preorder(
            (node, depth) => {s = s.concat(`${' '.repeat(2*depth)}${node.name}\n`)}
        )
        return s
    }

    #preorder(apply, depth){ // preorder traversal with depth tracking
        depth = depth ? depth : 0
        apply(this, depth)
        if (this.outcomes.size > 0){
            for (const outcome of this.outcomes.values()) {
                outcome.#preorder(apply, depth + 1);
            }
        }
    }
}

module.exports = EventNode; // Export the class
