// Array.forEach
// [1,2,3].forEach (콜백함수)
// 원소의 개수만큼 콜백함수가 실행된다.
// function aa () {}

// break, return이 적용되지 않는다.
// [3, 5, 4, 2].forEach((value) => {
//     console.log(value);
// })

// 실습
let pplus = [];
let mminus = [];

[-5,3,4,2,-7,-2,7].forEach((value) => {
    if (value > 0) {
        pplus.push(value);
    } else {
        mminus.push(value);
    }
})

console.log(pplus);
console.log(mminus);

// some, every
// some은 한 가지만 만족해도 true 리턴
// every는 모두 만족해야 true 리턴
const array = [1,2,3,4,5];

// {return el>0}
array.every(el => el > 0); // true
array.every(el => el > 4); // false
array.some(el => el > 0); // true

// find 
// 특정 요소를 찾아준다
const inventory = [
    {name:"A", count:1}, 
    {name:"B", count:2},
    {name:"C", count:3}
];

// find -> 특정 조건을 만족하는 '첫번째' 값
inventory.find(el => el.name === "B");
// findIndex -> 특정 조건을 만족하는 첫번째 케이스
inventory.findIndex(el => el.name === "B");

// [실습]
const chicken = [
    {name:"머리",quantity:1},
    {name:"날개",quantity:2},
    {name:"닭다리",quantity:2},
    {name:"닭가슴살",quantity:1},
    {name:"닭발",quantity:2},
];
console.log(chicken.find(el => el.name === "닭다리"));
console.log(chicken.findIndex(el => el.name === "닭다리"));



















