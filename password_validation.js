function passwrdvali1()
{
var patt1=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
var passwrd1=document.querySelector("#pass1").value;
if(passwrd1.match(patt1))
{
return true;
}
else
{
alert('Wrong Password...Make sure you match all the required conditions!')
document.querySelector("#pass1").value='';
document.querySelector("#pass1").focus();
return false;
}
}

function passwrdvali2()
{
var patt2= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
var passwrd2=document.querySelector("#pass2").value;
if(passwrd2.match(patt2))
{
return true;
}
else
{
alert('Wrong...!Make sure you match all the required conditions!')
document.querySelector("#pass2").value='';
document.querySelector("#pass2").focus();
return false;
}
}

function passwrdvali3()
{
var patt3= /^[A-Za-z]\w{7,16}$/;
var passwrd3=document.querySelector("#pass3").value;
if(passwrd3.match(patt3))
{
return true;
}
else
{
alert('Wrong...!Make sure you match all the required conditions!')
document.querySelector("#pass3").value='';
document.querySelector("#pass3").focus();
return false;
}
}

function passwrdvali4()
{
var passwrd4=document.querySelector("#pass4").value;
var patt4=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
if(passwrd4.match(patt4))
{
return true;
}
else
{
alert('Wrong...!Make sure you match all the required conditions!')
document.querySelector("#pass4").value='';
document.querySelector("#pass4").focus();
return false;
}
}
