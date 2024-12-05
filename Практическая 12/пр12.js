//Задание 1
const arr1 = [1, 2, 3];
const arr2 = arr1.map(item => (item + 10) * 3);
console.log(arr2);
//Задание 2
const birthYears = [2000, 2004, 2006];
const currentYear = new Date().getFullYear();
const ages = birthYears.map(year => currentYear - year);
console.log(ages); 
//Задаание 3
const users = [
  { name: 'Dasha', age: 18, isAdmin: true },
  { name: 'Matvey', age: 19, isAdmin: false },
  { name: 'Veronika', age: 23, isAdmin: true },
  { name: 'Nastya', age: 20, isAdmin: false },
  { name: 'Roman', age: 18, isAdmin: false },
];
const admins = users.filter(user => user.isAdmin);
if (admins.length > 0) {
  console.log("Админитсратор сайта:");
  admins.forEach(admin => console.log(admin.name));
} else {
  console.log("Не Администратор сайта:");
}
//Задание 4 
const scores = [4, 5, 5, 3, 4]; 
const total = scores.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); 
const average = total / scores.length;
console.log("Средний балл студентов:", average);
//Задание 5
const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];
function mapForEach(arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(
      fn(arr[i])
    );
  }
  return newArray;
}
function convertLen(item) {
  return item.length <= 3 ? 0 : 1;
}
const OneArray = mapForEach(strArray, convertLen);
console.log(OneArray);