var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var reset = document.querySelector("#reset")
var p1disp = document.querySelector("#p1disp");
var p2disp = document.querySelector("#p2disp");
var numinput = document.querySelector("input");
var winscore = document.querySelector("h3 span");
var p1score=0; 
var p2score=0;
var winningscore = 5;
var gameover= false;

p1button.addEventListener("click", function(){
	if(!gameover){
		p1score++;
 		if (p1score === winningscore){
 			gameover = true;
 			p1disp.classList.add("win");

 	}
p1disp.textContent = p1score;
}});

p2button.addEventListener("click", function(){
	if (!gameover){
		p2score++;
		if(p2score === winningscore){
			gameover = true;
			p2disp.classList.add("win");
	}
p2disp.textContent = p2score;
}});

reset.addEventListener("click", function(){
	resetfunc();
	});

function resetfunc(){
	p1score = 0;
	p2score = 0;
	p1disp.textContent = p1score;
	p2disp.textContent = p2score;
	p1disp.classList.remove("win");
	p2disp.classList.remove("win");
	gameover = false;
}

numinput.addEventListener("change", function(){
	winscore.textContent = this.value;
	winningscore = Number(this.value);
	resetfunc();
})
