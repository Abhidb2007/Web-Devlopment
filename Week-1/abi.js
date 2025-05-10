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

//map,filter,find,sort,call back

const dog={
    name:"dogg",
    leg:4,
    tail:1,
};
const cat={
    name:"cat",
    leg:4,
    tail:1,
};  

function printstr(animal){
    console.log("animal"+animal["name"]+" "+animal["speaks"]);
}

console,log("animal"+dog["name"]+" "+dog["tail"]);
console.log("animal"+cat["name"]+" "+cat["leg"]);

class Animal{
    constructor(name,leg,tail){
        this.name=name;
        this.leg=leg;
        this.tail=tail;
    }
    speaks(){
        console.log("hi there"+this.name);
    }
    }
   
const currentDate=new Date();
console.log("Time in milliseconds since 1970:" currentDate.getTime());

const user={name:"abhu",age:23,city:"New York"};
console.log(user."name");
  const user={
    name:"abhi",
    age:34,
}
const finalString=JSON.stringfy(user)
console.log(finalString["name"]);

console.log(math.random);
let ans =1+2+3+4+5+6+7+8+9+10;
console.log(ans);
let ans=0;
for(let i=1;i<=10;i++){
    ans=ans+i;
}
console.log(ans);

function findSum(n){
    let ans=0;
    for(let i=1;i<n;i++){
        ans=ans+i;
    }
     return ans;   i
    
}

let ans=findSum(100);;
console.log(ans);

function sum(a,b){
    return(a+b);
}

//call back functions
function square(n){
    return n*n;

}
function sumOfSqures(a,b){
    const val1=square(a);
    const val2=square(b);
    return val1+val2;
}
console.log(sumOfSqures(1,3));

function cubes(n){
    return n*n*n;

}
function sumOfcubes(a,b){
    const val1=cubes(a);
    const val2=cubes(b);
    return val1+val2;
}
console.log(sumOfcubes(1,3));
 function sumOfSomething(a,b,fn){
    const val1=fun(a);
    const val2=fun(b);
    return val1+val2;
 }
 sumOfSomething(a,b,cubes);


 