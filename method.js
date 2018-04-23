//千分位
function toThousands(input) {
  var n = parseFloat(input).toFixed(2);
  var re = /(\d{1,3})(?=(\d{3})+(?:\.))/g;
  var f = n.replace(re, "$1,");
  return f;
}

//从地址栏上取字段
function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.href.substr(window.location.href.indexOf("?")+1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}

//固定保留两位小数
function returnFloat(value){
  var value=Math.round(parseFloat(value)*100)/100;
  var xsd=value.toString().split(".");
  if(xsd.length==1){
    value=value.toString()+".00";
    return value;
  }
  if(xsd.length>1){
    if(xsd[1].length<2){
      value=value.toString()+"0";
    }
    return value;
  }
}

//数组中移除某个元素
Array.prototype.remove = function(obj){
  for(var i =0;i <this.length;i++){
    var temp = this[i];
    if(!isNaN(obj)){
      temp=i;
    }
    if(temp == obj){
      for(var j = i;j <this.length;j++){
        this[j]=this[j+1];
      }
      this.length = this.length-1;
    }
  }
}