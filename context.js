drink = 'wine';

var foo = {
    drink: "beer",
    getDrink: function(){
        return drink;
    }    
};

console.log( foo.getDrink() ); // wine