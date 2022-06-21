function pigIt(str){
    let output = [];
    const regex = /[^A-Za-z]/g;
    arr = str.split(' ');
    arr.map(function(word,index) {
        if (!regex.test(word)) {
        wordArr=Array.from(word);
        wordArr.push(wordArr.shift());
        wordArr.push("ay");
        wordArr=wordArr.join('').toString();
        console.log(wordArr);
        output.push(wordArr);
        }
        else {
            output.push(Array.from(word));
        }
    });
    output = output.join(' ').toString();
    return output;
  }


console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldway !