/* Queue
* A Queue is a data structure that allows you to add an element to the end of
* a list and remove the item at the front. A queue follows a "First In First Out"
* system, where the first item to enter the queue is the first to be removed. This
* implementation uses an array to store the queue.
*/

class Queue{
  constructor(){
    this.queue = []
  }

  enqueue(newValue){
    this.queue.push(newValue)
  }
  dequeue(){
    if(this.empty()){
      throw new Error('Queue is empty')
    }
    return this.queue.shift()
  }

  empty(){
    return this.queue === 0
  }
  length(){
    return this.queue.length
  }
  peek(){
    if(this.empty()){
      throw new Error('Queue is empty')
    }
    return this.queue[0]
  }
  // List all the items in the queue
  view () {
    for(let i =0;i<this.queue.length; i++){
      console.log(this.queue[i])
    }
  }
}

const myQueue = new Queue()
myQueue.enqueue(10)
myQueue.enqueue(20)
myQueue.enqueue(30)
console.log(myQueue)
console.log(myQueue.dequeue())
console.log('================')
console.log(myQueue.view())