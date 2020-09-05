function Add(){
        var a=document.getElementById('first').value;
         var b=document.getElementById('two').value;
        var r= parseInt(a)+parseInt(b);

        return r;
    }
    function subtract(){
        var a=document.getElementById('first').value;
         var b=document.getElementById('two').value;
        var r= parseInt(a)-parseInt(b);

        return r;
    }
    function Multiply(){
        var a=document.getElementById('first').value;
         var b=document.getElementById('two').value;

        var r= parseInt(a)*parseInt(b);

        return r;
    }
    function Divide(){
        var a=document.getElementById('first').value;
         var b=document.getElementById('two').value;
        var r= parseInt(a) / parseInt(b);

        return r;
    }
     function Percentage(){
        var a=document.getElementById('first').value;
         var b=document.getElementById('two').value;

        var r= parseInt(a)/100;
        var tr=r*parseInt(b);

        return tr;
    }
     function obsolute(){
        var a=document.getElementById('first').value;
        var r=Math.abs(a);
        return r;
    }
     function squareroot(){
        var a=document.getElementById('first').value;

        var r=Math.sqrt(a);
        var tr=r.toFixed(3);

        return tr;
    }


function display(x){
       if( x =='+')
        var dis=this.Add();
       else if(x=='-')
        var dis=this.subtract();
    else if(x=='*')
        var dis=this.Multiply();
    else if(x=='/')
        var dis=this.Divide();
    else if(x=='%')
        var dis=this.Percentage();
    else if(x=='abs')
        var dis=this.obsolute();
    else if(x=='sqrt')
        var dis=this.squareroot();

    document.getElementById('w').value=dis;
}
function validatename() {
  var x = document.forms["form"]["fname"].value;
  var n = x.charCodeAt(0);
  if (x == "") { 
        alert("enter valid name");
    return "false";
  }
  if( n <='57' && n >='48') {
      alert("enter only characters");
      return "false";
  }
  else{  
    return "true";
  }
}
function num() {

  var x = document.getElementById("num").value;

  if (isNaN(x) || x < 1 || x.length != 10) {
    alert("Input not valid");
    return "false";
  } else {
    return "true";
  }
}
function validateemail(){
    var emailid=document.form.email.value;
    atpos = emailid.indexOf("@");
    dotpos = emailid.lastIndexOf(".");
    if((atpos<1)||(dotpos-atpos<2)){
        alert("incorrect email id");
        document.form.email.focus();
        return false;
    }
    return true;
}
function res(){
    var r2=this.num();
    var r1=this.validateemail();
    var r3=this.validatename();
    if(r1==true&&r2==true&&r3==true){
        document.getElementById("demo").innerHTML = "Details mentioned above are correct "
    }
    else{
        document.getElementById("demo").innerHTML = "please give correct details "
    }

}
function ValidatePalindrome(){

  var inpt=document.getElementById('pal').value;
   array = inpt.split("");
  let output = array.reverse().join("");
  if (inpt == output) {
    return true;
  } else {
    alert("not a palindrome");
    return false;
  }
}
function final(){
  var r=this.ValidatePalindrome();
  if(r==true){
  document.getElementById("4").innerHTML="Given string is palindrome";
}
else{
 document.getElementById("4").innerHTML="Given string is not a palindrome";

}
}
function ValidatePalindrome(){

  var inpt=document.getElementById('pal').value;
   array = inpt.split("");
  let output = array.reverse().join("");
  if (inpt == output) {
    return true;
  } else {
    alert("not a palindrome");
    return false;
  }
}
function final(){
  var r=this.ValidatePalindrome();
  if(r==true){
  document.getElementById("4").innerHTML="Given string is palindrome";
}
else{
 document.getElementById("4").innerHTML="Given string is not a palindrome";

}
}
function ValidateAnagram(){
  var s1=document.getElementById('a1').value;
  var s2=document.getElementById('a2').value;
  var s1=s1.split(" ").join('');
  var s1 = s1.split('');
  var s1 = s1.sort();
  var s1= s1.join('');
  var s2=s2.split('');
  var s2=s2.sort();
  var s2=s2.join('');
 var l2=s2.length;
  var l1=s1.length;
  var l1=parseInt(l1);
  var l2=parseInt(l2);
  var c=0;

  if(l1!=l2){
    return false;
  }
  else{
  for(let i=0;i<l1;i++){
    if(s1.charAt(i)==s2.charAt(i)){
      c=c+1;
    }
  }
  if(c==l1){
     return true;
  }
  else{
     return false;
  }
}
}
function fl(){
  var rr=this.ValidateAnagram();
  if(rr==true){
    document.getElementById('5').innerHTML="Given string is a Anagram ";
  }
  else{
    document.getElementById('5').innerHTML="Given string is not a Anagram ";``
  }

}
function myfun() {
  var x=Math.floor(Math.random() * 1000);
  var y=Math.floor(Math.random() * 1000);

  document.getElementById("x").value = Math.floor(Math.random() * 1000);
  document.getElementById("y").value = Math.floor(Math.random() * 1000);
  var map1=new Map();
  map1.set("0","Human");
  map1.set("1","Cockroach");
  map1.set("2","NuclearBomb");

  var i=parseInt(x)%3;
  var j=parseInt(y)%3;

  if(i==j){
    return 1;
  }
  else if(i==1&&j==0||i==0&&j==1){
    return 2;
  }
  else if(i==1&&j==2||i==2&&j==1){
    return 3;
  }
  else if(i==0&&j==2||i==2&&j==0){
    return 4;
  }
}
function game(){
  var p=this.myfun();
  if(p==1){
    document.getElementById('s').innerHTML="TIE";
  }
  if(p==2){
    document.getElementById('s').innerHTML="HUMAN SURVIVES";
  }
  if(p==3){
    document.getElementById('s').innerHTML="COCKROACH SURVIVES";
  }
  if(p==4){
    document.getElementById('s').innerHTML="HUMAN DIES";
  }
}