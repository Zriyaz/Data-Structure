class Node{
  constructor(data){
    this.data = data
    this.left = null
    this.right = null
  }
}
class BinaryTree{
  constructor(){
    this.root = null
  }
  insert(data){
    const newNode = new Node(data);
    if(this.root ===null){
      this.root = newNode
    }else{
      this.insertNode(this.root, newNode)
    }
  }
  insertNode(rootNode, newNode){
    if(newNode.data < rootNode.data){
      if(rootNode.left === null){
        rootNode.left = newNode
      }else{
        this.insertNode(rootNode.left, newNode)
      }
    }else{
      if(rootNode.right === null){
        rootNode.right = newNode
      }else{
        this.insertNode(rootNode.right, newNode)
      }
    }
  }
  remove(data){
    this.root = this.removeNode(this.root, data)
  }

  removeNode(node, key){
    if(node === null){
      return node
    }else if(key < node.data){
      node.left = this.removeNode(node.left, key)
      return node
    }else if(key> node.data){
      node.right = this.removeNode(node.right, key)
      return node
    }else{
      // deleting node with no children
      if(node.left === null  && node.right === null){
        node = null
        return node
      }
      if(node.left === null){
        node = node.right;
        return node
      }
      else if(node.right === null){
        node = node.left
        return node
      }
      var aux = this.findMinNode(node.right);
        node.data = aux.data;
 
        node.right = this.removeNode(node.right, aux.data);
        return node;
    }
  }
  findMinNode(node){
    // if left of a node is null
    // then it must be minimum node
    if(node.left === null)
        return node;
    else
        return this.findMinNode(node.left);
  }
  preOrder(node){
    if(node !== null)
    {
        console.log('Pre-Order', node.data);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
  }
  inOrder(node){
    if(node !==null){
       this.inOrder(node.left)
        console.log('Inorder', node.data);
        this.inOrder(node.right)
    }
  }
  postOrder(node){
    if(node !== null){
      this.postOrder(node.left)
      this.postOrder(node.right)
       console.log('Post-order', node.data);
    }
  }
  getRootNode(){
    return this.root
  }
}

const myTree = new BinaryTree()
myTree.insert(45)
myTree.insert(32)
myTree.insert(55)
myTree.insert(68)
myTree.insert(23)
myTree.insert(69)
const root = myTree.getRootNode()
myTree.preOrder(root)
myTree.inOrder(root)
myTree.postOrder(root)
myTree.remove(68)
myTree.preOrder(root)