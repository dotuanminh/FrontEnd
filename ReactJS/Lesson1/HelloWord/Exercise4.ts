// Question1 Scope
var fullName : string = "Trần Danh Thái";
function hello(){
    var fullName1 :string = "Nguyễn Anh Quân";
    console.log(fullName);
    console.log(fullName1);
    function hello1(){
        console.log(fullName1);
    }
    return hello1();
}
console.log(fullName);
hello();
//Question2 
var myName = function printName(){
    var fullname2 : string = "Trần Danh Thái";
    console.log("Đây là Tên tôi :" + fullname2);
}
myName();

//Question3 Clossure
function getGreeting(firsstName : string,lastName : string){
    var greeting = function greeting(){
        return firsstName + " " + lastName;
    }

    return greeting;
}
console.log(getGreeting("Trần","Thái")());

//Question4 loop
var timer = function(i: number){
    setTimeout(function timer(){
        console.log(i);
    },i*1000);
}
 for(var i=1; i<=6 ; i++){
     timer(i);
 }

 //Question5 : Clossure
 function math(x: number){
     return function(y: number){
         return Math.pow(x,y);
     }
 }
var square = math(2)
 console.log("Kết quả: " + square(3));

// Question6:
function person(){
    var id : number;
    var name : string;

    return{
        
    }

}


