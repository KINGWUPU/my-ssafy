const a=2;
const b=4;

let calc = {
    add : function (x, y){
        return x+y;
    },
    
    minus : function (x, y){
        return x-y;
    },
    
    mul : function (x, y){
        return x*y;
    },
    
    div: function (x, y){
        return x/y;
    },
}

console.log("주어진 수 : ", a, b);
console.log("덧셈 결과 : ", calc.add(a,b));
console.log("뺄셈 결과 : ", calc.minus(a,b));
console.log("곱셈 결과 : ", calc.mul(a,b));
console.log("나눗셈 결과 : ", calc.div(a,b));


