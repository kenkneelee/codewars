function getMiddle(s)
{
    arr = Array.from(s)
    if (arr.length % 2 == 0) {
        return arr[(arr.length/2)-1]+arr[(arr.length/2)]
    }
    else {
        return arr[Math.floor(arr.length/2)];
    }
    

}

console.log(getMiddle("test")); // should return "es"

console.log(getMiddle("testing")); // should return "t"

console.log(getMiddle("middle")); //should return "dd"

console.log(getMiddle("A")); // should return "A"