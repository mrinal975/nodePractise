const http = require('http');
const server =http.createServer((req, res)=>{
    // console.log(req.url,req.method, req.headers);
    if(req.url=='/'){
        res.setHeader('Context-Type','text/html');
        res.write('<html>');
        res.write('<title>First</title>');
        res.write('<h1><form action="/message" method="post">'+
            '<input type=text>'+
            '<button type="submission" >Submit form</button>'+
        '</form></h1>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Context-Type','text/html');
    res.write('<html>');
    res.write('<title>First</title>');
    res.write('<h1>hi</h1>');
    res.write('</html>');
    res.end();
});
server.listen(3000);