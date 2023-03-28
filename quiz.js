function submission() {
    var score = 0;
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked == true) {
            if (inputs[i].value == 1) {
                score++;
            }
            else if (inputs[i].value == 2) {
                document.getElementById("lars").style.visibility = "visible";
                score += 100;
            }
        }
    }
    if (score < 4) {
        document.getElementById("score").innerHTML = `Score: ${score}/3`;
    }
    else if (score > 10) {
        document.getElementById("score").innerHTML = `Score: METAL!!!`;
    }
}