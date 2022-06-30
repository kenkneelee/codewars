function pigIt(str){
    return (str.split(" ").map(x=>/[A-Za-z]/g.test(x)? x.substring(1)+x[0]+"ay": x)).join(" ");
  }

  console.log(pigIt('Pig latin is cool'));
  console.log(pigIt('O tempora o mores !'));