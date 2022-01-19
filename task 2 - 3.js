/* ДЗ 2. Задача 3

Сделайте функцию `f`, которая отнимает от первого числа второе и делит на третье. 
Данная функция должна обьязательно содержать проверку входных параметров, потому что принимать она может только числа.

```js
f(9,3,2); // 3
f('s',9,3) // Error: all parameters type should be a Number
*/

//  Решение

function f(a, b, c) {
    if (typeof(a) === "number" && typeof(b) === "number" && typeof(c) === "number") {
        return (a - b) / c;
    } else {
        throw new Error('Error: all parameters type should be a Number'); // --- Проверить синтаксис.
    }
}

console.log(f(9,3,2));
console.log(f('s',9,3));

// Результат

// 3
// /home/HE080372KVG/JS-PB/HW 2/task 2 - 3.js:17
//         throw new Error('Error: all parameters type should be a Number'); // --- Проверить синтаксис.
//         ^

// Error: Error: all parameters type should be a Number
