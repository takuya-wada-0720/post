function addValue(){
  var idname = "neko";
  s = document.getElementById(idname).value;
  var pvname =idname + "pv";
  document.getElementById(pvname).value = s;
}