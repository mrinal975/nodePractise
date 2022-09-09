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

