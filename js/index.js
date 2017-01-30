function on_btn_gen_click() {
    count = parseInt(document.getElementById("inCount").value);
    a = 1, b = 1, sum = 0;
    output = "<b>The first " + count + " elements in the Fibonacci series:</b> ";

    for (i = 0; i < count; i++) {
        output += a + " ";
        sum = a + b;
        a = b;
        b = sum;
    }

    document.getElementById("pSeries").innerHTML = output;
}
