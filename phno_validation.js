$(document).ready(function(){
  $('#phone1').inputmask('9999999999');
  $('#phone3').inputmask('+99-9999-9999')
})


function validate2(){
var phno2=document.querySelector('#phone2').value;
var vali2= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
if(phno2.match(vali2)){
  alert("Perfect ! you can continue!")
return true;
}
else{
alert("Not a valid Phone Number,please check that you satisfy the required conditions");
return false;
}
}
