//Задание 1
const bankClient = {
    name: "Дарья",
    accountNumber: "123456789",
    balance: 2000,
    [Symbol("id")]: 1 
};

const clinicWorker = {
    name: "Ильгис",
    position: "Программист",
    experience: 6,
    [Symbol("id")]: 2 
};

const citizen = {
    name: "Настя",
    passportNumber: "1234 567890",
    age: 19,
    [Symbol("id")]: 3 
};
console.log("Клиент банка:", bankClient);
console.log("Работник клиники:", clinicWorker);
console.log("Гражданин РФ:", citizen);
console.log("Символ id клиента банка:", bankClient[Symbol.for("id")]);
console.log("Символ id работника клиники:", clinicWorker[Symbol.for("id")]);
console.log("Символ id гражданина РФ:", citizen[Symbol.for("id")]);
//Задание 2 
const number = +prompt('Загадайте цифру до 9', '');
switch (number) {
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
        alert('Вы ввели число 2');
        break;
    case 3:
        alert('Вы ввели число 3');
        break;
    case 4:
        alert('Вы ввели число 4');
        break;
    case 5:
        alert('Вы ввели число 5');
        break;
    case 6:
        alert('Вы ввели число 6');
        break;
    case 7:
        alert('Вы ввели число 7');
        break;
    case 8:
    case 9:
        alert('Вы ввели число 8, а может и 9');
        break;
    default:
        alert('Некорректный ввод');
}
//Задание 3
const min = 25; 
let quarter;
switch (true) {
  case (min >= 0 && min <= 14):
    quarter = "Первая четверть часа";
    break;
  case (min >= 15 && min <= 29):
    quarter = "Вторая четверть часа";
    break;
  case (min >= 30 && min <= 44):
    quarter = "Третья четверть часа";
    break;
  case (min >= 45 && min <= 59):
    quarter = "Четвертая четверть часа";
    break;
  default:
    quarter = "Некорректное значение";
}
console.log(`Минута ${min} попадает в ${quarter}`);
//Задание 4
const str = prompt("Введите строку с цифрами:", "");
const phoneNumber = "NumberHere"; 
if(str){ 
    let DigitMessage;
    switch (str.charAt(0)) {
        case '1':
        case '2':
        case '3':
            DigitMessage = 'Первая цифра 1, 2 или 3';
            break;
        default:
            DigitMessage = 'нет';
    }
    const phoneNumberInc = str.includes(phoneNumber);
    console.log(DigitMessage);
    console.log("Номер телефона включен:", phoneNumberInc);
} else {
    console.log("Строка пуста")
}