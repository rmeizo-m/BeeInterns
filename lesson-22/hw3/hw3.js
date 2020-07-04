// Задание 3
// Напишите функцию sum, которая работает так: sum(a)(b) возвращает a + b.

let sum = (a) => (b) => (a + b)
console.log(sum(1)(2));  // 3
console.log(sum(5)(-1)); // 4
