let input = [1,2,3,4];
let output = [];
let cnt = 0;

//with for
function combinationwithfor(arr){
    for(let i = 0 ; i < arr.length ; i++ ){
        for(let j = i + 1 ; j < arr.length ; j++){
            cnt++;
            console.log(arr[i], arr[j]);
        }
    }
}

combinationwithfor(input);

console.log("combinationwithfor: ",input);
console.log("combinationwithfor: ",cnt);


//with circulation
//arr === input data === output s === startPos idx===curPos r === 횟수
cnt = 0;
function combinationwithcir(arr, data, s, idx, r){
    if(s === r){
        cnt++;
        console.log(data);
        return;
    }
    
    for(let i = idx ; arr.length - i >= r - s ; i++){
        data[s] = arr[i];
        combinationwithcir(arr, data, s+1, i+1, r);
    }
}


combinationwithcir(input,output,0,0,2);

console.log("combinationwithcir: ",input);
console.log("combinationwithcir: ",cnt);