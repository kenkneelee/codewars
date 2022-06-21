function count (string) {  
    arr = Array.from(string);
    final = {};
    arr.map(letter => {
        if (!final[letter.toLowerCase()]) {final[letter.toLowerCase()]=0}
        final[letter.toLowerCase()] +=1 || 1;
    });
     return final;
  }

