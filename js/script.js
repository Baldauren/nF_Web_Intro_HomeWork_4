// Перепишите функцию, используя оператор '?' или '||'----------------------------------------------------------
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
  return age > 18 ? true : confirm("Родители разрешили?");
}
console.log(checkAge(18));

// function checkAge(age) {
//   return age > 18 || confirm("Родители разрешили?");
// }
// console.log(checkAge(18));

//* Функция pow(x,n)-------------------------------------------------------------------------

// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
console.log(pow(3, 3));

//* Перепишите с использованием функции-стрелки--------------------------------------------------

// Замените код Function Expression стрелочной функцией:
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);

// Сортировать в порядке по убыванию

let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert(arr); // 8, 5, 2, 1, -10
console.log(arr);

// Трансформировать в массив имён----------------------------------------------------------------------

// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

let vasya1 = { name: "Вася", age: 25 };
let petya1 = { name: "Петя", age: 30 };
let masha1 = { name: "Маша", age: 28 };

let users = [vasya1, petya1, masha1];

let names = users.map((item) => item.name);

alert(names);

//Трансформировать в объекты---------------------------------------------------------------------------

//У вас есть массив объектов `user`, и у каждого из объектов есть `name`, `surname` и `id`.
//Напишите код, который создаст ещё один массив объектов с параметрами `id` и `fullName`, где `fullName` – состоит из `name` и `surname`.

let vasya2 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya2 = { name: "Петя", surname: "Иванов", id: 2 };
let masha2 = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [vasya2, petya2, masha2];

let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 },
];

alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // Вася Пупкин

// Получить средний возраст----------------------------------------------------------

let vasya3 = { name: "Вася", age: 25 };
let petya3 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 29 };

let arr1 = [vasya3, petya3, masha3];

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

alert(getAverageAge(arr1)); // (25 + 30 + 29) / 3 = 28
