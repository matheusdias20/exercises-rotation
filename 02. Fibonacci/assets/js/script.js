function checkFibonacci() {

    var input = document.getElementById("number").value;

    var a = 0;
    var b = 1;

    while (b <= input) {
        var temp = a;
        a = b;
        b = temp + b;
    }

    if (a == input) {
        document.getElementById("result").innerHTML = input + " está na sequência de Fibonacci!";
    } else {
        document.getElementById("result").innerHTML = input + " não está na sequência de Fibonacci.";
    }
}
  