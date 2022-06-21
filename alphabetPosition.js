function alphabetPosition(text) {
    let inputArray = Array.from(text);
    let output = [];
    for (let i=0; i<inputArray.length; i++)
    {
      if (inputArray[i].toUpperCase()!=inputArray[i].toLowerCase()) {
        output.push(text.toUpperCase().charCodeAt(i)-64);
      }
    }
    console.log(output);
    text = output.toString().replaceAll(',', ' ');
    console.log(text);
    return text;
  }

  alphabetPosition("The sunset sets at twelve o' clock.");