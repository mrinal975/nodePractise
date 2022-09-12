function greeter(name,age){
    var message = name+" says hello, he is "+age+"years old";
    return function greet(){
        console.log(message);
    }

}

var closureExample = greeter("Mallik",26);
closureExample();
