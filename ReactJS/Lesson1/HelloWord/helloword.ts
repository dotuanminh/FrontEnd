var message : string = "Hello Word!";
var num : Number = 9;
var a : any = '6';
var is : boolean = true;
console.log(message);
console.log(num);
console.log(a);
console.log(is);
var date = new Date();
console.log(date);

var set = new Set();
set.add('a');
set.add('b');
set.add('c');
set.add('a');
console.log(set.size);

var map = new Map();
map.set('1','a');
map.set('1','d');
map.set('2','c');
map.set('2','b');
console.log(map.size);
console.log(map.get('1'));

enum Gender{
    MALE,FEMALE 
};

var employee : Gender = Gender.MALE;


var person1 = {
    firstname : "Thái",
    lastname : "Trần",
    
};
console.log(person1.lastname +' '+ person1.firstname);

// var array : string[] = ["a","b","c"];
var array: any[] = [{a : "a"},{b:"b"},{c:"c"}]
array.forEach(e => console.log(e));

for(let value of array){
    console.log(value);
}

for(let index in array){
    console.log(index)
}

var fullname1 : string = 'Thái';// global scope
var result = function hello(b : string) {
    var result1 : string = 'acv';
    var result2 = function () {
        return result1 + fullname1;
    }
    return result2;
}
console.log(fullname1);
var c =result('abc')();
console.log(c);

