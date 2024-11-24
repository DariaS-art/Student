//Задание 1
let user1 = {
    name: "Джон",
    age: 30
   };
   
   user.sayHi = function() {
    alert("Привет!");
   };
   
   user1.sayHi(); // Привет!
//Задание 2 
   const customer = {
    firstName: "Дарья",
    lastName: "Сигачева",
    address: "ул. Мячковский бульвар 8",
    phoneNumber: "+7 966 304 68 26",
    email: "sigachevadasha@mail.ru"
   };
   
   console.log(customer.firstName, customer.lastName, customer.email);
//Задание 3
let friend1 = {
    name: "Настя",
    age: 19,
  isAdmin: false
 };
 let order = {
ID: 2,
ZAKAZ: 1,
items: ["Пицца", "Салат", "Кока-Кола"],
status: "Ожидание"
 }
 let restaurant = {
    name: "Пушкинъ",
    location: "Москва",
    rating: 4.5
 };
 if (order.status === "Ожидание") {
  console.log(`Заказ ${order.items} от пользователя ${friend1.name} в ресторане ${restaurant.name} в ${restaurant.location} с рейтингом ${restaurant.rating} ожидание.`);
}
//Задание 4
function GroupMember(name) {
    this.name = name;
  }
  
  const member1 = new GroupMember("Вера");
  const member2 = new GroupMember("Матвей");
  const member3 = new GroupMember("Ильгис");
  const member4 = new GroupMember("Михаил");
  const member5 = new GroupMember("Роман");
  const member6 = new GroupMember("Дарья");
  
  console.log("Члены группы:", member1.name, member2.name, member3.name, member4.name, member5.name, member6.name);
  //Задание 5
  function Student(name, proffesia, group, cours) {
    this.name = name;
    this.proffesia = proffesia;
    this.group = group;
    this.cours = cours;
  
    this.sayHi = function() {
      console.log(`Меня зовут ${this.name}, я учусь на специальности ${this.proffesia}, в группе ${this.group}, на ${this.cours} курсе`);
    };
  }
  
  const vasya = new Student("Даша", "Разработчик-Веб", "ИСП-310", "3");

  vasya.sayHi(); 

  