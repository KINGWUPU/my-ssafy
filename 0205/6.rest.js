// 나머지를 가져온다
// rest 

const chicken ={
    type:"양념",
    drumsticks: 2,
    wing:2
}

// rest 문법
const {type, ...another} = chicken;

function hello(...rest) {
    console.log(rest);
}

hello(1,2,3,4,5,6,7,);

const numberArray = [0,1,2,3,4,5,6];
const [one, two, ...other] = numberArray;