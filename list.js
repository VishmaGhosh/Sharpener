const myform = document.querySelector('#my-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
var list = document.getElementById('my-list');

list.addEventListener('click', removeItem);

const key = Object.keys(localStorage);
let i = key.length;
while(i--){
    const li = document.createElement('li');
        let user = JSON.parse(localStorage.getItem(key[i]));
        // console.log(user.name);
        li.id = user.email;
        li.appendChild(document.createTextNode(
            `${user.name}`
        ))
        li.appendChild(document.createTextNode(
            ` / `
        ))
        li.appendChild(document.createTextNode(
            `${user.email}`
        ))

        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm m-1 delete';
        deleteBtn.appendChild(document.createTextNode('Delete'));

        var editBtn = document.createElement('button');
        editBtn.className = 'btn btn-warning btn-sm m-1 edit';
        editBtn.appendChild(document.createTextNode('Edit'));

        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        
        list.appendChild(li);
}

myform.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault();
    if (name.value === '' || email.value === '') {
        msg.innerHTML = "Enter all the value";
        msg.style.background = "red";
        setTimeout(() => msg.remove(), 3000);
    }
    else if(localStorage.getItem(email.value)){
        var temp = document.getElementById('my-list');
        var removeItem = document.getElementById('test@test.com');
        temp.removeChild(removeItem);
        let newUser = {
            name: name.value,
            email: email.value
        }
        localStorage.setItem(`${newUser.email}`, JSON.stringify(newUser));
        const li = document.createElement('li');
        li.id = newUser.email;
        // let user = JSON.parse(localStorage.getItem('user'));
        // console.log(user.name);
        li.appendChild(document.createTextNode(
            `${newUser.name}`
        ))
        li.appendChild(document.createTextNode(
            ` / `
        ))
        li.appendChild(document.createTextNode(
            `${newUser.email}`
        ))
        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm delete';
        deleteBtn.appendChild(document.createTextNode('Delete'));

        var editBtn = document.createElement('button');
        editBtn.className = 'btn btn-warning btn-sm mx-2 edit';
        editBtn.appendChild(document.createTextNode('Edit'));

        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        
        list.appendChild(li);

        // clear field
        name.value = "";
        email.value = ""; 
    }
    else {
        
        let newUser = {
            name: name.value,
            email: email.value
        }
        localStorage.setItem(`${newUser.email}`, JSON.stringify(newUser));
        const li = document.createElement('li');
        li.id = newUser.email;
        // let user = JSON.parse(localStorage.getItem('user'));
        // console.log(user.name);
        li.appendChild(document.createTextNode(
            `${newUser.name}`
        ))
        li.appendChild(document.createTextNode(
            ` / `
        ))
        li.appendChild(document.createTextNode(
            `${newUser.email}`
        ))
        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm delete';
        deleteBtn.appendChild(document.createTextNode('Delete'));

        var editBtn = document.createElement('button');
        editBtn.className = 'btn btn-warning btn-sm mx-2 edit';
        editBtn.appendChild(document.createTextNode('Edit'));

        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        
        list.appendChild(li);

        // clear field
        name.value = "";
        email.value = "";
    }
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        var li = e.target.parentElement;
        var x = li.childNodes[2].textContent;
        localStorage.removeItem(x);
        list.removeChild(li);
    }

    if(e.target.classList.contains('edit')){
        var li = e.target.parentElement;
        var uName = li.childNodes[0].textContent;
        var uEmail = li.childNodes[2].textContent;
        console.log(uName,uEmail);
        name.value = uName;
        email.value = uEmail;
        list.removeChild(li);
    }
  }
