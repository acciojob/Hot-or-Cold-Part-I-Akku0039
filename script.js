//your code here
var btn =document.getElementById("btn");
var numPtag=document.getElementById("num");
var res =document.getElementById("respond");
var inputValue =document.getElementById("guess").value;
var diff =Number(inputValue) - Number(numPtag.value);
if(Math.abs(diff) <= 5){
	res.textContent="Hot";
}
else{
	res.textContent="Cold";
}
function generateRandomNumber(){
	var no=Math.floor(Math.random() * 40)-20;
	numPtag.textContent = no;
}
btn.addEventListener("click",generateRandomNumber);
