function solution(number){
    let arr=[];
    for (let i=0; i<number; i+=3){
        arr.push(i);
    }
    for (let i=0; i<number; i+=5){
        arr.push(i);
    }
  return [...new Set(arr)].reduce((a,b)=>a+b,0);
}

console.log(solution(10)); // 23
