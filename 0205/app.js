class Person {
    constructor(name, hp) {
        // 프로토타입
        // 없는데 배정하면 생긴다...
        this.name = name;
        this.hp = hp;
    }
    
    hello() {
        console.log(this.name);
    }


}

class Avengers extends Person {
    constructor(name, hp, power, skill) {
        // 상속 받아서 쓰겠다는 의미 -> super
        super(name, hp);
        this.power = power;
        this.skill = skill;
    }
    information() {
        console.log(this.name, this.hp, this.power, this.skill);
    }
    fly() {
        console.log("비행중");
    }
}
// 해당 정보를 통해 클래스 유출하기
// 인스턴스 생성 (객체 생성)
// 클래스는 무조건 대문자!
// 객체 지향은 실행부만 알아도 실행할 수 있어야 한다.
const ironMan = new Avengers('아이언맨', 100, 100, "미사일"); 
ironMan.information();
ironMan.fly();