class Graph {
   adjacencyList: Map<number, number[]>;
   constructor() {
      this.adjacencyList = new Map();
   }

   get(node: number) {
      return this.adjacencyList.get(node)
   }

   addNode(node: number) {
      if (!this.adjacencyList.has(node)) {
         this.adjacencyList.set(node, []);
      }
   }

   addEdge(node1: number, node2: number) {
      if (this.adjacencyList.has(node1)) {
         this.adjacencyList.get(node1)!.push(node2);
      }
   }

   printGraph() {
      for (let [node, edges] of this.adjacencyList) {
         console.log(`${node} -> ${edges.join(', ')}`);
      }
   }
}

const bfs = (graph: Graph, current: number, degree: number[], queue: number[], visited: number[]) => {
   if (visited.indexOf(current) !== -1) {
      return;
   }
   visited.push(current)
   if (graph.get(current)?.length !== 0) {
      for (const element of graph.get(current)!) {
         degree[element]--;
         if (degree[element] === 0)
            queue.push(element)
      }
   }
}


function canFinish(numCourses: number, prerequisites: number[][]): boolean {
   console.log("\n");

   const graph = new Graph()
   const queue: number[] = []

   // build graph 
   for (let i = 0; i < numCourses; i++) {
      graph.addNode(i)
   }
   const degree = new Array(numCourses).fill(0)
   for (let prerequisite of prerequisites) {
      graph.addEdge(prerequisite[1], prerequisite[0])
      degree[prerequisite[0]]++
   }
   // end of build graph

   for (let index = 0; index < degree.length; index++) {
      if (degree[index] === 0)
         queue.push(index)
   }

   const visited: number[] = []
   console.log("🚀 ~ canFinish ~ prerequisites:", prerequisites)
   console.log("🚀 ~ canFinish ~ queue:", queue)
   while (queue.length !== 0)
      bfs(graph, queue.shift()!, degree, queue, visited)
   // console.log(graph.printGraph());
   return visited.length === numCourses;

};


// Test case 1: No prerequisites, should return true
// console.log(canFinish(2, [])); // Expected output: true

// Test case 2: Simple cycle, should return false
// console.log(canFinish(2, [[1, 0], [0, 1]])); // Expected output: false

// Test case 3: Linear dependencies, should return true
// console.log(canFinish(3, [[1, 0], [2, 1]])); // Expected output: true

// Test case 4: Complex graph with no cycles, should return true
// console.log(canFinish(4, [[1, 0], [2, 1], [3, 2]])); // Expected output: true

// Test case 5: Complex graph with a cycle, should return false
// console.log(canFinish(4, [[1, 0], [2, 1], [3, 2], [1, 3]])); // Expected output: false

// Test case 6: Multiple independent chains, should return true
// console.log(canFinish(6, [[1, 0], [2, 1], [4, 3], [5, 4]])); // Expected output: true

// Test case 7: Single node with no edges, should return true
// console.log(canFinish(1, [])); // Expected output: true

// Test case 8: Single node with a self-loop, should return false
console.log(canFinish(1, [[0, 0]])); // Expected output: false

// Test case 9: Single node with a self-loop, should return true
console.log(canFinish(5, [[1, 4], [2, 4], [3, 1], [3, 2]])); // Expected output: true