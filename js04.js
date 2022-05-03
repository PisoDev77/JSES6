//Destructuring\
let data = ["a", "b", "c", "d"];
let myname= data[0]; //일반적
/*
let jisu = data[0]; //뽑아쓸 수도 있느데.
let jung = data[2];
*/
let [ji, ,jun] =data;
console.log(ji,jun);


let obj = {
    name: "영한",
    address: "KOREA",
    age: 30
}

let {name, age} = obj;
console.log(name, age);
let {name:mn, age:ma} = obj;
console.log(mn,ma);

var news = [
    {
        title:"aa",
        content:"conte1"
    },
    {
        title: "bb",
        content:   "conte2"     
    }
];

/*
let [,bb] = news;
let {title, content} = bb;
console.log(title, content);
*/
let [,{t, con}] = news;  //얘는 undefined
let [,{title, content}] = news;
console.log(title, content);