function orderWeight(strng) {
    const arr = strng.split(" ");
    console.log(arr);
    
    const weights = (strng.split(" ").map(x=>x.split("").reduce((a,b)=>parseInt(a)+parseInt(b)))); //.sort((c,d)=>c-d));
    console.log(weights);

    const objs = {};
    for (let i=0; i<weights.length; i++) {
        objs[weights[i]]=arr[i];
    }
    console.log(objs);

    let final = [];
    for (const property in objs) {
        final.push(objs[property]);
      }
    return final.join(" ");
    // "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes:
    // "100 180 90 56 65 74 68 86 99"
}
    //console.log (orderWeight("103 123 4444 99 2000")); // "2000 103 123 4444 99")
    console.log (orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")); // "11 11 2000 10003 22 123 1234000 44444444 9999")
