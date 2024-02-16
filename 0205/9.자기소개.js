// class 는 첫자를 대문자로 시작

class Human {
    // 생성될 때 호출되는 초기화 메서드
    constructor(name, age, keyword) {
        // 자기 자신을 가리키는 키워드 this
        this.name = name;
        this.age = age;
        this.keyword = keyword;

        // console.log("hello");
    }
    
    sayMyName() {
        console.log(`이름 : ${this.name}`);
        console.log(`나이 : ${this.age}`);
        console.log(`자기소개 : ${this.keyword}`);

    }
}

// const person1 = new Human("이온유");
// person1.sayMyName();

// const person2 = new Human("변성은");
// person2.sayMyName();

// const person3 = new Human("이자룡");
// person3.sayMyName();

const person1 = new Human("이온유", 30, "반갑습니다.");
person1.sayMyName();

const person2 = new Human("이자룡", 31, "반가워요.");
person2.sayMyName();