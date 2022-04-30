/*
var list = document.querySelectorAll("li");
for(var i=0; i<list.length; i++){
    list[i].addEventListener("click", function(){
        console.log((i+1) + "번 째 리스트")
    });
}
*/

function letconstscope(){
    /*
    var list = document.querySelectorAll("li");
    for(var i=0; i<list.length; i++){
        list[i].addEventListener("click", function(){
            console.log((i+1) + "번 째 리스트")
        });
    }
    */
   //closure 상황
    var list = document.querySelectorAll("li");
    for(let i=0; i<list.length; i++){
        list[i].addEventListener("click", function(){
            console.log((i+1) + "번 째 리스트")
        });
    } 

    // const의 특성
    function home() {
        const list = ["a","b","c","d"];
        list.push("e");
    }
    
    home();


    //immutable array 속성이라는데 아직 이해 잘 안돼
    const list1 = [1,2,3,4,5];
    list2 = [].concat(list1, 6);
    console.log(list1);console.log(list2);
    console.log(list1 === list2);
}

function aboutString(){
    let str = "hello-spring";
    let matchstr1 = "hello";
    let matchstr2 = "spring";
    console.log(
        "STARTS:",
        "HELLO",
        str.startsWith(matchstr1),
        "SPRING",
        str.startsWith(matchstr2),
        "  ||  ENDS:",
        "HELLO",
        str.endsWith(matchstr1),
        "SPRING",
        str.endsWith(matchstr2),
    );
    console.log(
        "includes pr?   ",
        str.includes("pr"),
        " includes hello?   ",
        str.includes("hello"),
    );     
}

var data = [1,2,undefined,NaN,null,""];
console.log(data.length);
//for문

for(var i=0;i<data.length;i++){
    console.log(i);
    console.log(data[i]);
}


//forEach
data.forEach(function(value){
    console.log("VALUE: ",value);
});

//for in
for(let idx in data){
    console.log(data[idx]);
}

console.log(`
for in의 문제점은 상위의 추가된 값까지 
포함하여 결과를 보여줄 수 있음
자신의 객체뿐만아니라
`);

Array.prototype.getIndex = function(){};
for(let idx in data){
    console.log(data[idx]);
}

//for of 
console.log("얘는 상위것은 안하고 밸류대로 출력함");
Array.prototype.getIndex = function(){};
for(let val of data){
    console.log(val);
}
//문자단위도 됨
var str = "1234567 890 aaa";
for(let value of str){
    console.log(value);
}


