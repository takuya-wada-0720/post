var URL2 = 'https://takuya-wada-0720.github.io/post/'
var st;

function search2_2(num2) {
    for(var i=200;i<300;i++){
        st = String(i);
        if(num2.slice(0,3) == st){
            var s = st;
            getCSV(URL2+'postdata/'+s+'.csv')
            break;
        }
    }
}

function getCSV(url,post_program){
  console.log(url,post_program);
  var csv = new XMLHttpRequest();
  csv.open('get',url,true);
  csv.send(null);
  csv.onload = function(){
    console.log(csv.responseText);
    convertCSVtoArray(csv.responseText,post_program);
  }
}
  
function convertCSVtoArray(str,post_program){
  tmpdata = str.split("\n");
  for(var i=0;i<tmpdata.length;++i){
    data[i] = tmpdata[i].split(',');
  }
  up(data,post_program)
}
  
function up(d,post_program) {
  var strt_add1 = post_program[0].getElementsByClassName("strt_add1");
  var strt_add2 = post_program[0].getElementsByClassName("strt_add2");
  for(var a=0; a < d.length; ++a){
    if(postnum == d[a][0]){
      if(strt_add1[0].classList.contains("strt_add1") == true && strt_add2[0].classList.contains("strt_add2") == true) {
        post_program[0].getElementsByClassName("strt_add1")[0].value = d[a][1];
        post_program[0].getElementsByClassName("strt_add2")[0].value = d[a][2]+d[a][3]+d[a][4];
      }
      if(strt_add1[0].classList.contains("strt_add1") == true) {
        post_program[0].getElementsByClassName("strt_add1 strt_add2")[0].value = d[a][1]+d[a][2]+d[a][3]+d[a][4];
      }
    }
  }
}