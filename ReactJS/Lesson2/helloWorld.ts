//destructuring
var date1: number[] = [2020, 12, 08];

var [year, month, day] = date1;
//var [year, , day] = date;
console.log(year+1);
console.log(month);
console.log(day);

//template string
//nhay quote `${}`
var name_from_server: string= "Minh";
var title = `Xin chao ban ${name_from_server}`;

console.log(title);

//... : them object vao sau
var student ={
    university : "DH BK",
};

var student1 ={
    ...student,
    ten : "Do Tuan Minh",
};

console.log(student1);
//tuong tu voi array
//cai nay la copy chi khong tro den bo nho 

//Q1
var even_number: number[] = [2, 4, 6, 8, 10];
var nums: number[] = [...even_number, 5, 7, 9];
console.log(nums);

//Q2
var num1 = nums;
console.log(num1);

//Q3
var cold: string[] = ["autumn", "winter"];
var warm: string[] = ["spring", "summer"];
var season: string[] = [...warm, ...cold];
console.log(season);

//normal function
//var num_2 = function () {
//}

//array function 

var title1 = (first_name: string) => console.log("Hello "+ first_name);
title1("Minh");

//optional parameter function(a?:datatype)
//rest parameter function(...a)

//Anonymous Object as parameter
