function search2(num2) {
    switch(num2.slice(0,3)) {
        case 001:
            function getCSV(url){
                var csv = new XMLHttpRequest();
                url = url + "postdata/001.csv" 
                csv.open("get",url,true);
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