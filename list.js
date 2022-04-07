

const myform = document.querySelector('#my-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
var list = document.getElementById('my-list');

list.addEventListener('click', removeItem);

function showUser() {
    list.innerHTML = "";
    let data = axios.get('https://crudcrud.com/api/8dfebe78b1dd4c15863f635d57408ef1/appoinmentData')
        .then(res => {
            console.log(res.data);
            res.data.map((user, key) => {
                const li = `<li id=${user.email}><span>${user.name}</span> => <span>${user.email}</span>
    <button class="btn btn-danger btn-sm m-1 delete">delete</button>
    <button class="btn btn-warning btn-sm m-1 edit">edit</button></li>`
                list.innerHTML = list.innerHTML + li;
            })
        })
        .catch(err => console.log(err));
    console.log(data);

}

showUser();

myform.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault();
    if (email.value === '' || name.value === '') {
        alert("Enter all the value");
    }
    else {

        let newUser = {
            name: name.value,
            email: email.value,
        }
        axios({
            method: 'post',
            url: 'https://crudcrud.com/api/8dfebe78b1dd4c15863f635d57408ef1/appoinmentData',
            data: newUser,
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        showUser();    

        // clear field
        name.value = "";
        email.value = "";
    }
}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        var li = e.target.parentElement;
        var x = li.childNodes[2].textContent;
        localStorage.removeItem(x);
        list.removeChild(li);
    }

    if (e.target.classList.contains('edit')) {
        var li = e.target.parentElement;
        console.log(li);
        var uName = li.childNodes[0].textContent;
        var uEmail = li.childNodes[2].textContent;
        // console.log(uName, uEmail);
        name.value = uName;
        email.value = uEmail;
        list.removeChild(li);
    }
}
