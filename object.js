let person = {
    name: "vishma",
    age: 26,
    hobbies: ["movies", "gaming", "music"],
    address: {
        street: "B.lane",
        city: "Malda",
        state: "West Bengal",
    }
}

const {age} = person;
console.log(age);
const {address: {state}} = person;
console.log(state);

const todos = [
    {
        id:1,
        task: "Buy book",
        completed: true,
    },
    {
        id:2,
        task: "clean cloths",
        completed: false,
    },
    {
        id:3,
        task: "goto market",
        completed: false,
    },
]

todos.map((todo) => {
    console.log(todo.id);
})

const completedTask = todos.filter((todo) => {
    return todo.completed == true;
}).map((todo)=>{
    return todo.task;
})

console.log(completedTask);