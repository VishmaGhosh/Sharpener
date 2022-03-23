class User{
    static count = 0;
    constructor(name,age){
        this.name = name;
        this.age = age;
        User.count += 1
        this.trialEnd = User.freeTrial(new Date());
        
    }
    static registeredUser(){
        return this.count;
    }
    static freeTrial(date){
        let date1 = date;
        date1.setMonth(date.getMonth()+1);
        return date1;
    }

    membership(typeOf){
        if(typeOf ==  'standard'){
            User.freeTrial(this.trialEnd);
        }
        if(typeOf == 'yearly'){
            let date2 = this.trialEnd;
            date2.setFullYear((date2.getFullYear()+1));
            this.trialEnd = date2;
        }
    }
}

let user1 = new User("vishma",25);
let user2 = new User("hanna",24);
let user3 = new User("hanna",24);

user1.membership('yearly');

console.log(user1.trialEnd);

console.log(User.registeredUser());
