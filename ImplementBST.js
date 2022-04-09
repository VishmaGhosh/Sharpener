const { serialize } = require("v8");

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

}

class BST{
    constructor(){
       this.root = null;
    }
    insert(data){
       var newNode = new Node(data);
       if(this.root === null){
          this.root = newNode;
       }else{
          this.insertNode(this.root, newNode);
       };
    };
    insertNode(node, newNode){
       if(newNode.data < node.data){
          if(node.left === null){
             node.left = newNode;
          }else{
             this.insertNode(node.left, newNode);
          };
       } else {
          if(node.right === null){
             node.right = newNode;
          }else{
             this.insertNode(node.right,newNode);
          };
       };
    };

    find(val) {
        if (!this.root) return undefined;
        let current = this.root,
            found = false;
      
        while (current && !found) {
          if (val < current.val) current = current.left;
          else if (val > current.val) current = current.right;
          else found = true;
        };
      
        if (!found) return 'Nothing Found!';
        return current;
      };
 };

//  function findMin(root){
//     if(root === null)
//       return -1;
//       while(root.left !== null){
//          root = root.left;
//       }
//       return root.data;
//  }
function findMin(root){
   if(root === null)
     return -1;
     if(root.left == null) return root.data;
     return findMin(root.left);
}

 function findMax(root){
    if(root === null){
       return -1;
    }
    if(root.right === null) return root.data;

    return findMax(root.right);
 }



var tree = new BST();
tree.insert(5);
tree.insert(20);
tree.insert(7);
tree.insert(3);
console.log(tree);
// console.log(tree.find(20));

console.log(findMin(tree.root));
console.log(findMax(tree.root));