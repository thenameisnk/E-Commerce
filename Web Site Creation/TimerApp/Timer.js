//callback function
//even handler

var sayHello=function (){
    console.log("Welcome to node js");
};

var sayBye=function (){
    console.log("Bye Bye........");
};

//sayHello(); //explicit calling

//register function

setInterval(sayHello,3000);
setInterval(sayBye, 5000);