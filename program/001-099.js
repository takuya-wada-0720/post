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
            var script = document.createElement("script");
            script.src = URL2+'program/post.js';
            var head = document.getElementsByTagName("head");
            head[0].appendChild(script);
            script.onload = function(){
                getCSV(URL2+'postdata/'+s+'.csv')
            }
            break;
        }
    }
}