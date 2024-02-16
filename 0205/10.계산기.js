class Calculator {

    constructor() {
        this.result = 0;
    }

    add(number){
        this.result += number;
        return this;
    }

    subtract(number){
        this.result -= number;
        return this;
    }

    multiply(number){
        this.number += number;
        return this;
    }
    getResult() {
        return this.result;
    }
}

const calculator = new Calculator();

// 연달아서 사용가능!
const result = calculator
    .add(5)
    .subtract(5)
    .multiply(10)
    .add(2)
    .getResult();

