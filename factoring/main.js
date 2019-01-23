var factored = "";
console.clear();
function factor(){
  var e = document.getElementById("out");
  factored = "";
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  var c = parseInt(document.getElementById("c").value);
  var ac = a*c;
  var t1 = a, t2, t3, t4=c;
  var acF = findFactorsOf(ac);
  var equ = "("+a+"x^2)"+"+"+b+"x"+"+"+c;
  var equHTML = a+"x<sup>2</sup>"+"+"+b+"x"+"+"+c;
  var equ2 = "";
  document.getElementById("equ").innerHTML="Equation:<br>"+equHTML;
  var e1 = s1(ac, b, findFactorsOf(ac));
  if(e1!==false){
    t2=e1[0];
    t3=e1[1];
    equ2="("+a+"x^2)"+"+"+e1[0]+"x"+"+"+e1[1]+"x"+"+"+c;
    out.innerHTML = equ2;
  }
  console.log(t1, t2, t3, t4);
  s2(t1, t2, t3, t4);
}

function findFactorsOf(n){
  var out=[];
  if(n<0){
    n=-n;
  }
  for(var i=0;i<=n;i++){
    for(var j=0;j<=n;j++){
      if(i*j==n){
        if(find(out, i)==-1){
          out.push(i);
        }
        if(find(out, j)==-1){
          out.push(j);
        }
      }
    }
  }
  if(out.length==0){
    return false;
  }else{
    console.log(out);
    return out;
  }
}
function s1(a, b, c){
  if(a>=0){
    for(var i=0;i<c.length;i++){
      for(var j=0;j<c.length;j++){
        console.log(c[i]*c[j]+", "+a);
        console.log(c[i]+c[j]+", "+b);
        if(c[i]*c[j]==a&&c[i]+c[j]==b){
          return [c[i], c[j]];
        }
      }
    }
  }else{
    console.log("negative");
    for(var i=0;i<c.length;i++){
      for(var j=0;j<c.length;j++){
        if(c[i]*c[j]==a&&c[i]+c[j]==b){
          return [c[i], c[j]];
        }else if(-(c[i])*c[j]==a&&-(c[i])+c[j]==b){
          return [-(c[i]), c[j]]
        }else if(c[i]*-(c[j])==a&&c[i]+-(c[j])==b){
          return [c[i], -(c[j])];
        }
      }
    }
  }
  return false;
}

function s2(a, b, c, d){
  var o, o1, o2, o3, o4, o5, o6, o7, o8;
  var e = findFactorsOf(a);
  var f, g;
  for(var z=1;z<=b;z++){
    for(var zz=0;zz<e.length;zz++){
      if(z*e[zz]==b){
        f=[z, e[zz]];
        g=findFactorMatch(a, e[zz]);
        if(f[1]==1){
          f[1]="";
        }
        o1 = f[1]+"x("+g+"x+"+f[0]+")";
        o3 = f[1];
        o5 = "("+g+"x+"+f[0]+")";
        console.log(o1);
      }
    }
  }
  var h = findFactorsOf(c);
  var i, j;
  for(var z=1;z<=b;z++){
    for(var zz=0;zz<h.length;zz++){
      if(z*h[zz]==d){
        i=[z, h[zz]];
        j=findFactorMatch(c, h[zz]);
        if(i[1]==1){
          i[1]="";
        }
        o2 = i[1]+"("+j+"x+"+i[0]+")";
        o4 = i[1];
        o6 = "("+j+"x+"+i[0]+")";
      }
    }
  }
  if(o5==o6){
    if(o3==""){
      if(o4==""){
        
      }else{
        o7 = "("+o4+")";
      }
    }else{
      if(o4==""){
        o7 = "("+o3+"x)";
      }else{
        o7 = "("+o3+"x+"+o4+")";
      }
    }
    o8 = o6;
  }
  console.log(o7+o8);
  document.getElementById("out").innerHTML=o7+o8;
}
function find(arr, s){
  for(var jjjjjjjj=0;jjjjjjjj<arr.length;jjjjjjjj++){
    if(arr[jjjjjjjj]==s){
      return jjjjjjjj;
    }
  }
  return -1;
}
function findFactorMatch(a, b){
  for(var i=0;i<=a;i++){
    if(b*i==a){
      return i;
    }
  }
  return false;
}
