var calculation = "";
document.getElementById("B_AC").addEventListener("click", function() {
    calculation = "";
    document.getElementById("display_result").innerHTML = ""
});
document.getElementById("B_delete").addEventListener("click", function() {
    calculation = calculation.slice(0, -1);
});
document.getElementById("B_=").addEventListener("click", function() {
    refreshdisplay()
});
document.getElementById("B_+").addEventListener("click", function() {
    calculation = calculation +  "+";
});
document.getElementById("B_-").addEventListener("click", function() {
    calculation = calculation + "-";
});
document.getElementById("B_*").addEventListener("click", function() {
    calculation = calculation + "*";
});
document.getElementById("B_/").addEventListener("click", function() {
    calculation = calculation + "/";
});
document.getElementById("B_,").addEventListener("click", function() {
    calculation = calculation + ".";
});
var bracket = "closed"
document.getElementById("B_()").addEventListener("click", function() {
    if (bracket == "open") {
        calculation = calculation + ")"
        bracket = "closed"
    }
    else {
        calculation = calculation + "("
        bracket = "open"
    }
})
document.getElementById("B_0").addEventListener("click", function() {
    calculation = calculation + "0";
});
document.getElementById("B_1").addEventListener("click", function() {
    calculation = calculation + "1";
});
document.getElementById("B_2").addEventListener("click", function() {
    calculation = calculation + "2";
});
document.getElementById("B_3").addEventListener("click", function() {
    calculation = calculation + "3";
});
document.getElementById("B_4").addEventListener("click", function() {
    calculation = calculation + "4";
});
document.getElementById("B_5").addEventListener("click", function() {
    calculation = calculation + "5";
});
document.getElementById("B_6").addEventListener("click", function() {
    calculation = calculation + "6";
});
document.getElementById("B_7").addEventListener("click", function() {
    calculation = calculation + "7";
});
document.getElementById("B_8").addEventListener("click", function() {
    calculation = calculation + "8";
});
document.getElementById("B_9").addEventListener("click", function() {
    calculation = calculation + "9";
});

function refreshdisplay() {
    document.getElementById("display_calculation").innerHTML = calculation
    if (!Number.isInteger(eval(calculation))) {
        document.getElementById("display_result").innerHTML = "=" + eval(calculation).toFixed(5)
    }
    else {
        document.getElementById("display_result").innerHTML = "=" + eval(calculation)
    }
}