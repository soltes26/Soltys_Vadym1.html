console.log("------ Завдання 1 ------");

let integerNumber = 10;
let floatNumber = 5.5;
let text = "Hello";
let isStudent = true;

console.log(typeof integerNumber);
console.log(typeof floatNumber);
console.log(typeof text);
console.log(typeof isStudent);

integerNumber = "10";
floatNumber = false;
text = 100;
isStudent = "true";

console.log(typeof integerNumber);
console.log(typeof floatNumber);
console.log(typeof text);
console.log(typeof isStudent);

let concat = 5 + "5";
console.log("Конкатенація:", concat);

let boolNumber = Number(true);
console.log("true → число:", boolNumber);

let stringNumber = Number("20");
console.log("Рядок → число:", stringNumber);

let student = {
    name: "Ivan",
    age: 18,
    student: true,
    average: 4.3
};

console.log("JSON об'єкт:");
console.log(JSON.stringify(student));



console.log("------ Завдання 2 ------");

let a = Number(prompt("Введіть перше число"));
let b = Number(prompt("Введіть друге число"));
let c = Number(prompt("Введіть третє число"));

let average = (a + b + c) / 3;
console.log("Середнє арифметичне:", average);

console.log("Модуль числа:", Math.abs(a));
console.log("Округлення вверх:", Math.ceil(b));
console.log("Округлення вниз:", Math.floor(c));
console.log("Степінь:", Math.pow(a, 2));

console.log("a ділиться на 5:", a % 5 === 0);
console.log("b ділиться на 7:", b % 7 === 0);

if (a + b > c && a + c > b && b + c > a) {
    console.log("Трикутник може існувати");
} else {
    console.log("Трикутник не може існувати");
}




console.log("------ Завдання 3 ------");

let max = Math.max(a, b, c);
let min = Math.min(a, b, c);

console.log("Найбільше число:", max);
console.log("Найменше число:", min);

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    console.log("Хоча б одне число парне");
} else {
    console.log("Парних чисел немає");
}

let condition = (a > b && b < c);
console.log("Умова (a>b && b<c):", condition);

let number = Number(prompt("Введіть число для перевірки на просте"));

let isPrime = true;

if (number <= 1) {
    isPrime = false;
}

for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        isPrime = false;
        break;
    }
}

console.log("Число просте:", isPrime);



console.log("------ Завдання 4 ------");

let name = prompt("Введіть ваше ім'я");
let birthYear = Number(prompt("Введіть рік народження"));
let city = prompt("Введіть ваше місто");

let currentYear = 2026;
let age = currentYear - birthYear;

console.log("Ваш вік:", age);

if (age < 12) {
    console.log("Ви дитина");
}
else if (age < 18) {
    console.log("Ви підліток");
}
else if (age < 60) {
    console.log("Ви дорослий");
}
else {
    console.log("Ви літня людина");
}

let capital = "Київ";

if (city.toLowerCase() === capital.toLowerCase()) {
    console.log("Ви живете у столиці України");
}
else {
    console.log("Ви живете не у столиці");
}