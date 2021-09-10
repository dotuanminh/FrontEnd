// window.onload = function(){}
document.getElementById("btn-click").addEventListener("click", initLesson3);
    document.write("minh dep trai")
    function initLesson3() {
        const element= document.getElementById("text-h1");
        console.log(element);
        element.style.color="red" ; 
        element.style.fontSize= "30px"; 
        element.innerHTML="Test";
        console.log(onclick);
        // window.alert("On CLick");
        for(let index=0 ; index<3; index++){
            var abc= index;
            console.log(index);
        }
        
        
    }

    function Person(firstName,lastName,age){
        this.firstName= firstName;
        this.lastName=lastName;
        this.age=age;
    }

    var p= new Person("Minh","Do",18); 
    console.log(p.firstName+ p.lastName + p.age);
function initEvent() {
    document.getElementById("btn-click").addEventListener("click", initLesson3);
    }