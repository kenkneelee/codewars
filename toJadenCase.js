String.prototype.toJadenCase = function () {
    return this.split(" ").map(word => {return word.charAt(0).toUpperCase()+word.slice(1);}).join(" ");    
};

console.log("This is a sentence to convert".toJadenCase());