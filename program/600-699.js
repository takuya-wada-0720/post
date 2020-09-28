var URL2 = 'https://takuya-wada-0720.github.io/post/'
var st;

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
      document.getElementById("nekopv").value = d[a][1]+d[a][2]+d[a][3]+d[a][4];
    }
  }
}