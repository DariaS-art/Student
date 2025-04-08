class User {
  constructor(username){
   this.Name = username;
   document.write(this.Name);}
};
let users = new User(prompt("имя"));

let user1n = "Вася";

class User1 {
    constructor(user1n){
        this.user = 'Привет, ' + user1n;
        alert(this.user)
    }
}
let user1 = new User1(user1n);

let us = prompt("user2"); 

class User2 {
  constructor(us){
    this.user2 = us;
  }
  reverseUser2(){
    this.user2 = this.user2.split('').reverse().join('');
    console.log(this.user2);
  }
}

let user2 = new User2(us); 
user2.reverseUser2();