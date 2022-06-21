function solution(str){
    const arr=Array.from(str);
    let fin = [];
    arr.forEach(element => {
        fin.unshift(element);
    });
    fin = fin.join("");
    return(fin);
  }

  solution("string");