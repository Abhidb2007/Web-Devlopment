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

const user={
    name:"John",
    age:23,
    adress:{
        city:"New York",
        state:"NY"
    }
}
console.log(user["adress"]["city"]);
const adress=user.adress;


 const str="abhu";
 console.log(str.length);

const ans="abhu".slice(1,4);
console.log(ans);

const str="hellor abhu";
console.log(str.replace("abhu","java script"));

// split String
const name="i am angry boy";
const words=name.split("");
console.log(words);

// trimstring
const value ="   abhu   allu   ";
console.log("value.trim()");

// toupper Case
const value = "   abhu   bhu   ";
console.log(value.toUpperCase());

const value = "   Abhu   Bhu   ";
console.log(value.toLowerCase());

//parseInt //parseflaot
console.log(parseInt("234"));
console.log(parseInt("234.45px"));


 const slice="asdf";
 console.log(slice.slice(1,3));

 //push
 const initialArray =[1,2,3,4]
 initialArray.push(3);
 console.log(initialArray);

// pop
 const initialArray =[1,2,3,4]
 initialArray.shift(3);
 console.log(initialArray); 

 //shift
 const initialArray =[1,2,3,4]
 initialArray.unshift();
 console.log(initialArray);
 //unshift
 const initialArray =[1,2,3,4]
 initialArray.shift();
 console.log(initialArray);

 //concat
 const initialArray =[1,2,3,4]
 const secondaryArray=[5,6,7,6]
 console.log(initialArray.concat(secondaryArray));

 const initialArray =[1,2,3,4]
 const secondaryArray=[5,6,7,6]
 const finalArray=(initialArray.concat(secondaryArray));
 console.log(finalArray);

 const initialArray =[1,2,3,4]
 for (let i=0;i<initialArray.length;i++){
     console.log(initialArray[i]);
 }
 function logThing(str){
    console.log(str);
}
// [1,2,3,4]
initialArray.forEach(logThing);
logThing(1)
logThing(2)
logThing(3) 
 