var countBits = function (n) {
    // Program Me
    let binaryArray = [];
    let final = 0;

    while (n > 0) {
        binaryArray.unshift(n % 2);
        n = Math.floor(n / 2);
    }

    binaryArray.forEach((i) => {
        if (i == 1) {
            final += 1;
        }
    });

    return final;
};

