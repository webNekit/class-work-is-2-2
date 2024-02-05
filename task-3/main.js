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