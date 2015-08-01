
function bubbleSetup(){
	var pos = [
	/*1*/		new Translate(320, 50, 419, 178), 
	/*2*/		new Translate(154, 80, 480, 223), 
	/*3*/		new Translate(200, 659, 559, 174), 
	/*4*/		new Translate(200, 659, 559, 174), 
	/*5*/		new Translate(200, 659, 559, 174), 
	/*6*/		new Translate(49, 43, 431, 162), 
	/*7*/		new Translate(200, 659, 559, 174), 
	/*8*/		new Translate(200, 570, 559, 174), 
	/*9*/		new Translate(112, 223, 573, 440) 
			  ];
	for (var i = 1; i <= 9; i++) {
		document.getElementById('bubble'+i).style.display='none';
		document.getElementById('bubble'+i).style.position = "absolute";
		document.getElementById('bubble'+i).style.size = "relative";
		document.getElementById('bubble'+i).style.left = pos[i-1].x+"px";
		document.getElementById('bubble'+i).style.top = pos[i-1].y+"px";
		document.getElementById('bubble'+i).style.width = pos[i-1].w+"px";
		document.getElementById('bubble'+i).style.height = 'auto';
	}

} 
