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

let str = "hello-spring-younghankim";
let matchstr1 = "hello";
let matchstr2 = "spring";
console.log(
    "HELLO",
    str.startsWith(matchstr1),
    "SPRING",
    str.startsWith(matchstr2)
);


