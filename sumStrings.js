function sumStrings(a,b) { 
    return (BigInt((BigInt(a)||BigInt(0))+(BigInt(b)||BigInt(0)))).toString();
}

console.log(sumStrings('123','456'))//'579'