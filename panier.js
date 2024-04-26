var compteur=function(a,b,c){
	var counter = 0;
	const counterValue = document.querySelector(`#${a}`);
	console.log(counterValue)
	const incrementBtn = document.querySelector(`#${b}`);
	const decrementBtn = document.querySelector(`#${c}`);
	
	// To increment the value of counter
	incrementBtn.addEventListener('click', function(){
		counter++;
		counterValue.innerHTML = counter;
	
	total()
	
	});
	
	// To decrement the value of counter 
	decrementBtn.addEventListener('click', () => {
		counter--;
		counterValue.innerHTML = counter;
		if (counterValue.innerHTML<0){counter=0;
			counterValue.innerHTML=0} 
	total()
	
	});
	}

	compteur('counter-value','increment-btn','decrement-btn');
	compteur('counter-value1','increment-btn1','decrement-btn1');
	compteur('counter-value2','increment-btn2','decrement-btn2');


var trashcan=function(a,b){
a.addEventListener('click', () =>{
		 b.remove();
	}
)
}

trashcan(trash1,section1);
trashcan(trash2,section2);
trashcan(trash3,section3);


var heart=function(c){
	c.addEventListener('click',function(){
		if(c.style.color!="red"){c.style.color="red";}
		else{c.style.color="black"}

	})
}
heart(heart1);
heart(heart2);
heart(heart3);


var total=function(){
let qte=Array.from(document.querySelectorAll('.qte'))
let price=Array.from(document.querySelectorAll('.price'))
let sum=0;
for(let i=0;i<qte.length;i++){
sum+=(qte[i].innerHTML)*(price[i].innerHTML);

}
document.querySelector('#totall').innerHTML=sum;
}
let price=Array.from(document.querySelectorAll('.price'))
console.log(price[1].innerHTML);









