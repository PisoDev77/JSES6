// Execution Context


/*
    1. 전역 객체 생성
    2. 변수 생성
    3. 변수는 undefined로 초기화
     이는 var라는 변수 선언시에 적용된다.

     const나 let으로 선언시 script scope에 
     변수가 선언된다.

     함수가 함수 호출시 
     함수 단위로 콜 스택에 
     실행컨텍스트가 쌓이며
     반복된다.
*/
var name = "zero";

function second(){
    console.log("Second Func Call");
}

function first() {
    console.log(this.name);
    console.log(name);
}