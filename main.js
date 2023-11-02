///start-work///
'use strict'

///-1-//

//Создать объект myBrowser со свойствами name (значение “Chrome”) и version (значение «9.2»)

// - двумя способами//
//способ - 1 ///
//
// let myBrowser = {
//     name:"Chrome",
//     version:9.2
// };

//способ-2//

// let myBrowser=new Object({name:"Chrome",version:9.2});//

//Создать объект cinema со свойствами soldTickets (хранит в себе число, которое отображает кол-во проданных билетов)
// и ticketCost (цена билета) и задайте значения. Напишите функцию которая высчитывает сколько денег заработал кинотеатр за//
// const cinema={
//     soldTickets:100,
//     ticketCost:50
// };
// function reverse(cinema){
//     return cinema.soldTickets*cinema.ticketCost
// }
// const Summa=reverse(cinema);
// console.log(Summa)//5000
//-3-//

//Напишите функцию, которая принимает в качестве аргумента объект и возвращает вложенный массив вида
// [[key, value], [key, value]]. То есть, если я вызову функцию objectToArr({ a: 1, b: 2 }),
// то результатом выполнения должен быть массив - [['a', 1], ['b', 2]]. Для решения этой задачи вам нужны будут следующие методы:
// Object.keys() или Object.entries()//

// function objectToArr(obj) {
//     return Object.entries(obj);
// }
//
// const result = objectToArr({ a: 1, b: 2 });
// console.log(result)

///-4-//
// Дан объект. Нужно извлечь число 123 одной строкой//
// const myCrazyObject={
//     someArray:[7,9,{purpose:"путница",number:123},3.3]
// }
// const myNumber = myCrazyObject.someArray[2].number;
// console.log(myNumber)
//
//-5-//
//Напишите функцию, которая проверяет, является ли элемент именно простым объектом,
// а не массивом, null и т.п. Тут вам пригодится метод Array.isArray()//

// function checkinDataTypes(obj) {
//     return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
// }
// checkinDataTypes()

//-6//

//Дан массив из имен например ['john', 'jane', 'kate', 'peter'].
// Вывести новый массив в котором каждая первая буква элемента будет с большой буквы.//
// const names = ['john', 'jane', 'kate', 'peter'];
// const biGNames = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
// console.log(biGNames)

//-7-//
//Сумма диапазона. Напишите функцию range, принимающую два аргумента, начало и конец диапазона, и возвращающую массив,
// который содержит все числа из него, включая начальное и конечное. Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму.
// Запустите указанную выше инструкцию и убедитесь, что она возвращает сумму значений массива.//
// function range(start, end) {
//     let numbers = [];
//     for (let i = start; i <= end; i++) {
//         numbers.push(i);
//     }
//     return numbers;
// }
//
// function sum(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// }
//
// let start = 1;
// let end = 10;
// let numbers = range(start, end);
// let sumOfNumbers = sum(numbers);
//
// console.log("Диапазон чисел:", numbers);
// console.log("Сумма чисел:", sumOfNumbers);

//-8-//
//Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления
// в объект с ключами 'floor' и 'ceil'. Можете все оформить в функцию, которая на входе будет принимать число и на выходе отдавать объект
let result;
    function calculate(number){
        const square=Math.sqrt(number);
        const floor=Math.floor(square);
        const ceil=Math.ceil(square);
        result={
            floor:floor,
            ceil:ceil
        }
        return result;
    }
    const resultSquare = calculate(587)
console.log(resultSquare) 

//-9--//
//Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'.
// С помощью цикла for-in выведите на экран строки такого формата:
// 'Минск - это Беларусь.'. Для работы понадобится for...in//
// let obj = {
//     'Минск': 'Беларусь',
//     'Москва': 'Россия',
//     'Киев': 'Украина',
//     'бишкек':'Кыргыстан'
//
// };
//
// for (let key in obj) {
//     console.log(`${key} - это ${obj[key]}.`);
// }
