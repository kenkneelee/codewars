function basicOp(operation, value1, value2)
{
    switch (operation) {
        case "+":
            return value1+value2;
        break;
        case "-":
            return value1-value2;
        break;
        case "/":
            return value1/value2;
        break;
        case "*":
            return value1*value2;
        break;
        default:
            return null;
    }
}

console.log(basicOp("+", 2,5));