var URL2 = 'https://takuya-wada-0720.github.io/post/'
var st;

function search2_3(num2) {
    for(var i=300;i<400;i++){
        st = String(i);
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