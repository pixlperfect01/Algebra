function factor(){
  var a=parseInt(document.getElementById("a").value);
  var b=parseInt(document.getElementById("b").value);
  var c=parseInt(document.getElementById("c").value);
  var factors = factorsOf(a*c);
  var fNext=findF(factors, b);
  var fNext2 = s1(a, fNext[0], fNext[1], c);
  var fNext3 = s2(a, fNext[0], fNext[1], c, fNext2);
  var fDone = s3(fNext3);
  document.getElementById("out").innerHTML=fDone;
}
function factorsOf(n){
  var out = [];
  for(var i=0;i<=n;i++){
    for(var j=0;j<=n;j++){
      if(i*j==n){
        out.push([i, j]);
      }
    }
  }
  return out;
}
function findF(a, b){
  for(var i=0;i<a.length;i++){
    if(a[i][0]+a[i][1]==b){
      return a[i];
    }
  }
}
function s1(t1, t2, t3, t4){
  var record1 = 0;
  for(var i=1;i<=Math.min(t1, t2);i++){
    if(isInt(t1/i)&&isInt(t2/i)){
      if(i>record1){
        record1=i;
      }
    }
  }
  var record2 = 0;
  for(var i=1;i<=Math.min(t3, t4);i++){
    if(isInt(t3/i)&&isInt(t4/i)){
      if(i>record2){
        record2=i;
      }
    }
  }
  return [record1, record2];
}
function s2(a, b, c, d, e){
  return [e[0]+"x("+a/e[0]+"x+"+b/e[0]+")", e[1]+"("+c/e[1]+"x"+"+"+d/e[1]+")"];
}
function s3(a){
  var b = a[0].substring(a[0].indexOf("(")+1, a[0].indexOf(")"));
  var c = a[1].substring(a[1].indexOf("(")+1, a[1].indexOf(")"));
  var d = a[0].substring(0, a[0].indexOf("("));
  var e = a[1].substring(0, a[1].indexOf("("));
  console.log(a, b, c, d, e);
  return "("+b+")("+d+"+"+e+")";
  console.log([b, c, d, e]);
}

function isInt(a){
  return Math.trunc(a)==a;
}
