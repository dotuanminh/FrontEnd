import * as readline from 'readline';
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Is this example useful? [y/n] ', (answer) => {
    switch(answer.toLowerCase()) {
      case 'y':
        console.log('Super!');
        break;
      case 'n':
        console.log('Sorry! :(');
        break;
      default:
        console.log('Invalid answer!');
    }
    rl.close();
  });
//Quyestion1
var string1 = new String("Nguyễn Văn A");

console.log(string1.split(" ").length);

//Quyestion2
var string2 = new String("Hello");
console.log(string2.concat(string1.toString()));
//Quyestion3;
var string3 = new String("hello");
console.log(string3.substr(0,1).toLocaleUpperCase()+ string3.substr(1));
//Quyestion4
var string4 = new String("Nam");
for(var i =0 ; i<=string4.length ; i++){
    console.log(string4.charAt(i).toLocaleUpperCase());
}
//Quyestion5






