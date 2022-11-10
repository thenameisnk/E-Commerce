var http=require('http');
var fs=require('fs');

var onReceive=function(req, res){
    var fileName="contact.html";
    fs.readFile(fileName,'utf8',(err, data)=>{
        console.log(data);
        res.write(data);
        res.end();
    })

}
var server=http.createServer(onReceive);
server.listen(8000);
console.log("Online shopping is listening on port 8000");
