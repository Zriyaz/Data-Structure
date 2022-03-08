// Methods - size, head, addLast, addFirst, addAt, removeFirst, removeLast, remove, removeAt, indexOf, isEmpty,  elementAt, get
class Node {
  constructor(data){
    this.data = data
    this.next = null
  }
}
class LinkedList{
  constructor(){
    this.headNode = null;
    this.length = 0;
  }

  size(){
    return this.length;
  }
  isEmpty(){
    return this.length === 0
  }

  head(){
    return this.headNode ? this.headNode.data : null
  }
  addLast(data){
   const node = new Node(data)
    if(this.headNode === null){
      this.headNode = node;
    }else{
      let tempNode = this.headNode;
        while(tempNode.next){
          tempNode = tempNode.next
        }
       tempNode.next = node
    }
    this.length++
  }
  display(){
    let tempNode = this.headNode;
    while(tempNode){
      console.log('Node:-', tempNode.data)
      tempNode = tempNode.next
    }
  }
    get () {
    const list = []
    let currentNode = this.headNode
    while (currentNode) {
      list.push(currentNode.data)
      currentNode = currentNode.next
    }
    return list
  }
  addFirst(data){
      const newNode = new Node(data)
      newNode.next = this.headNode;
      this.headNode = newNode;
      this.length++
  }
    removeFirst(){
    if(this.length>0){
      this.headNode = this.headNode.next;
      this.length--
    }
  }
  removeLast(){
    if(this.length===1){
      this.headNode = null
      this.lenght--
    }else if(this.length > 1){
      let index = 0;
      let tempNode = this.headNode;
      while(index !== this.length - 2){
        index++
        tempNode = tempNode.next
      }
      tempNode.next = null
      this.length--
    }
  }
  removeByValue(key){
     let tempNode = this.headNode
    if(tempNode.data === key){
      this.headNode = tempNode.next
      this.length--
    }else{
     
      while(tempNode && tempNode.next){
        if(tempNode.next.data === key){
          tempNode.next = tempNode.next.next;
          break;
        }
        tempNode = tempNode.next;
      }
      this.length--
    }
  }

  indexOf(key){
    let tempNode = this.headNode;
    let index = 0;
    while(tempNode !==null){
      if(tempNode.data === key){
        return index
      }
      tempNode = tempNode.next
      index++
    }
    return -1
  } 
}

const linkList = new LinkedList()
linkList.addFirst(100)
linkList.addLast(30)
linkList.addLast(20)
linkList.addLast(10)
linkList.addLast(5)
linkList.addLast(120)
linkList.addLast(56)
linkList.addLast(43)
linkList.addFirst(100)
linkList.display()
console.log("List", linkList.get())
console.log("Index Of", linkList.indexOf(30))
console.log("removeFirst", linkList.removeFirst())
console.log("removeLast", linkList.removeLast())
console.log("List", linkList.get())
console.log("removeLast", linkList.removeByValue(5))
console.log("removeLast", linkList.removeByValue(20))
console.log("removeLast", linkList.removeByValue(100))
console.log("removeLast", linkList.removeByValue(56))
console.log("List", linkList.get())