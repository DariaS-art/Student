//Задание 1
let bankId = Symbol("bankId");
let clinicId = Symbol("clinicId");
let citizenId = Symbol("citizenId");

let bankClient = {
    name: "Дарья",
    [bankId]: "BK12345",
    balance: 100000,
    accountType: "Премиум"
};

let clinicEmployee = {
    name: "Иван",
    [clinicId]: "CL98765",
    specialty: "Хирург",
    experience: 5
};

let citizen = {
    name: "Сергей",
    [citizenId]: "RF54321",
    passport: "4509 123456",
    birthDate: "01.01.1990"
};

console.log("Клиент банка:");
for (let prop in bankClient) {
    console.log(prop + ": " + bankClient[prop]);
}
console.log("Символьное свойство:", bankClient[bankId]);

console.log("\nРаботник клиники:");
for (let prop in clinicEmployee) {
    console.log(prop + ": " + clinicEmployee[prop]);
}
console.log("Символьное свойство:", clinicEmployee[clinicId]);

console.log("\nГражданин РФ:");
for (let prop in citizen) {
    console.log(prop + ": " + citizen[prop]);
}
console.log("Символьное свойство:", citizen[citizenId]);

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
        alert('Вы ввели другое число');
}

//Задание 3
let min = 30; 

switch (true) {
    case (min >= 0 && min < 15):
        console.log('Первая четверть');
        break;
    case (min >= 15 && min < 30):
        console.log('Вторая четверть');
        break;
    case (min >= 30 && min < 45):
        console.log('Третья четверть');
        break;
    case (min >= 45 && min < 60):
        console.log('Четвертая четверть');
        break;
    default:
        console.log('Некорректное значение минут');
}

//Задание 4
const str = prompt("Введите строку с цифрами:", "");
const phoneNumber = "123456789"; // Ваш номер телефона

if (str) {
    let digitMessage;
    const firstChar = str.charAt(0);
    
    switch (firstChar) {
        case '1':
        case '2':
        case '3':
            digitMessage = 'Первая цифра 1, 2 или 3';
            break;
        default:
            digitMessage = 'нет';
    }

    const phoneNumberIncluded = str.includes(phoneNumber);
    console.log(digitMessage);
    console.log("Номер телефона найден в строке:", phoneNumberIncluded);
} else {
    console.log("Строка пуста");
}