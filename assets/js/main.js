function changeImg(){

	const backgrounds = [
		'assets/fort-min.jpg',
		'assets/fort2.jpg',
		'assets/fort3.jpg',
		'assets/fort4.jpg',

	]

	const count = 0;
	if (count == 0){
    	document.body.style.backgroundImage = `url('assets/fort2.jpg')`;
    	count = 1;
	}
	if (count == 1){
    	document.body.style.backgroundImage = `url('assets/fort3.jpg')`;
    	count= 2;

	}
	if (count == 2){
    	document.body.style.backgroundImage = `url('assets/fort3.jpg')`;
    	count= 2;
    
	}

}

var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

