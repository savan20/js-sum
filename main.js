
function incrmentByOne() {
    let x = prompt("amount you want to sum with", 0);
    let y = prompt("amount you want to sum to", 0);
    var num1 = parseInt(x);
    var num2 = parseInt(y);
    let fiinelResult = num1 + num2;
    document.getElementById('result').innerHTML = num1 + "+" + num2 + "=" + fiinelResult;
};


incrmentByOne()