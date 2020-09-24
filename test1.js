document.write("<script src=\"proc-lib.js\"></script> ");

function exec() {
    var result = getData(4);
    var elem = document.getElementById("output");
    elem.innerHTML = result;
}