// 생성자가 없는 경우 상속
class Hero{
    constructor() {
        this.hp = 100;
    }
    run(){
        this.hp = this.hp - 10;
    }
}

// 상속받을 경우 Hero의 모든 기능 사용 가능
class Superman extends Hero{
    fly(){
        console.log("fly");
        console.log(this.hp);
    }
}

const superman = new Superman();
superman.run(); // 상속 받은 내용이기에 바로 사용 가능하다.



// 생성자에 인자가 있는 경우 상속
class Animal {
    constructor(name) {
        this.name = name;

    }
    speak() {
        console.log(`${this.name}이 울부짖습니다`);

    }
}

class Cat extends Animal {
    constructor(name) {
        // Animal에 constructor 안에 name을 넣어줘야 한다
        // 이 때 사용하는 키워드가 super라는 키워드가 존재한다.
        // 부모 생성자를 실행할 때 사용한다.
        super(name);
    }
    walk(){
        // 부모 클래스에 정의된 메서드 호출
        super.speak();
        console.log("걷습니다.");
    }
}

const cat = new Cat("호랑이");
cat.walk();