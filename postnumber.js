var postnum;
var tmpdata = [];
var data = [];

function addValue(){
    postnum = document.getElementById("neko").value;
    if(postnum.length == 7) {
      var script = document.createElement("script");
      script.src = 'https://takuya-wada-0720.github.io/post/program/0-9.js';
      var head = document.getElementsByTagName("head");
      head[0].appendChild(script);
      script.onload = function(){
        search1(postnum)
      }
    }
    document.getElementById("test").innerHTML = postnum;
}
