function creditvali1(){
var patt1 = /^(?:3[47][0-9]{13})$/;
var ccnum1=document.querySelector('#cc1').value;
if(ccnum1.match(patt1)){
alert('Perfect!You can continue');
return true;
}
else{
alert("Not a valid credit card number!");
document.querySelector('#cc1').value='';
document.querySelector('#cc1').focus();
return false;
}
}
function creditvali3(){
var patt3 = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
var ccnum3=document.querySelector('#cc3').value;
if(ccnum3.match(patt3))
{
alert('Perfect!You can continue');
return true;
}
else{
alert("Not a valid Credit card number!");
document.querySelector('#cc3').value='';
document.querySelector('#cc3').focus();
return false;
}
}
function creditvali5()
{
var patt5 = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
var ccnum5=document.querySelector('#cc5').value;
if(ccnum5.match(patt5)){
alert('Perfect!You can continue');
return true;
}
else{
alert("Not a valid credit card number!");
document.querySelector('#cc5').value='';
document.querySelector('#cc5').focus();
return false;
}
}
