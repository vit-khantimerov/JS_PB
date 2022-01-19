/* ДЗ 2. Задача 2

Напишите функцию `f` которая возвращает сумму всех параметров. 
Количество параметров может быть любым. 
Данная функция должна обязательно содержать проверку входных параметров, потому что принимать она может только числа.

```js
f(1,2,3); // 6
f(1,1,1,1,1,1,1,1); // 8
f(1,2,'s',4); // Error: all parameters type should be a Number
*/

//  Решение

function f(a) {
    let sum = 0;
    for (let i in arguments) {
        if (typeof(arguments[i]) === "number") {
            sum += arguments[i];
        } else {
            throw new Error('Error: all parameters type should be a Number'); // --- Проверить синтаксис.
            break;                                                            // --- Удалить?
        }
    }
    return sum;
}

console.log(f(1,2,3)); // 6
console.log(f(1,1,1,1,1,1,1,1)); // 8
console.log(f(1,2,'s',4)); // Error: all parameters type should be a Number


// Результат
// 6
// 8
// /home/HE080372KVG/JS-PB/HW 2/task 2 - 2.js:21
//             throw new Error('Error: all parameters type should be a Number'); // --- Проверить синтаксис.
//             ^

// Error: Error: all parameters type should be a Number