var URL2 = 'https://takuya-wada-0720.github.io/post/'
var st;

function search2_5(num2) {
    for(var i=500;i<600;i++){
        st = String(i);
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
  for(var a=0; a < d2.length; ++a){
    if(postnum == d1[a][0]){
      document.getElementById("nekopv").value = d1[a][1]+d1[a][2]+d1[a][3]+d1[a][4];
    }
  }
}