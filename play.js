let name ='Mrinal';
let age =24;
const hasHobbies =true;
age =25;

summery =userName=>{
    return (
        'name '+
        userName 
    );
};
const add = (a,b)=>
{
    return a+b;
}

person = {
    'name':this.name,
    'age':13,
    sex(){
        console.log('female is'+ name)
    }
    
}

const hobby =['Sports','Cooking'];
hobby.push('sex');

function rest(...arg){
    return [arg]
}
console.log(rest(1,2,3,4,5));

spread = [...hobby];
console.log(...hobby);
console.log(hobby.map(hobby=>'Hobby: '+hobby));
console.log(hobby);
person.sex();
console.log(add(10,5));
console.log(summery(name,age))