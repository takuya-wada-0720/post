var postnum;
var url = "https://takuya-wada-0720.github.io/post/";
var tmpdata = [];
var data = [];

function addValue(){
    var idname = "neko";
    var s = document.getElementById(idname).value;
    if(s.length == 7) {
        document.write("<script src="https://takuya-wada-0720.github.io/post/program/1-9.js"></script>");
        for(var a=0; a < tmp.length; ++a) {
        if(s == data[a][0]) {
          var c = data[a][1]+data[a][2]+data[a][3]+data[a][4];
          document.getElementById("nekopv").value = c;
        }
      }
    }
    document.getElementById("test").innerHTML = s;
  }
