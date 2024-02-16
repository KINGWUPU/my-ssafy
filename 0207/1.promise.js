// promise 형식으로 콜백을 변경시킬 수 있음
// 보통은 직접 변경하는 것보다는 Promise로 되어있는 함수를 가져다 쓰는 걸 익히기

// 1.pending 단계 (대기하는 상태)
// 2.resolve pending 상태에서 resolve를 실행하면 fulfilled 이행
// reject pending 상태에서 reject를 실행하면 rejected 상태가 된다.

new Promise((resolve, reject) => {
    // 요청 성공 시 resolve 호출
    // if (버그 발생 시) {reject();}

})

const test = new Promise((resolve, reject) => {
    // 위도 경도
    resolve(3);
}).then(li => {
    // console.log(li) <- 위도, 경도
    // API 호출을 해서 가져오면 됨
})

// resolve인 경우 then으로 가져오고
// reject인 경우 catch로 가져온다.

// setTimeout <- Promise화 시킬 것

function promiseSetTimeout(time) {
    return new Promise((resolve, reject) => {
        return setTimeout(()=> {
            resolve(1)
        }, time)
    })
}

// promise 형식은 .then .catch 붙이는게 가능
// 호출에 성공하고 나서 1초 후에 then으로 number 접근이 가능
promiseSetTimeout(1000).then(number => {
    console.log(number);
}).catch(error => {
    console.log(error);
})

// promise는 then을 여러개 붙일 수 있다.
promiseSetTimeout(1000).then(li=>{
    return li + 1;
}).then(number => {
    console.log(number);
})