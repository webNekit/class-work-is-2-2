// let students = [ ["Андрей", "Анатолий", "Алексей"], ["Андрей", "Анатолий", "Алексей"] ];
// students[1][3] = "Степан";
// console.log(students[0][0]);


// const person = {
//     name: "Андрей",
//     age: 29,
//     hobbies: ["Кушать", "Спать", "Слово пацана"],
//     contacts: {
//         phone: [88005553255, 88005553255],
//         email: ["andrey@example.com", "andrey2@example.com"],
//         social: ["www.github.com", "www.vk.com"]
//     }
// };


// console.log(`Имя - ${person["name"]}. Возраст - ${person["age"]}`);
// console.log(`Его любимое занятие - ${person["hobbies"][1]}`);
// console.log(person["contacts"]["email"][1]);

const students = [
    {name: "Андрей", age: 17, serial: 11111, group: "ИС-2-2"},
    {name: "Иван", age: 18, serial: 11111, group: "ИС-2-2"},
    {name: "Стас", age: 19, serial: 11111, group: "ИС-2-2"},
    {name: "Гена", age: 17, serial: 11111, group: "ИС-2-2"},
    {name: "Люда", age: 16, serial: 11111, group: "ИС-2-2"},
    {name: "Павел", age: 20, serial: 11111, group: "ИС-2-2"},
];

let stundentIndex = 3;
let studentName = students[stundentIndex]["name"];
let studentAge = students[stundentIndex]["age"];

if ( studentAge < 18 ) {
    console.log(`Студенту ${studentName} меньше 18 лет.`);
} else {
    console.log(`Студенту ${studentName} больше 18 лет. Ему ${studentAge} лет.`);
}