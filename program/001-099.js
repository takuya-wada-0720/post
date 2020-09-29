var URL2 = 'https://takuya-wada-0720.github.io/post/'
var st;

function search2_0(num2) {
    for(var i=1;i<100;i++){
        st = String(i);
        if(i<10) {
            st = '00'+st;
        }
        else {
            st = '0'+st;
        }
        if(num2.slice(0,3) == st){
            var s = st;
            getCSV(URL2+'postdata/'+s+'.csv')
            break;
        }
    }
}

function getCSV(url){
  console.log(url);
  var csv = new XMLHttpRequest();
  csv.open('get',url,true);
  csv.send(null);
  csv.onload = function(){
    console.log(csv.responseText);
    convertCSVtoArray(csv.responseText);
  }
}
  
function convertCSVtoArray(str){
  tmpdata = str.split("\n");
  for(var i=0;i<tmpdata.length;++i){
    data[i] = tmpdata[i].split(',');
  }
  up(data)
}
  
function up(d) {
  for(var a=0; a < d.length; ++a){
    if(postnum == d[a][0]){
      if(post_program[0].classList.contains("strt_add1") == true && post_program[0].classList.contains("strt_add2") == true) {
        post_program[0].getElementsByClassName("strt_add1")[0].value = d[a][1];
        post_program[0].getElementsByClassName("strt_add2")[0].value = d[a][2]+d[a][3]+d[a][4];
      }
      if(post_program[0].classList.contains("strt_add1 strt_add2") == true) {
        post_program[0].getElementsByClassName("strt_add1 strt_add2")[0].value = d[a][1]+d[a][2]+d[a][3]+d[a][4];
      }
    }
  }
}