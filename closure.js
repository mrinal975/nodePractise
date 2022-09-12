function greeter(name,age){
    var message = name+" says hello, he is "+age+"years old";
    return function greet(){
        console.log(message);
    }

    return fdfd(){
        console.log("hi");
    }

}

function fdfd(){
    console.log(message);
}


let closureExample = greeter("Mallik",26);
closureExample();
