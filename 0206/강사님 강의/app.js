// axios 사용법 (암기!)
// 1. then ~ catch 방식
// let data;

// 성공시 then으로 넘어감
// axios
//   .get("https://jsonplaceholder.typicode.com/todos/")
//   .then((response) => {
//     // 구현 로직
//     console.log(response.data)    
//   })
//   .catch((error) => console.log(error));

// console.log(data); // 여기선 왜 undefined가 출력되는가?
// 자바스크립트는 늦을거 같으면 자기가 생략한다....

// 2. async ~ await 방식
async function fetchTodos() {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos/"
        ); // 시간이 오래걸려서 스킵됨
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

fetchTodos();

// 그래서 비동기 왜쓴다고?
// 서버에서 데이터 받아올 때, 데이터는 서버에 있으니까 느리다.
// js는 비동기 방식 사용, 우리는 이것을 제어하고 싶어함
// 그래서 위와 같은 방법을 사용하는 것이다.