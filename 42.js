//CREATE A FUNCTION THAT TAKES IN A SENTENCE ANS RETURNS A RUNNING LIST OF CONSONANTS PER WORD AND VOWELS PER WORD
function strCode(sentence){
    function isConsonant(char){
        const consonants = "bcdfghjklmnpqrstvwxyz";
        return consonants.includes(char);
    }

    function countConsonantsAndVowels(word){
        let consonants=0;
        let vowels=0;

        for(const char of word){
            if(isConsonant(char)){
                consonants++;
            }else if("aeiouAEIOU".includes(char)){
                vowels++;
            }
        }

        return consonants + " " + vowels;
    }

    const words = sentence.split(' ');
    console.log(words);
   

    const consonantCount = words.map(word =>
        countConsonantsAndVowels(word));
}


console.log(strCode("I am a sentence"));