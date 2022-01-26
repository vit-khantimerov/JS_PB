let arr = Array.of(7, 8);
console.log('Array.of(7, 8) >> ' + arr);

/************************/
let arr2 = Array.from('content');
console.log('Array.from(\'content\') >> ' + arr2);

/************************/
let arr3 = [1,2,3];
arr3.fill(6);
console.log('arr3.fill(6) >> ' + arr3);

/************************/
let arr4 = [1,2,3,4];
arr4.copyWithin(1,3);
        // arr.copyWithin(target, start, end) – копирует свои элементы, 
        // начиная со start и заканчивая end, в собственную позицию target (перезаписывает существующие).
console.log('arr4.copyWithin(1,3) >> ' + arr4); // 1,4,3,4
let arr5 = [1,2,3,4,5,6,7,8,9,10];
arr5.copyWithin(0,5,10);
console.log('arr5.copyWithin(1,4,8) >> ' + arr5); // 6,7,8,9,10,6,7,8,9,10

/************************/
var s = [1, 2, 3];
var d = s.flatMap(function (item, i) {
    return [[item * i]];
});
console.log('s.flatMap(function(item) >> ' + d);  
console.log(d);
// s.flatMap(function(item) >> 0,2,6
// [ [ 0 ], [ 2 ], [ 6 ] ]


if (Array.flatMap) {
    var mas = [1, 2, 3, 4, 5, ['5.1', '5.2']];
    var arr = mas.flatMap(function (e) { return a + '#'; });
    console.log(arr);
} else {
    console.log("Ваш браузер не підтримує метод flatMap");
}
  

/************************/
var a = [1,-1,2,-2,3,-3];
var p = a.filter(function(item){
    // return > 0;
});
console.log('a.filter(function(item) >> ' + p); 

console.log(
[1, 3, 5, 2, 4].filter((v, i, arr) => {
    return v > 2;
 })
);


/* 
Сегодня на уроке когда писал свою реализацию map то он получился мутирующий, должно было быть что то типа такого

Array.prototype.myMap = function (callback) {
let arr = [];
    for (let i = 0; i < this.length; i++) { 
        arr.push(callback(this[i],i, this));
    }
    return arr;
}

let arr = [5,2,6];
let transformed = arr.myMap((item) => item * 2);
console.log(`arr: ${arr}`);
console.log(`transformed: ${transformed}`);
*/ 
