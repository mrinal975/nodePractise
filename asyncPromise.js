const fetchData = callback =>{
    setTimeout(()=>{
        callback('Done!');
    },1500);
};


setTimeout(()=>{
    console.log('Time is out');
    fetchData(text=>{
        console.log(text);
    })
},2000);

console.log('Hello');
console.log('hi');


//promise example
const getPromiseData =()=>{
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Done !");
        },1500);
    })
    return promise;
}

setTimeout(()=>{
    console.log("Timer is at promise");
    getPromiseData()
    .then(text=>{
        console.log(text);
        return fetchData;
    })
})

