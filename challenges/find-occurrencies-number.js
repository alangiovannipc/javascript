/*
Given two s1 and s2 strings find how many s2 ocurrencies 
there are in s1 
Example  given the string s1 = 'ababab' s2 = 'ab' ocurrencies = 3;
*/

//First Solution
var findOcurrenciesNumber;

(function(){
    findOcurrenciesNumber = (text,textToFind) => {
        let count = 0,index;
        index = text.indexOf(textToFind);
        while(index!=-1){
            count++
            index = text.indexOf(textToFind,index + 1);
        }
        return count;
    }
}())

console.log(findOcurrenciesNumber("nbnbn ababab","ab")); // return 3;

//Second Solution
var findOcurrenciesNumber;

(function(){
    findOcurrenciesNumber = (text,textToFind) => {
        let count = 0,index;
        while((index = text.indexOf(textToFind))>=0){
            text = text.substring(index+textToFind.length,text.length);
            count++
        }
        return count;
    }
}())

console.log(findOcurrenciesNumber("nbnbn ababab","ab")); // return 3;