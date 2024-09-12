//CREATE A FUNCTION THAT TAKE STRING AS A ARGUEMENT AND RETURN 1's AND 0's BASSED ON THE STRING
function stringToBinary(str) {
    const words = str.split(' ').filter(word=>word.toLowerCase()==="zero" || word.toLowerCase()==="one");
    console.log(words);

    let binaryString = words.map((word)=>{
        return word.toLowerCase()==="zero" ? 0 : 1;
    }).join('');
    const excessLength=binaryString.length % 8;

    if(excessLength!==0){
        binaryString = binaryString.slice(0,0)
    }
    return binaryString;
    console.log(binaryString);
}

console.log(stringToBinary('Zero one zero ONE zero one zero one')); 