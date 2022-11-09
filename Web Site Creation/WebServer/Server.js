//require is a inbuilt funtion is used to import module

var http=require('http');

//request handler

var onReceive=function(request, response){

	//console.log(request);
	
	response.write("<hl>Online Shopping Site</h1>");
	response.write("<hr//>");
	response.write("<ol>"+
				"<li>Topwear</li>"+
				"<li>Bottomwear</li>"+
				"<li>Footwear</li>"+
				"<li>Watches</li>"+
				"<li>Sports & Activewear</li>"+
				"<li>Innerwear</li>"+
				"<li>Ethnicwear</li>"+
				"<li>Loungwear & Sleepwear</li>"+
				"<li>Personal Care</li>"+
				"<li>Bags, Backpacks & Wallets</li>"+
				"<li>Other Accessories</li>"+
				"</ol>");
			
	response.end();
	
	//console.log(response);
	
//create a http server

var server=http.createServer(onReceive);

//keep server in listening mode

server.listen(7777);
console.log("server is listening on port 7777");

