function reverseString() {
    let input = document.getElementById("input").value;
    let output = document.getElementById("output");
    let reversed = "";

    for (let i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }
    
    output.value = reversed;
}