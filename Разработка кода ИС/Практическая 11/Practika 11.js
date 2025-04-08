// 1. Калькулятор со стрелочными функциями
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : 'Ошибка: деление на ноль';

// 2. Function Expression для проверки тестовых заданий
const checkTest = function(answer, correctAnswer) {
    return answer === correctAnswer;
};

// 3. Проверка фамилии на палиндром
const isPalindrome = (surname) => {
    const cleanSurname = surname.toLowerCase().replace(/\s/g, '');
    return cleanSurname === cleanSurname.split('').reverse().join('');
};

// 4. Среднее значение в массиве
const getAverage = (arr) => arr.reduce((sum, num) => sum + num, 0) / arr.length;

// 5. Количество дней до нового года
const daysUntilNewYear = () => {
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1, 0, 1);
    return Math.ceil((newYear - today) / (1000 * 60 * 60 * 24));
};

// 6. Пустая функция
const emptyFunction = () => undefined;

// 7. Функции для работы с массивом
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumArray = (arr) => arr.reduce((sum, num) => sum + num, 0);
const getEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);
const multiplyByTwo = (arr) => arr.map(num => num * 2);

console.log('Сложение: ', add(3, 0));
console.log('Проверка теста: ', checkTest(5, 5));
console.log('Палиндром "Иванов": ', isPalindrome('Иванов'));
console.log('Среднее значение: ', getAverage([1, 2, 3, 4, 5]));
console.log('Дней до нового года: ', daysUntilNewYear());
console.log('Пустая функция: ', emptyFunction());
console.log('Сумма массива: ', sumArray(numbers));
console.log('Четные числа: ', getEvenNumbers(numbers));
console.log('Умножение на 2: ', multiplyByTwo(numbers));