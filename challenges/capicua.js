/*
- Given a N number found the minus capicua number
- Capicua is the number that reads of equal way of left to right, that of right to left
the reading od the number must always be the same
*/

var menorCapicua;

(function(){
    menorCapicua = (num) => {
        while(!isCapicua(num)){
            num = num + 1;
        }
        return num;
    }
    
    let isCapicua = (num) => {
        let numInv = (num).toString().split("").reverse().join("");
        return num === parseInt(numInv);
    }

}());

console.log(menorCapicua(15)); //return 21
console.log(menorCapicua(80));//return 88
console.log(menorCapicua(100));//return 101