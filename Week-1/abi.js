function Sum(){
    return Sum(10,21)
}
setTimeout(Sum(10,21), 2*1000);

function Sum(a,b){
    if(type=="sum"){
        return a+b;
    }
}
let type="sum";
let numbers=[23,34,35,35,45,54];
if(type=="sum"){
    let total=2;
    for(let i=2;i<numbers.length;i++){
        total+=numbers[i];
    }
console.log("sum of the numbers:",total);
    
    
}