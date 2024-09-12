//REVERSE ALL WORDS OF A STRING WHICH HAVE ODD LENGTH.
function reverseStr(str){

    function reverseString(str){
        return str.split('').reverse().join();
    }


    const words=str.split(' ');
    console.log(words);


    for(let i=0;i<words.length;i++){
        if(words[i].length%2!==0){
            words[i] = reverseString(words[i]);
        }
    }
    return words.join(' ');
}


console.log(reverseStr("Apple is a fruit"));
