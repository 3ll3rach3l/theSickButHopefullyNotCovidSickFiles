function numRegions(graph) {
    let visited = new Set()
    let count = 0;
//iterate through all nodes in the graph
    for(let node in graph){
        if(depthFirst(node, graph, visited)) count++
    }
return count;
}


function depthFirst(node, graph, visited){
    if(visited.has(node)) return false;
    visited.add(node);
    graph[node].forEach(neighbor => depthFirst(neighbor, graph, visited))
    return true
}

module.exports = {
    numRegions
};