function search2(num2) {
    switch(num2.slice(0,3)) {
        case 001:
            function getCSV(){
                var csv = new XMLHttpRequest();
                csv.open("get",url = "https://takuya-wada-0720.github.io/post/postdata/001.csv";,true);
                csv.send(null);
                csv.onload = function(){
                    convertCSVtoArray(csv.responseText);
                }
            }

            function convertCSVtoArray(str){
                tmpdata = str.split("\n");
                for(var i=0;i<tmpdata.length;++i){
                    data[i] = tmpdata[i].split(',');
                }
                console.log(data[0][0]);
            }
            return data;
            break;
        default:
            break;
        }
    }
}