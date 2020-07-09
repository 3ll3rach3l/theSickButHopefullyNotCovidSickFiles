function maxValue(node, visited=new Set()) {
    if(visited.has(node))return -Infinity; //Math.max needs a number to compare to instead of null/undefinied
    visited.add(node)
   //find the max value among all subgraphs connected
   let maxDoorNeighbors = node.neighbors.map( neighbor => maxValue(neighbor, visited))
   //that will return an array of all max neighbor vals 
   return Math.max(node.val, ...maxDoorNeighbors)
}  
   
   
module.exports = {
   maxValue }