class Stack {
   constructor(){
   	this.stack = []
   	this.top = 0
   }

   // Add a value to the end to stack
   push(newValue){
   	 this.stack.push(newValue)
   	 this.top +=1
   }

  // Remove the element from top
   pop(){
   	if(this.top !==0){
   		this.top -= 1
   		return this.stack.pop()
   	}
   	throw new Error('Stack Underflow')
   }

  // get the length of stack
   length(){
   	return this.top
   }

  // Check stack is empty or not
   isEmpty(){
   	 return this.top === 0
   }

  // get the last element of stack
   last(){
   	if(this.top !== 0){
   		return this.stack[this.stack.length-1]
   	}
   	return null
   }

  // check is stack or not
   static isStack (el){
   	return el instanceof Stack
   }
}

const myBookStack = new Stack()
myBookStack.push(10)
myBookStack.push(5)
myBookStack.push(20)
console.log(myBookStack)
console.log(myBookStack.length())
console.log(myBookStack.last())
console.log(myBookStack.length())
console.log('isEmpty', myBookStack.isEmpty())
console.log(myBookStack.pop())
console.log(myBookStack.pop())
console.log(myBookStack.pop())
console.log('isEmpty', myBookStack.isEmpty())