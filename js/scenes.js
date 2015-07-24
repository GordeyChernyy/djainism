// -------------------------------- sc 1 ----------------------------- //
var title;
var tarWalk;
var tarStop;

function sc1Load(){
	title = new Sprite(538, 168, 10);
	title.load('images/1/title/', 1);
	tarWalk = new Sprite(172, 134, 8);
	tarWalk.load('images/1/tarWalk/', 7);
	tarStop = new Sprite(110, 180, 8);
	tarStop.load('images/1/tarStop/', 1);
	once = true;
}
function sc1AnimationCheck(){
  if(
    title.isMove === false &&
    tarStop.isMove === false &&
    tarWalk.isMove === false 
  ) 
  {isAnimate = false;}
  else{ isAnimate = true;}
}
function sc1Hide(){
  title.hide();
  tarStop.hide();
  tarWalk.hide();
  once = true;
}
function sc1firstLoad () {
	title.moveTop(132);
	title.moveTo(132, 333, 100, 1);
	tarWalk.moveLeft(393);
	tarWalk.moveTo(645, 393, 100, 0);
	tarTalk.moveToBottom();
	bubbleSetup(); 
	tarTalk.moveBottom(27);

}
function sc1Intro(){
	title.moveTop(132);
	title.moveTo(132, 333, 100, 1);
	tarWalk.moveLeft(393);
	tarWalk.moveTo(645, 393, 100, 0); 
}
function sc1Update(){
	if (!tarWalk.isMove) {
	tarStop.pos(659, 363);
	tarWalk.moveLeft(393);
	if (once) { showElement('bubble1'); once = false; }
	}else{
	tarStop.pos(0, 0);
	tarStop.moveTop(132);
	}
	title.update();
	tarStop.update();
	tarWalk.update();
}

function showElement(id){
	document.getElementById(id).style.display='';
	print('id show = '+id);
}
function hideElement(id){
	document.getElementById(id).style.display='none';
}
function sc1Outro(){
	hideElement('bubble1');
	title.moveToBottom(132, 50, 1);
	tarStop.moveToBottom(659, 50, 1);
}
// -------------------------------- sc 2 ----------------------------- //
var buddha;
var tarSit;
var tarJump;
var palmTree1;
var palmTree2;
var mouth;
function sc2Load(){
	palmTree1 = new Sprite(256, 306, 15);
	palmTree2 = new Sprite(148, 171, 28);
	buddha = new Sprite(479, 386, 6);
	tarSit = new Sprite(453, 410, 5);
	mouth = new Sprite(37, 19, 5);
	palmTree1.load('images/2/palmTree1/', 1);
	palmTree2.load('images/2/palmTree2/', 1);
	buddha.load('images/2/buddha/', 1);
	tarSit.load('images/2/tarSit/', 1);
	mouth.load('images/2/mouth/', 4);
}
function sc2AnimationCheck(){
  if(
    buddha.isMove === false &&
    tarSit.isMove === false &&
    palmTree1.isMove === false &&
    palmTree2.isMove === false 
  ) 
    {isAnimate = false;}
  else{ isAnimate = true;}
}
function sc2Hide(){
  buddha.hide();
  tarSit.hide();
  palmTree1.hide();
  palmTree2.hide();
  mouth.hide();
	once = true;
}
function sc2Intro(){
  buddha.moveBottom(163);
  tarSit.moveBottom(242);
  palmTree1.moveBottom(28);
  palmTree2.moveBottom(463);
  mouth.moveBottom(373);
  buddha.moveTo(163, 571, 20, 1);
  tarSit.moveTo(242, 426, 50, 1);
  palmTree1.moveTo(28, 276, 100, 1);
  palmTree2.moveTo(463, 200, 150, 1);
  mouth.moveTo(373, 543, 50, 1);
  tarTalk.moveToBottom(27, 50, 1);
}
function sc2Update(){
if (once && !isAnimate) { showElement('bubble2'); once = false; }
  mouth.update();
  buddha.update();
  tarSit.update();
  palmTree1.update();
  palmTree2.update();
  
}
function sc2Outro(){
  buddha.moveToBottom(163, 50, 1);
  tarSit.moveToBottom(242, 30, 1);
  mouth.moveBottom(373);
  palmTree1.moveToBottom(28, 20, 1);
  palmTree2.moveToBottom(463, 10, 1);
  hideElement('bubble2');
}
// -------------------------------- sc 3 ----------------------------- //
var sweepMan;
var watchMan;
function sc3Load(){
	sweepMan = new Sprite(306, 473, 10);
	watchMan = new Sprite(323, 207, 6);
	sweepMan.load('images/3/sweepMan/', 6);
	watchMan.load('images/3/watchMan/', 1);
}
function sc3AnimationCheck(){
  if(
    sweepMan.isMove === false &&
    watchMan.isMove === false  
  ) {isAnimate = false;}
  else{ isAnimate = true;}
}
function sc3Hide(){
  sweepMan.hide();
  watchMan.hide(); 
  once = true;
}
function sc3Intro(){
  watchMan.moveLeft(388);
  sweepMan.moveLeft(139);
  sweepMan.moveTo(135, 139, 50, 1);
  watchMan.moveTo(345, 388, 100, 1);
  tarTalk.moveTo(27, 662, 50, 1);
}
function sc3Update(){
	if (once && !isAnimate) { showElement('bubble3'); once = false; }
  sweepMan.update();
  watchMan.update();
}
function sc3Outro(){
  sweepMan.moveToBottom(135, 50, 1);
  watchMan.moveToBottom(345, 50, 1);
  hideElement('bubble3');
}
// -------------------------------- sc 4 ----------------------------- //
var prince;
var jarLeft;
var jarRight;
var princeToBuddha;
// prince(288, 104, 240, 505)
// jarLeft(127, 312, 174, 225)
// jarRight(515, 312, 174, 225)
function sc4Load(){
	prince = new Sprite(240, 505, 10);
	princeToBuddha = new Sprite(220, 555, 10);
	jarLeft = new Sprite(174, 225, 20);
	jarRight = new Sprite(174, 225, 20);
	jarLeft.load('images/4/jar/', 1);
	jarRight.load('images/4/jar/', 1);
	prince.load('images/4/prince/', 1);
	princeToBuddha.loadAnimation('images/4/princeToBuddha/', 3, 4, 7);
	prince.addButton(function(){
						princeToBuddha.isOver = true;
						col3();
						princeToBuddha.isPlay = true;
						jarLeft.moveToBottom(127, 70, 1);
						jarRight.moveToBottom(515, 70, 1);	
					}, 
					 function(){
					 	col4();
					 	princeToBuddha.isOver = false;
					 	jarLeft.moveTo(127, 312, 70, 1);
						jarRight.moveTo(515, 312, 70, 1);
					 });
	prince.setButton(346, 285, 142, 201);
}
function sc4AnimationCheck(){
  if(
	prince.isMove === false &&
	jarLeft.isMove === false &&
	jarRight.isMove === false 
  ) {isAnimate = false;}
  else{ isAnimate = true;}
}
function sc4Hide(){
	prince.hide();
	prince.hideButton();
	princeToBuddha.hide();
	jarLeft.hide();
	jarRight.hide();
	once = true;
}
function sc4Intro(){
	prince.moveTop(288);
	princeToBuddha.isOut = true;
	princeToBuddha.pos(307, 60);
	jarLeft.moveBottom(127);
	jarRight.moveBottom(515);
	prince.hideButton();
	prince.moveTo(288, 104, 70, 1);
	jarLeft.moveTo(127, 312, 70, 1);
	jarRight.moveTo(515, 312, 70, 1);
}
function sc4Update(){
	princeToBuddha.updateAnimation();
	if (once && !isAnimate) { showElement('bubble4'); once = false; }
	if (!princeToBuddha.isPlay || princeToBuddha.index == 8) {
		prince.update();
		prince.isVisible = true;
	}else{
		if (princeToBuddha.index==1) {
			if(prince.isVisible) prince.hide();
		}
	}
	
	if(!prince.isMove) {prince.updateButton();}else{
		prince.hideButton();
	}
	jarLeft.update();
	jarRight.update();
}

function sc4Outro(){
	prince.moveToBottom(288, 70, 1);
	prince.hideButton();
	jarLeft.moveToBottom(127, 70, 1);
	jarRight.moveToBottom(515, 70, 1);	
	hideElement('bubble4');
}
// -------------------------------- sc 5 ----------------------------- //
var eyeStone1;
var eyeStone2;
var eyeTree1;
var eyeTree2;
var mahavitra;
var stone1;
var stone2;
var tree1;
var tree2;
function sc5Load(){
	tree1 = new Sprite(187,188, 50);
	eyeTree1 = new Sprite(88, 121, 50);
	stone1 = new Sprite(225, 201, 12);
	eyeStone1 = new Sprite(74, 104, 12);
	tree2 = new Sprite(465, 469, 7);
	eyeTree2 = new Sprite(180, 251, 7);
	mahavitra = new Sprite(192, 238, 5);
	stone2 = new Sprite(454, 407, 3);
	eyeStone2 = new Sprite(180, 251, 3);
	tree1.load('images/5/tree/', 1);
	eyeTree1.loadAnimation('images/5/eye/', 2, 7, 9);
	stone1.load('images/5/stone/', 1);
	eyeStone1.loadAnimation('images/5/eye/', 2, 7, 9);
	tree2.load('images/5/tree/', 1);
	eyeTree2.loadAnimation('images/5/eye/', 2, 7, 9);
	mahavitra.load('images/5/mahavitra/', 1);
	stone2.load('images/5/stone/', 1);
	eyeStone2.loadAnimation('images/5/eye/', 2, 7, 9);
	tree1.addButton(function(){eyeTree1.isOver=true; eyeTree1.isPlay = true;}, 
					function(){eyeTree1.isOver=false;});
	tree1.setButton(92, 277, 124, 109);
	
	stone1.addButton(function(){eyeStone1.isOver=true; eyeStone1.isPlay = true;}, 
					function(){eyeStone1.isOver=false;});
	stone1.setButton(538, 437, 107, 67);
	
	tree2.addButton(function(){eyeTree2.isOver=true; eyeTree2.isPlay = true;}, 
					function(){eyeTree2.isOver=false;});
	tree2.setButton(227, 115, 348, 271);
	
	stone2.addButton(function(){eyeStone2.isOver=true; eyeStone2.isPlay = true; }, 
					function(){eyeStone2.isOver=false;});
	stone2.setButton(163, 561, 232, 125);
}
function sc5AnimationCheck(){
  if(
  	tree1.isMove === true 
  ) {isAnimate = true;}
  else{ isAnimate = false;}	
}
function sc5Hide(){
	tree1.hide();
	stone1.hide();
	tree2.hide();
	mahavitra.hide();
	stone2.hide();

	tree1.hideButton();
	stone1.hideButton();
	tree2.hideButton();
	stone2.hideButton();

	eyeTree1.hide();
	eyeStone1.hide();
	eyeTree2.hide();
	eyeStone2.hide();
	once = true;
}
function sc5Intro(){
	tree1.moveBottom(59);
	stone1.moveBottom(467);
	tree2.moveBottom(171);
	mahavitra.moveBottom(329);
	stone2.moveBottom(29);

	eyeTree1.moveBottom(96);
	eyeStone1.moveBottom(556);
	eyeTree2.moveBottom(318);
	eyeStone2.moveBottom(189);

	eyeTree1.isOut=true;
	eyeStone1.isOut=true;
	eyeTree2.isOut=true;
	eyeStone2.isOut=true;

	tree1.moveTo(59, 258, 50, 1);
	stone1.moveTo(467, 307, 50, 1);
	tree2.moveTo(171, 66, 50, 1);
	mahavitra.moveTo(329, 339, 50, 1);
	stone2.moveTo(29, 302, 50, 1);
	eyeTree1.moveTo(96, 304, 50, 1);
	eyeStone1.moveTo(556, 438, 50, 1);
	eyeTree2.moveTo(318, 156, 50, 1);
	eyeStone2.moveTo(189, 564, 50, 1);
	tarTalk.moveTo(44, 666, 50, 1);
}
function sc5Update(){
	tree1.update();
	stone1.update();
	tree2.update();
	mahavitra.update();
	stone2.update();
	if (once && !isAnimate) { showElement('bubble5'); once = false; }
	if(!isAnimate) {
		tree1.updateButton();
	 	stone1.updateButton();
	 	tree2.updateButton();
	 	stone2.updateButton();
	 }else{
		tree1.hideButton();
	 	stone1.hideButton();
	 	tree2.hideButton();	
	 	stone2.hideButton(); 	
	}
	eyeTree1.updateAnimation();
	eyeStone1.updateAnimation();
	eyeTree2.updateAnimation();
	eyeStone2.updateAnimation();
}
function sc5Outro(){
	tree1.moveToBottom(59, 50);
	stone1.moveToBottom(467, 50);
	tree2.moveToBottom(171, 50);
	mahavitra.moveToBottom(329, 50);
	stone2.moveToBottom(29, 50);
	eyeTree1.moveToBottom(96, 50);
	eyeStone1.moveToBottom(556, 50);
	eyeTree2.moveToBottom(318, 50);
	eyeStone2.moveToBottom(189, 50);

	tree1.hideButton();
	stone1.hideButton();
	tree2.hideButton();
	stone2.hideButton();
	hideElement('bubble5');
}

// -------------------------------- sc 6 ----------------------------- //
// hand(26, 525, 797, 364)
// leafFall(7, 205, 797, 491)
// leaf(24, 448, 695, 281)
var hand;
var leafFall;
var leaf;
function sc6Load(){
	hand = new Sprite(797, 364, 7);
	leafFall = new Sprite(797, 491, 5);
	leaf = new Sprite(695, 281, 5);
	hand.load('images/6/hand/', 1);
	leafFall.load('images/6/leafFall/', 7);
	leaf.load('images/6/leaf/', 1);
}
function sc6AnimationCheck(){
  if(
	hand.isMove  === false &&
	leafFall.isMove  === false &&
	leaf.isMove  === false 
  ) {isAnimate = false;}
  else{ isAnimate = true;}
}
function sc6Hide(){
	hand.hide();
	leafFall.hide();
	leaf.hide();
	once = true;
}
function sc6Intro(){
	hand.moveBottom(26);
	leafFall.moveTop(7);
	leaf.pos(24, 448);
	leafFall.moveTo(7, 205, 150, 1);
	hand.moveTo(26, 525, 100, 1);
	tarTalk.moveTo(607, 38, 70, 1);
}
function sc6Update(){
	if (once && !isAnimate) { showElement('bubble6'); once = false; }
	if (!leafFall.isMove) {
		leafFall.hide();
		leaf.update();
	}else{
		leafFall.update();		
	}
	hand.update();
}
function sc6Outro(){
	leaf.moveToBottom(24, 50, 1);
	hand.moveToBottom(26, 50, 1);
	hideElement('bubble6');
}
// -------------------------------- sc 7 ----------------------------- //
// shovel(163, 41, 147, 285)
// fish(527, 78, 70, 254)
// faucet(355, 346, 164, 93)
// filter(280, 408, 157, 174)
// denySignLeft(119, 134, 225, 235)
// denySignRight(438, 134, 225, 235)
var shovel;
var fish;
var faucet;
var filter;
var denySignLeft;
var denySignRight;
function sc7Load(){
	shovel = new Sprite(147, 285, 10);
	fish = new Sprite(70, 254, 10);
	faucet = new Sprite(164, 93, 10);
	filter = new Sprite(157, 174, 10);
	denySignLeft = new Sprite(225, 235, 10);
	denySignRight = new Sprite(225, 235, 10);
	shovel.load('images/7/shovel/', 1);
	fish.load('images/7/fish/', 1);
	faucet.load('images/7/faucet/', 1);
	filter.load('images/7/filter/', 1);
	denySignLeft.loadAnimation('images/7/denySign/', 6, 7, 11);
	denySignRight.loadAnimation('images/7/denySign/', 6, 7, 11);

	fish.addButton( function(){denySignRight.isOver = true; denySignRight.isPlay = true;}, 
					function(){denySignRight.isOver = false;});
	fish.setButton(527, 78, 70, 254);
	faucet.addButton(function(){faucet.isOver = true;}, 
					 function(){faucet.isOver = false;});
	faucet.setButton(355, 346, 164, 93);
	shovel.addButton( function(){denySignLeft.isOver = true; denySignLeft.isPlay = true;}, 
					  function(){denySignLeft.isOver = false;});
	shovel.setButton(163, 41, 147, 285);
}
function sc7AnimationCheck(){
  if(
	shovel.isMove === false &&
	fish.isMove === false &&
	faucet.isMove === false &&
	filter.isMove === false &&
	denySignLeft.isMove === false && 
	denySignRight.isMove === false 
  ) {isAnimate = false;}
  else{ isAnimate = true;}
}
function sc7Hide(){
	shovel.hideButton();
	fish.hideButton();
	faucet.hideButton();
	shovel.hide();
	fish.hide();
	faucet.hide();
	filter.hide();
	denySignLeft.hide();
	denySignRight.hide();
	once = true;
}
function sc7Intro(){
	shovel.moveTop(163);
	fish.moveTop(527);
	faucet.moveTop(355);
	filter.moveTop(280);
	denySignLeft.pos(119, 134);
	denySignRight.pos(438, 134);

	shovel.moveTo(163, 41, 50, 1);
	fish.moveTo(527, 78, 50, 1);
	faucet.moveTo(355, 346,50, 1);
	filter.pos(280, 408);	
	tarTalk.moveTo(35, 645, 50, 1);
	hideElement('bubble9');
}
function sc7Update(){
	if (once && !isAnimate) { showElement('bubble7'); once = false; }
	shovel.update();
	fish.update();
	faucet.update();
	
	if(!isAnimate) {
		shovel.updateButton();
		fish.updateButton();
		faucet.updateButton();
	}else{
		shovel.hideButton();
		fish.hideButton();
		faucet.hideButton();
	}
	
	if (faucet.isOver) {
		filter.update();
		filter.isVisible = true;
	}else{
		if (filter.isVisible) {filter.hide();}
	}
	denySignRight.updateAnimation();
	denySignLeft.updateAnimation();
}
function sc7Outro(){
	shovel.moveToBottom(163, 50, 1);
	fish.moveToBottom(527, 50, 1);
	faucet.moveToBottom(355,50, 1);
	hideElement('bubble7');
}
// -------------------------------- sc 8 ----------------------------- //
var slider;
var deadMan =[];
function sc8Load(){
	for (var i = 0; i < 6; i++) {
		var img = new Sprite(232, 356, 10);
		img.load('images/8/s'+i+'/', 1);
		deadMan.push(img);
	}
	slider = createSlider(0, 5, 0);
	slider.value(0);
	slider.hide();
}
function sc8AnimationCheck(){
  if(
  	deadMan[0].isMove === false &&
  	deadMan[1].isMove === false &&
  	deadMan[2].isMove === false &&
  	deadMan[3].isMove === false &&
  	deadMan[4].isMove === false &&
  	deadMan[5].isMove === false
  ) {isAnimate = false;}
  else{ isAnimate = true;}
}
function sc8Hide(){
	slider.hide();
	for (var i = 0; i < 6; i++) {
		if(deadMan[i].isVisible) deadMan[i].hide();
	}
	once = true;
}
function sc8Intro(){
	slider.value(0);
	for (var i = 0; i < 6; i++) {
		deadMan[i].moveTop(274);
		deadMan[i].pos(274, 120);
	}
	deadMan[0].moveTop(274);
	deadMan[0].moveTo(274, 120, 50, 1);
	var sliderWidth = 200;
	slider.size(sliderWidth, 20);
	slider.position(windowWidth/2-sliderWidth/2, windowHeight/2);
	tarTalk.moveTo(44, 535, 50, 1);
	hideElement('bubble9');
}
function sc8Update(){
	if (once && !isAnimate) { showElement('bubble8'); once = false; }
	if (isAnimate) {slider.show();}
	for (var i = 0; i < 6; i++) {
		if (i!=slider.value()) {
			if(deadMan[i].isVisible) deadMan[i].hide();
		}
	}
	var index = deadMan[slider.value()].index;
	deadMan[slider.value()].frames[index].show();
	deadMan[slider.value()].update();
	deadMan[slider.value()].isVisible = true;
}
function sc8Outro(){
	deadMan[slider.value()].moveToBottom(274,50, 1);
	hideElement('bubble8');
	tarTalk.moveTo(323, 47, 100, 1);
	showElement('bubble9');
}
