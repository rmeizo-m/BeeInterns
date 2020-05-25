// Задание 2. Написать функцию, возвращающую век, соответствующий данному году
// Использовать Глобальный объект Math

const year = 1905;
const year2 = 1700;

let centuryFromYear = arg => {
  return Math.ceil(arg/100);
}

console.log(centuryFromYear(year)); // 20
console.log(centuryFromYear(year2)); // 17
