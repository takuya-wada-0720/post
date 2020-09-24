document.write("<script src=\"https://takuya-wada-0720.github.io/post/test2.js\"></script>");

function exec() {
    var result = getData(4);
    var elem = document.getElementById("output");
    elem.innerHTML = result;
}
