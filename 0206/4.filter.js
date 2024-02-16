// const datas = [3,5,4,2];

// const filterDatas = datas.filter(data => {
//     if(data>3){
//         return data;
//     }
// });

// [실습]
const bucketList = [
    {
        id:1,
        text:"여행 가기",
        done:false,
    },
    {
        id:2,
        text:"치킨 먹기",
        done:true,
    },
    {
        id:3,
        text:"코딩 하기",
        done:true,
    },
    {
        id:4,
        text:"요리 하기",
        done:false,
    },
];

const filterDatas = bucketList.filter((data) => data.done === false);
const filterDatas2 = bucketList.filter((data) => !data.done);
console.log(filterDatas);
console.log(filterDatas2);