
document.querySelector(".btn").addEventListener("click",() =>{
	let firstValue  = document.querySelector(".block__first").value;
	let secondValue = document.querySelector(".block__second").value;
	let thirdValue = document.querySelector(".block__third").value;
	let resultValue = (firstValue / secondValue) * thirdValue;
   let a = document.querySelector(".out__first").innerHTML = resultValue.toFixed(2)
   if(thirdValue != 100){
		document.querySelector(".out__second").innerHTML = "Вы должны умножить на 100!";
	}
})