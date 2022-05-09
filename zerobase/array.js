const arr = ["id1", "id2", "id3", "id4", "id5"];

// 맨 뒤에 요소 추가
arr.push("id6");
// 맨 앞에 요소 추가
arr.unshift("id0");

console.log(arr);

console.log(
    arr.indexOf("id10"), // -1반환 없는 값
    arr.lastIndexOf("id4"), // 끝에서부터 탐섹
    arr.includes("id1"),
    arr.includes("id10")
);

// 맨 앞에 요소 제거
arr.shift();
// 맨 뒤에 요소 제거
arr.pop();

//특정 인덱스 요소 지우기
arr.splice(0,3);
console.log(arr);

//유사 배열 객체

function func(){
    console.log(Array.isArray(arguments));
    console.log(arguments);
    console.log([1,2].__proto__);
}

func(1,2,3,4,5);

// arguments 와 Nodelist 등이 유사배열객체이다.
// Array.from 을 쓰기위해 여까지 왔군