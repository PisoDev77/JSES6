function spreadOperator01(){
    //spread operator, 펼침연산자?

    let pre = ["a","b",2];

    //...이 spread operator

    let newData = [...pre];
    console.log(pre === newData);
    console.log(pre, newData);

    //... 그냥 펼쳐서 보여준다라고 생각하자 저안에 쓴다고 생각해라
}

function spreadOperator02(){
    let pre = [100,200,"hekk",null];
    let newData = [1,2,"INTERPRET",...pre,"ENDPOINT"]
    console.log(pre);
    console.log(newData);
    
    //개별 파라미터로 값 전달하기 좋다고?
    function sum(a,b,c){
        return a+b+c;
    }
    let arr = [2,3,4];
    //apply 쓸 수있어 ctxt 바꿔주면서 call이라는 메소드함꼐 
    console.log(
        "이전에는 sum.apply(null, arr)",
        sum.apply(null, arr),
        "  요즘은 |",
        sum(...pre)
    ); 
}

function spreadOperator03(){

}

//Array from
function addMark(){
    /*
    let newData = [];
    //arguments 인자값 보통 가변적 파라미터 권장하지는 않음
    for(let i=0; i<arguments.length; i++){
        newData.push(arguments[i] + "!");
    }
    */
   //arguments 가짜배열
   let newArray = Array.from(arguments);
   let newData = newArray.map(function(value){
        return value + "!";
   });

    console.log(newData);
}

addMark(1,2,3,4,5,6,7,8,9,10);