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
  up(data,tmpdata)
}
    
function up(d1,d2) {
  if(parseInt(d1[d2.length/2 - 1][0]) < parseInt(postnum)){
    if(parseInt(d1[d2.length/2 - 1 + d2.length/4][0]) < parseInt(postnum)){
      for(var i = 0;i < d2.length/4+1;i++){
        if(d1[d2.length/2 + d2.length/4 + i][0] == postnum){
          document.getElementById("nekopv").value = d1[d2.length/2 + d2.length/4 + i][1]+d1[d2.length/2 + d2.length/4 + i][2]+d1[d2.length/2 + d2.length/4 + i][3]+d1[d2.length/2 + d2.length/4 + i][4];
          break;
        }
      }
    }
    else{
      for(var i = 0;i < d2.length/4+1;i++){
        if(d1[d2.length/2 + i][0] == postnum){
          document.getElementById("nekopv").value = d1[d2.length/2 + i][1]+d1[d2.length/2 + i][2]+d1[d2.length/2 + i][3]+d1[d2.length/2 + i][4];
          break;
        }
      }
    }
  }
  else {
    if(parseInt(d1[d2.length/4 - 1][0]) < parseInt(postnum)){
      for(var i = 0;i < d2.length/4+1;i++){
        if(d1[d2.length/4 + i][0] == postnum){
          document.getElementById("nekopv").value = d1[d2.length/4 + i][1]+d1[d2.length/4 + i][2]+d1[d2.length/4 + i][3]+d1[d2.length/4 + i][4];
          break;
        }
      }
    }
    else{
      for(var i = 0;i < d2.length/4+1;i++){
        if(d1[i][0] == postnum){
          document.getElementById("nekopv").value = d1[i][1]+d1[i][2]+d1[i][3]+d1[i][3];
          break;
        }
      }
    }
  }
}