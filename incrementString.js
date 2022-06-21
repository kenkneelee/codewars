function incrementString (strng) {
    (strng.match(/\d+/g)) ? number=strng.match(/\d+/g)[0] : number="0";
    let result = (parseInt(number, 10)+1).toString();
    while (result.length < number.toString().length)
    {
       result="0" + result;
    };
    
    if (strng.match(/\d+/g)) {return strng.replace(number, result);}
    else {return strng.concat(result)};
  }

console.log(incrementString("foobar000"), "foobar001");
console.log(incrementString("foo"), "foo1");
console.log(incrementString("foobar001"), "foobar002");
console.log(incrementString("foobar99"), "foobar100");
console.log(incrementString("foobar099"), "foobar100");
console.log(incrementString(""), "1");