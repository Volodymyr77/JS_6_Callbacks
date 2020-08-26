let array = [
  1,
  54,
  7,
  8,
  96,
  52,
  12,
  3,
  0,
  -2,
  9,
  13,
  25,
  33,
  45,
  50,
  21,
  19,
  63,
  5,
];

// let sorted = array.sort((a, b) => {
//   console.log(a);
//   console.log(b);
//   console.log('---------------');
//   return a - b;
// });
// console.log(sorted);

// /// +++

// let sorted = array.sort((a, b) => a - b);
// console.log(sorted);

// let sorted = array.sort((a, b) => {
//   console.log(a);
//   console.log(b);
//   console.log('---------------');
//   return b - a;
// });
// console.log(sorted);

// let filtred = array.filter(value => {
//   return value % 3 === 0;
// });
// console.log(filtred);

// let filtred = array.filter(value => {
//   return value % 10 === 0;
// });
// console.log(filtred);

// array.forEach(value => {
//   console.log(value);
// });

// let map = array.map((value, index) => {
//   return value * 3;
// });
// console.log(map);

// let words = [
//   'this',
//   'course',
//   'is',
//   'an',
//   'intensive',
//   'introduction',
//   'to',
//   'the',
//   'intellectual',
//   'enterprises',
//   'of',
//   'computer',
//   'science',
//   'and',
//   'the',
//   'art',
//   'of',
//   'programming',
//   'moving',
//   'course',
// ];
// let sortedText = words.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   }
//   return 1;
// });
// console.log(sortedText);

// let sortedText = words.sort((a, b) => {
//   if (a < b) {
//     return 1;
//   }
//   return -1;
// });
// console.log(sortedText);

// with four letters

// let fourLetter = words.filter(word => word.length < 5);
// console.log(fourLetter);

// map !!!

// let newWords = words.map((value, index) => { return value;};);
// console.log(newWords);

//  with +!
// let newWords = words.map(name => {
//   return name + '!';
// });

// console.log(newWords);

//  array foreach

let users = [
  { name: 'vasyl', age: 31, status: false },
  { name: 'petronas', age: 30, status: true },
  { name: 'mykola', age: 29, status: true },
  { name: 'olha', age: 28, status: false },
];
// let sorted = users.sort((user1, user2) => user1.age - user2.age);
// console.log(sorted);
// let sortedUp = users.sort((user1, user2) => user2.age - user1.age);
// console.log(sortedUp);

// let nameLenght = users.sort(
//   (user1, user2) => user1.name.length - user2.name.length,
// );
// console.log(nameLenght);

// let nameLenghtBack = users.sort(
//   (user2, user1) => user1.name.length - user2.name.length,
// );
// console.log(nameLenghtBack);

//

// let arrayId = users.map((value, id) => {
//   value.id = id + 1;
//   return value;
// });
// console.log(arrayId);

//  try to add id

// let idUsers = users.map((value, index) => {
//   return { name: value, id: index + 1 };
// });
// console.log(idUsers);

// let idUsers = users.map((user, id) => {
//   user.id = id + 1;
//   return user;
// });
// console.log(idUsers);

// calculate 2

// function calculate(a, b, callback) {
//   console.log(callback(a, b));
// }
// calculate(12, 5, function (a, b) {
//   return a + b;
// });

// // calculate 3

// calculate(11, 22, function (a, b) {
//   return a * b - a;
// });

// cars

let cars = [
  {
    producer: 'subaru',
    model: 'wrx',
    year: 2010,
    color: 'blue',
    type: 'sedan',
    engine: 'ej204x',
    volume: 2,
    power: 400,
  },
  {
    producer: 'subaru',
    model: 'legacy',
    year: 2007,
    color: 'silver',
    type: 'sedan',
    engine: 'ez30',
    volume: 3,
    power: 250,
  },
  {
    producer: 'subaru',
    model: 'tribeca',
    year: 2011,
    color: 'white',
    type: 'jeep',
    engine: 'ej20',
    volume: 2,
    power: 300,
  },
  {
    producer: 'subaru',
    model: 'leone',
    year: 1998,
    color: 'yellow',
    type: 'sedan',
    engine: 'ez20x',
    volume: 2,
    power: 140,
  },
  {
    producer: 'subaru',
    model: 'impreza',
    year: 2014,
    color: 'red',
    type: 'sedan',
    engine: 'ej204x',
    volume: 2,
    power: 200,
  },
  {
    producer: 'subaru',
    model: 'outback',
    year: 2014,
    color: 'red',
    type: 'hachback',
    engine: 'ej204',
    volume: 2,
    power: 165,
  },
  {
    producer: 'bmw',
    model: '115',
    year: 2013,
    color: 'red',
    type: 'hachback',
    engine: 'f15',
    volume: 1.5,
    power: 120,
  },
  {
    producer: 'bmw',
    model: '315',
    year: 2010,
    color: 'white',
    type: 'sedan',
    engine: 'f15',
    volume: 1.5,
    power: 120,
  },
  {
    producer: 'bmw',
    model: '650',
    year: 2009,
    color: 'black',
    type: 'coupe',
    engine: 'f60',
    volume: 6,
    power: 350,
  },
  {
    producer: 'bmw',
    model: '320',
    year: 2012,
    color: 'red',
    type: 'sedan',
    engine: 'f20',
    volume: 2,
    power: 180,
  },
  {
    producer: 'mercedes',
    model: 'e200',
    year: 1990,
    color: 'silver',
    type: 'sedan',
    engine: 'eng200',
    volume: 2,
    power: 180,
  },
  {
    producer: 'mercedes',
    model: 'e63',
    year: 2017,
    color: 'yellow',
    type: 'sedan',
    engine: 'amg63',
    volume: 3,
    power: 400,
  },
  {
    producer: 'mercedes',
    model: 'c250',
    year: 2017,
    color: 'red',
    type: 'sedan',
    engine: 'eng25',
    volume: 2.5,
    power: 230,
  },
];

// let filtred = cars.filter(function (car) {
//   return car.volume > 3;
// });
// console.log(filtred);

//  or

// let filtred = cars.filter(car => {
//   return car.volume > 3;
// });
// console.log(filtred);

// 2L

// let filtred = cars.filter(car => {
//   return car.volume === 2;
// });
// console.log(filtred);

// let filtred = cars.filter(car => {
//   return car.producer === 'mercedes';
// });
// console.log(filtred);

// let filtred = cars.filter(car => {
//   return car.volume > 3 && car.producer === 'mercedes';
// });
// console.log(filtred);

// let filtred = cars.filter(car => {
//   return car.volume > 3 && car.producer === 'subaru';
// });
// console.log(filtred);

// let filtred = cars.filter(car => {
//   return car.power > 300;
// });
// console.log(filtred);

// let filtred = cars.filter(car => {
//   return car.power > 300 && car.producer === 'subaru';
// });
// console.log(filtred);

// let filtred = cars.map(car => {
//   return car.engine.toLowerCase().startsWith(`ej*`);
// });
// console.log(filtred);

// let filtred = cars.map(car => {
//   return (
//     car.power > 200 &&
//     car.producer === 'subaru' &&
//     car.engine.toLowerCase().startsWith(`ej`)
//   );
// });
// console.log(filtred);

// let filtred = cars.filter(car => {
//   return car.volume > 3 && car.producer === 'mercedes';
// });
// console.log(filtred);

// let filtred = cars.filter(car => {
//   return car.volume > 2 && car.power > 250;
// });
// console.log(filtred);

// let filtred = cars.filter(car => {
//   return car.power > 250 && car.producer === 'bmw';
// });
// console.log(filtred);

// users ID

let usersWithAddress = [
  {
    id: 1,
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', street: 'Shevchenko', number: 16 },
  },
  {
    id: 2,
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'Lviv', street: 'Shevchenko', number: 1 },
  },
  {
    id: 3,
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Lviv', street: 'Shevchenko', number: 121 },
  },
  {
    id: 4,
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Lviv', street: 'Shevchenko', number: 90 },
  },
  {
    id: 5,
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Lviv', street: 'Shevchenko', number: 115 },
  },
  {
    id: 6,
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Lviv', street: 'Shevchenko', number: 2 },
  },
  {
    id: 7,
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Lviv', street: 'Shevchenko', number: 22 },
  },
  {
    id: 8,
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Lviv', street: 'Shevchenko', number: 43 },
  },
  {
    id: 9,
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Lviv', street: 'Shevchenko', number: 12 },
  },
  {
    id: 10,
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Lviv', street: 'Shevchenko', number: 16 },
  },
  {
    id: 11,
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Lviv', street: 'Shevchenko', number: 121 },
  },
];

// let sorted = usersWithAddress.sort((a, b) => {
//   return a.id - b.id;
// });
// console.log(sorted);

// let sorted = usersWithAddress.sort((a, b) => {
//   return b.id - a.id;
// });
// console.log(sorted);

// let sorted = usersWithAddress.sort((a, b) => {
//   return a.age - b.age;
// });
// console.log(sorted);

// let sorted = usersWithAddress.sort((a, b) => {
//   return b.age - a.age;
// });
// console.log(sorted);

// let arrayId = users.map((value, id) => {
//   value.id = id + 1;
//   return value;
// });
// console.log(arrayId);

// adress number sort

// let sorted = usersWithAddress.sort((a, b) => {
//   return b.address.number - a.address.number;
// });
// console.log(sorted);

// let sorted = usersWithAddress.sort((a, b) => {
//   return a.address.number > b.address.number ? 1 : -1;
// });
// console.log(sorted);

let sorted = usersWithAddress.sort((a, b) => {
  return b.name < a.name ? 1 : -1;
});

console.log(sorted);

// age

// let sorted = usersWithAddress.sort((a, b) => {
//   return b.age - a.age;
// });
// console.log(sorted);
