var postnum;
var tmpdata = [];
var data = [];
var URL1 = 'https://takuya-wada-0720.github.io/post/program/'


function postpro(){
    var post_program = document.getElementsByClassName("post_program");
    var postnum_class = post_program[0].getElementsByClassName("post_num");
    if(postnum_class.length == 1) {
        postnum = post_program[0].getElementsByClassName("post_num")[0].value;

        if(postnum.length == 3) {
            search1(postnum,post_program)
        }
        if(postnum.length == 7) {
            search1(postnum,post_program)
        }
        if(postnum.length == 8) {
            postnum.replace("-","");
            search1(postnum,post_program)
        }
    }

    if(postnum_class.length == 2) {
        var postnum1 = post_program[0].getElementsByClassName("post_num")[0].value;
        var postnum2 = post_program[0].getElementsByClassName("post_num")[1].value;
        if(postnum2 < 4){
        var htmldata = post_program[0].innerHTML;
        htmldata = htmldata.replace(" ","");
        var result1 = htmldata.includes('class="strt_add1"');
        var result2 = htmldata.includes('class="strt_add2"');
        var result3 = htmldata.includes('class="strt_add"');
            if(result1 == true && result2 == true) {
              post_program[0].getElementsByClassName("strt_add1")[0].value = "";
              post_program[0].getElementsByClassName("strt_add2")[0].value = "";
            }
            if(result3 == true) {
              post_program[0].getElementsByClassName("strt_add")[0].value = "";
            }
        }
    }
        postnum = postnum1 + postnum2

        if(postnum.length == 3) {
            search1(postnum,post_program)
        }
        if(postnum.length == 7) {
            search1(postnum,post_program)
        }
        if(postnum.length == 8) {
            postnum = postnum.replace("-","");
            search1(postnum,post_program)
        }
    }
}


function search1(num1,post_program) {
  if(num1.slice(0,1) == '0'){
      var script = document.createElement("script");
      script.src = URL1+'001-099.js';
      var head = document.getElementsByTagName("head");
      head[0].appendChild(script);
      script.onload = function(){
          search2_0(num1,post_program)
    }
  }
  if(num1.slice(0,1) == '1'){
      var script = document.createElement("script");
      script.src = URL1+'100-199.js';
      var head = document.getElementsByTagName("head");
      head[0].appendChild(script);
      script.onload = function(){
          search2_1(num1,post_program)
      }
  }
  if(num1.slice(0,1) == '2'){
      var script = document.createElement("script");
      script.src = URL1+'200-299.js';
      var head = document.getElementsByTagName("head");
      head[0].appendChild(script);
      script.onload = function(){
          search2_2(num1,post_program)
      }
  }
  if(num1.slice(0,1) == '3'){
      var script = document.createElement("script");
      script.src = URL1+'300-399.js';
      var head = document.getElementsByTagName("head");
      head[0].appendChild(script);
      script.onload = function(){
          search2_3(num1,post_program)
      }
  }
  if(num1.slice(0,1) == '4'){
      var script = document.createElement("script");
      script.src = URL1+'400-499.js';
      var head = document.getElementsByTagName("head");
      head[0].appendChild(script);
      script.onload = function(){
          search2_4(num1,post_program)
      }
  }
  if(num1.slice(0,1) == '5'){
      var script = document.createElement("script");
      script.src = URL1+'500-599.js';
      var head = document.getElementsByTagName("head");
      head[0].appendChild(script);
      script.onload = function(){
          search2_5(num1,post_program)
      }
  }
  if(num1.slice(0,1) == '6'){
      var script = document.createElement("script");
      script.src = URL1+'600-699.js';
      var head = document.getElementsByTagName("head");
      head[0].appendChild(script);
      script.onload = function(){
          search2_6(num1,post_program)
      }
  }
  if(num1.slice(0,1) == '7'){
      var script = document.createElement("script");
      script.src = URL1+'700-799.js';
      var head = document.getElementsByTagName("head");
      head[0].appendChild(script);
      script.onload = function(){
          search2_7(num1,post_program)
      }
  }
  if(num1.slice(0,1) == '8'){
      var script = document.createElement("script");
      script.src = URL1+'800-899.js';
      var head = document.getElementsByTagName("head");
      head[0].appendChild(script);
      script.onload = function(){
          search2_8(num1,post_program)
      }
  }
  if(num1.slice(0,1) == '9'){
      var script = document.createElement("script");
      script.src = URL1+'900-999.js';
      var head = document.getElementsByTagName("head");
      head[0].appendChild(script);
      script.onload = function(){
          search2_9(num1,post_program)
      }
  }
}
