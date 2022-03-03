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
}




const linkList = new LinkedList()
linkList.addFirst(100)
linkList.addLast(30)
linkList.addLast(20)
linkList.addLast(10)
linkList.addLast(5)
linkList.addFirst(100)
linkList.display()
console.log("List", linkList.get())
console.log(linkList)