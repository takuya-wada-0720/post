var kk = "https://takuya-wada-0720.github.io/post/test2.js"
document.write("<script src = kk></script>");

function exec() {
    var result = getData(4);
    var elem = document.getElementById("output");
    elem.innerHTML = result;
}