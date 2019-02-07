function factor(){
  var a=parseInt(document.getElementById("a"));
  var b=parseInt(document.getElementById("b"));
  var c=parseInt(document.getElementById("c"));
  var factors = factorsOf(a*b);
  console.log(out);
}
function factorsOf(n){
  var out =[];
  for(var i=0;i<n;i++){
    for(var j=0;j<n;j++){
      if(i*j==n){
        out.push([i, j]);
      }
    }
  }
  return out;
}
