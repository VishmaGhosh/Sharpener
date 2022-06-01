class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

}

let root = new Node(10);
let l1 = new Node(5);
let r1 = new Node(20);
let l2 = new Node(15);
let l3 = new Node(25);
root.left = l1;
root.right = r1;
l1.left = l2;
l1.right = l3;
function PreOreder(root){
    let a= [];
    let st = [];
    st.push(root);
    while(st.length != 0){
        let curr = st.pop();
        a.push(curr.data);
        if(curr.right != null){
            st.push(curr.right);
        }
        if(curr.left != null){
            st.push(curr.left);
        }
    }
    return a;
}


let ans = PreOreder(root);
console.log(ans);


function preOrederRec(root,res){
    if(root == null){
        return;
    }
    res.push(root.data);
    preOrederRec(root.left,res);
    preOrederRec(root.right,res);
}

let res = [];
preOrederRec(root,res);
console.log(res);

