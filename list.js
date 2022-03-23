const myform = document.querySelector('#my-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const list = document.querySelector('#my-list');

myform.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault();
    if (name.value === '' || email.value === '') {
        msg.innerHTML = "Enter all the value";
        msg.style.background = "red";
        setTimeout(() => msg.remove(), 3000);
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(
            `Name: ${name.value} |  Email: ${email.value}`
        ))
        let newUser = {
            name: name.value,
            email: email.value
        }
        localStorage.setItem(`user${localStorage.length}`, JSON.stringify(newUser));

        list.appendChild(li);

        // clear field
        name.value = "";
        email.value = "";
    }
}