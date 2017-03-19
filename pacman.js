var zawarudo = [
		[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
		[2,0,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2],
		[2,1,2,2,1,2,2,2,1,2,1,2,2,2,1,2,2,1,2],
		[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,2],
		[2,1,2,2,1,2,1,2,2,2,2,2,1,2,1,2,2,1,2],
		[2,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,2],
		[2,2,2,2,1,2,2,2,1,2,1,2,2,2,1,2,2,2,2],
		[0,0,0,2,1,2,1,1,1,1,1,1,1,2,1,2,0,0,0],
		[2,2,2,2,1,2,1,2,2,0,2,2,1,2,1,2,2,2,2],
		[1,1,1,1,1,1,1,2,0,0,0,2,1,1,1,1,1,1,1],
		[2,2,2,2,1,2,1,2,0,0,0,2,1,2,1,2,2,2,2],
		[0,0,0,2,1,2,1,2,2,2,2,2,1,2,1,2,0,0,0],
		[0,0,0,2,1,2,1,1,1,1,1,1,1,2,1,2,0,0,0],
		[2,2,2,2,1,2,1,2,2,2,2,2,1,2,1,2,2,2,2],
		[2,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,2],
		[2,1,2,2,1,2,2,2,1,2,1,2,2,2,1,2,2,1,2],
		[2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,2,1,1,2],
		[2,2,1,2,1,2,1,2,2,2,2,2,1,2,1,2,1,2,2],
		[2,1,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,1,2],
		[2,4,2,2,2,2,2,2,1,2,1,2,2,2,2,2,2,1,2],
		[2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
		[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
	]

	 var pacman = {
	 	x: 1,
	 	y: 1
	 };

	 var pinky = {
	 	x: 9,
	 	y: 10
	 }

	 var score = 0;

	 function displayWorld(){
	 	var output = '';

	 	for(var i=0; i<zawarudo.length; i++){
	 		output += "\n<div class='row'>\n";
	 		for(var j=0; j<zawarudo[i].length; j++){
	 			if(zawarudo[i][j] == 2)
	 				output += "<div class='brick'></div>";
	 			else if(zawarudo[i][j] == 1)
	 				output += "<div class='pellet'></div>";
	 			else if(zawarudo[i][j] == 0)
	 				output += "<div class='empty'></div>";
	 			else if (zawarudo[i][j] == 4)
	 				output += "<div class='cherries'></div>";
	 		}
	 		output += "\n</div>";
	 	}
	 	// console.log(output);
	 	document.getElementById('zawarudo').innerHTML = output;
	 }

	 function displayPacman(){
	 	document.getElementById('pacman').style.left = pacman.x*20+"px";
	 	document.getElementById('pacman').style.top = pacman.y*20+"px";	
	 }

	 function displayPinky(){
	 	document.getElementById('pinky').style.left = pinky.x*20+"px";
	 	document.getElementById('pinky').style.top = pinky.y*20+"px";	
	 }

	 function displayScore(){
	 	document.getElementById('score').innerHTML = score;
	 }
	 
	 displayWorld();
	 displayPacman();
	 displayScore();
	 displayPinky();

	 function movePinky(){
	 	var rand = Math.floor((4*Math.random()+1));
	 	console.log(rand);
	 	if(rand == 1){
	 		if(zawarudo[pinky.y][pinky.x-1] == 2){
	 		}else pinky.x--;
	 	}else if(rand == 2){
	 		if(zawarudo[pinky.y][pinky.x+1] == 2){
	 		}else pinky.x++;
	 	}else if(rand == 3){
	 		if(zawarudo[pinky.y-1][pinky.x] == 2){
	 		}else pinky.y--;
	 	}else if(rand == 4){
	 		if(zawarudo[pinky.y+1][pinky.x] == 2){
	 		}else pinky.y++;
	 	}

	 }

	 document.onkeydown = function(a){
	 	if(a.keyCode == 37){
	 		if(pacman.x<=0){
	 			pacman.x = 18;
	 		}else if(zawarudo[pacman.y][pacman.x-1] == 2){
	 		}else {pacman.x--;
	 	}	
	 	}else if( a.keyCode == 39){
	 		if(pacman.x>=18){
	 			pacman.x = 0;
	 		}else if(zawarudo[pacman.y][pacman.x+1] == 2){
	 		}else {pacman.x++;
	 	}
	 	}else if(a.keyCode == 38){
	 		if(zawarudo[pacman.y-1][pacman.x] == 2){
	 		}else {pacman.y--;
	 	}
	 	}else if(a.keyCode == 40){
	 		if(zawarudo[pacman.y+1][pacman.x] == 2){
	 		}else {
	 		pacman.y++;
	 	}
	 	}
	 	displayPinky();
	 	displayPacman();
	 	movePinky();
	 	if(zawarudo[pacman.y][pacman.x] == 1){
	 		zawarudo[pacman.y][pacman.x] = 0;
	 		score +=10;
	 		displayWorld();
	 		displayScore();
	 	}
	 	if(zawarudo[pacman.y][pacman.x] == 4){
	 		zawarudo[pacman.y][pacman.x] = 0;
	 		score +=50;
	 		displayWorld();
	 		displayScore();
	 	}
	 	if(zawarudo[pacman.y] == zawarudo[pinky.y]){
	 		if(zawarudo[pacman.x] == zawarudo[pinky.x]){
	 			console.log('ran into Pinky');
	 			score -=100;
	 			displayWorld();
	 			displayScore();
	 		}
	 	}
	 }