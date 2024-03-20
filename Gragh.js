

class Graph {
    constructor(){
      this.adjacencyList = {};
    }
 
    addVertex(vertex) {
     if(!vertex) {
         throw new Error('cannot enter null vertex');
     }
       if(!this.adjacencyList[vertex]) {
         this.adjacencyList[vertex] = []
       } else {
         throw new Error('vertex already exists');
       }
    }
 
    addEdge(vertex, destination, isBidirectional) {
        if(!this.adjacencyList[vertex]) {
          this.addVertex(vertex);
        }
 
        if(!this.adjacencyList[destination]) {
           this.addVertex(vertex);
        }
          this.adjacencyList[vertex].push(destination);
 
        if(isBidirectional === true) { 
          this.adjacencyList[destination].push(vertex);
        }
    }
 
    revomeEdge(vertex, destination) {
      this.adjacencyList[vertex] = this.adjacencyList[vertex].filter(vertex => vertex !== destination);
      this.adjacencyList[destination] = this.adjacencyList[destination].filter(vertex => vertex !== vertex);
    }
 }
 
 const graph = new Graph();
 graph.addVertex(2);
 graph.addEdge(1, 2)
 graph.addEdge(2, 1)
 console.log(graph)