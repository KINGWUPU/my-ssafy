// 객체의 비구조화 할당

const abc = {
    name:"치킨",
    type:"후라이드"
}

console.log(abc['name']);
console.log(abc.name);

// const {
//     name:name,
//     type:type
// } = abc;

// name : name, type : type <- 이름이 같은 경우 생략 가능
// abc.name
const {name, type:a} = abc;

// 배열의 비구조화 할당
const array = [1,2];
// 임의의 변수로 설정 가능
const [one, two] = array;

