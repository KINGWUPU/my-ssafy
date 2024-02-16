// [도전]

const arr = [1,2,3,4,5,6,7,8,9,10];
const arr_f = arr.filter((data) => data % 2 ===0);
const newArr1 = arr_f.map((data) => data * 10);
console.log(newArr1);

const arr2 = [1,2,3,4,5,6,7,8,9,10];
const newArr2 = arr2.reduce((acc, cur) => {
    if (cur % 2 === 0) {
        acc.push(cur * 10);
    }
    return acc;
}, [])
console.log(newArr2);