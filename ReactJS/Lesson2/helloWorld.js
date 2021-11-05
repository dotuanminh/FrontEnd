var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//destructuring
var date1 = [2020, 12, 08];
var year = date1[0], month = date1[1], day = date1[2];
//var [year, , day] = date;
console.log(year + 1);
console.log(month);
console.log(day);
//template string
//nhay quote `${}`
var name_from_server = "Minh";
var title = "Xin chao ban " + name_from_server;
console.log(title);
//... : them object vao sau
var student = {
    university: "DH BK"
};
var student1 = __assign(__assign({}, student), { ten: "Do Tuan Minh" });
console.log(student1);
//tuong tu voi array
//cai nay la copy chi khong tro den bo nho 
//Q1
var even_number = [2, 4, 6, 8, 10];
var nums = __spreadArray(__spreadArray([], even_number, true), [5, 7, 9], false);
console.log(nums);
//Q2
var num1 = nums;
console.log(num1);
//Q3
var cold = ["autumn", "winter"];
var warm = ["spring", "summer"];
var season = __spreadArray(__spreadArray([], warm, true), cold, true);
console.log(season);
//normal function
//var num_2 = function () {
//}
//array function 
var title1 = function (first_name) { return console.log("Hello" + first_name); };
title1("Minh");
