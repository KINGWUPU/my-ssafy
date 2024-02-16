// 객체의 스프레드
const square = {
    width:200,
    height:200
}

// color : 'red' 추가
const colorSquare = {
    // width:200,
    // height:200,
    ...square,
    color : 'red'
}

// 배열의 스프레드
const catTypeAnimals = ['고양이', '호랑이'];
const dogTypeAnimals = ['개', '늑대'];

const allTypeAnimals = [...catTypeAnimals, ...dogTypeAnimals, '비버']


