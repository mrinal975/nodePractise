//destructuring object 
const person = {
    name:'Mrinal',
    sex:'M',
    age:26
};

const personName = ({name, age})=>{
    return name +' age '+age;
}

console.log(personName(person));

//destructuring array

array = [1,2,3,4,5];

const [arr1,arr2]=array;

console.log(arr1, arr2);

