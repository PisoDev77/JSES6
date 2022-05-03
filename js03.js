function print(){
    const list = document.querySelectorAll("li");
    //toString.call(list) 타입확인하는 법 typeof listAr ray

    var listArray = Array.from(list);
    console.log(listArray);

    let eArray = listArray.filter(function(v){
        return v.innerText.includes("e");
    });

    console.log(eArray);
}

print();

function getObj(){
    let name = "young";
    const getName = function(){
        return name;
    }
    const setName = function(newname){
        name = newname;
    }
    
    const printName = function(){
        console.log(name);
    }
    return {getName,setName}
}

var obj = getObj();
console.log(obj.getName());
obj.setName("crong");
console.log(obj.getName());