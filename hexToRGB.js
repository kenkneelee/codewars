function hexStringToRGB(hexString) {
    let arr = (hexString.match(/[a-zA-Z0-9]{1,2}/g));
    arr = arr.map (x=>parseInt(x,16));
    console.log(arr);
    let final = {};
    final.r=arr[0];
    final.g=arr[1];
    final.b=arr[2];
  return final;
}

console.log(hexStringToRGB("#FF9933"));
//{r:255, g:153, b:51}