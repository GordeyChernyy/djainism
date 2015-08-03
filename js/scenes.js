
function loadScenes() {
    sc1 = new Scene();
    sc2 = new Scene();
    sc3 = new Scene();
    sc4 = new Scene();
    sc5 = new Scene();
    sc6 = new Scene();
    sc7 = new Scene();
    sc8 = new Scene();
    sc1.add('title','title', 1, 132, 333, 538, 168, 10);
    sc1.add('tarWalk','tarWalk', 7, 645, 393, 172, 134, 8);
    sc1.add('tarStop','tarStop', 1, 659, 363, 98, 151, 8);
    sc2.add('palmTree1','palmTree1', 1, 28, 276, 256, 306, 15);
    sc2.add('palmTree2','palmTree2', 1, 463, 200, 148, 171, 28);
    sc2.add('buddha','buddha', 1, 178, 592, 479, 386, 6);
    sc2.add('tarSit','tarSit', 1, 257, 426, 453, 410, 5);
    sc2.add('mouth','mouth', 4, 387, 543, 42, 22, 5);
    sc3.add('sweepMan','sweepMan', 6, 135, 139, 306, 473, 10);
    sc3.add('watchMan','watchMan', 1, 345, 388, 323, 207, 6);
    sc4.add('jarLeft','jar', 1, 127, 312, 174, 225, 20); // left
    sc4.add('jarRight','jar', 1, 515, 312, 174, 225, 20); // right
    sc4.add('prince','prince', 1, 288, 104, 240, 505, 10);
    sc4.add('princeToBuddha','princeToBuddha', 7, 288, 104, 240, 505, 10);
    sc4Setup();
    sc5.add('tree1','tree', 1, 59, 258, 187, 188, 50); // tree1
    sc5.add('eyeTree1','eye', 9, 96, 304, 88, 121, 50); // eyeTree1
    sc5.add('stone1','stone', 1, 467, 307, 225, 201, 12); //stone1
    sc5.add('eyeStone1','eye', 9, 556, 438, 74, 104, 12); //eyeStone1
    sc5.add('tree2','tree', 1, 171, 66, 465, 469, 7); //tree2
    sc5.add('eyeTree2','eye', 9, 318, 156, 180, 251, 7); //eyeTree2
    sc5.add('mahavitra','mahavitra', 1, 329, 339, 192, 238, 5);
    sc5.add('stone2','stone', 1, 29, 302, 454, 407, 3); //stone2
    sc5.add('eyeStone2','eye', 9, 189, 564, 180, 251, 3); //eyeStone2
    sc5Setup();
    sc6.add('hand','hand', 1, 26, 525, 797, 364, 7);
    sc6.add('leafFall','leafFall', 7, 7, 205, 797, 491, 5);
    sc6.add('leaf','leaf', 1, 24, 448, 695, 281, 5);
    sc7.add('shovel','shovel', 1, 163, 41, 147, 285, 15);
    sc7.add('fish','fish', 1, 527, 78, 70, 254, 12);
    sc7.add('faucet','faucet', 1, 355, 346, 164, 93, 5);
    sc7.add('filter','filter', 1, 280, 408, 157, 174, 5);
    sc7.add('denySignLeft','denySign', 11, 119, 134, 225, 235, 12); // denySignLeft
    sc7.add('denySignRight','denySign', 11, 438, 134, 225, 235, 9); // denySignRight
    sc7Setup();
    sc8Setup();
    sc1firstLoad();
    tarTalk = new Sprite();
    tarTalk.load('tarTalk', 3);
    stage.addChild(tarTalk.movie);
    tarTalk.set('tarTalk', 0, 0, 121, 169, 5);
    tarTalk.setBottom();
    tarTalk.movie.play();
    
}
// ----------------------------------- Buttons
function bOver(_sc, id){
	_sc.get(id).setVisible(true);
	_sc.get(id).playStart();
}
function bOut(_sc, id){
	_sc.get(id).hideAfterPlay = true;
	_sc.get(id).playEnd();
}
// ----------------------------------- SC 1
function sc1firstLoad() {
    sc1.showAfterMove();
    sc1.get('title').setTop();
    sc1.get('title').moveToOrigin(50, 'cubic');
    sc1.get('tarWalk').setLeft();
    sc1.get('tarWalk').moveToOrigin(150, 'linear');
    sc1.get('tarStop').setVisible(false);
    sc1.play();

}

function sc1Intro() {
    sc1.showAfterMove();
    sc1.get('title').setTop();
    sc1.get('title').moveToOrigin(50, 'cubic');
    sc1.get('tarWalk').setLeft();
    sc1.get('tarWalk').moveToOrigin(150, 'linear');
    sc1.get('tarStop').setOrigin();
    sc1.play();
    bubble.moveTo(320, 50, 419, 178, 100);
}

function sc1Update() {
    var tarWalk = sc1.get('tarWalk');
    var tarStop = sc1.get('tarStop');
    if (!tarWalk.isMove) {
        tarStop.setVisible(true);
        tarWalk.setVisible(false);
    }
    sc1.update(mX, mY);
}

function sc1Outro() {
    sc1.hideAfterMove();
    sc1.get('title').moveToBottom(50, 'cubic');
    sc1.get('tarStop').moveToBottom(50, 'cubic');
}
// ----------------------------------- SC 2
function sc2Intro() {
    sc2.showAfterMove();
    sc2.get('buddha').setBottom();
    sc2.get('tarSit').setBottom();
    sc2.get('palmTree1').setBottom();
    sc2.get('palmTree2').setBottom();
    sc2.get('mouth').setBottom();
    sc2.get('buddha').moveToOrigin(20, 'cubic');
    sc2.get('tarSit').moveToOrigin(50, 'cubic');
    sc2.get('palmTree1').moveToOrigin(100, 'cubic');
    sc2.get('palmTree2').moveToOrigin(150, 'cubic');
    sc2.get('mouth').moveToOrigin(50, 'cubic');
    sc2.play();
    tarTalk.moveToBottom(50, 'cubic');
    bubble.moveTo(154, 80, 480, 223, 100);
}

function sc2Update() {
    sc2.update(mX, mY);
}

function sc2Outro() {
    sc2.hideAfterMove();
    sc2.get('buddha').moveToBottom(50, 'cubic');
    sc2.get('tarSit').moveToBottom(30, 'cubic');
    sc2.get('mouth').setBottom();
    sc2.get('palmTree1').moveToBottom(20, 'cubic');
    sc2.get('palmTree2').moveToBottom(10, 'cubic');
}
// ----------------------------------- SC 3
function sc3Intro() {
    sc3.showAfterMove();
    sc3.get('watchMan').setLeft();
    sc3.get('sweepMan').setLeft();
    sc3.get('sweepMan').moveToOrigin(50, 'cubic');
    sc3.get('watchMan').moveToOrigin(100, 'cubic');
    sc3.play();
    tarTalk.setVisible(true);
	tarTalk.moveTo(27, 662, 50, 'cubic');
	bubble.moveTo(200, 600, 559, 174, 100);
}

function sc3Update() {
    sc3.update(mX, mY);
}

function sc3Outro() {
	sc3.hideAfterMove();
    sc3.get('sweepMan').moveToBottom(50, 'cubic');
    sc3.get('watchMan').moveToBottom(50, 'cubic');
}
// ----------------------------------- SC 4
function sc4Setup(){
	sc4.get('princeToBuddha').setupAnimation(3, 4, 7);
	sc4.get('prince').movie.interactive = true;
	sc4.get('prince').movie.on('mouseover', function(){
		sc4.get('prince').setVisible(false);
		sc4.get('princeToBuddha').setVisible(true);
		sc4.get('princeToBuddha').playStart();
	});	
	sc4.get('princeToBuddha').movie.interactive = true;
	sc4.get('princeToBuddha').movie.on('mouseout', function(){
		// sc4.get('prince').setVisible(true);
		sc4.get('princeToBuddha').hideAfterPlay = true;
		sc4.get('princeToBuddha').playEnd();
	});
}
function sc4Intro() {
	sc4.showAfterMove();
    sc4.get('prince').setTop();
    sc4.get('princeToBuddha').setOrigin();
    sc4.getByIndex(0).setBottom();
    sc4.getByIndex(1).setBottom();
    sc4.get('prince').moveToOrigin(70, 'cubic');
    sc4.getByIndex(0).moveToOrigin(70, 'cubic');
    sc4.getByIndex(1).moveToOrigin(70, 'cubic');
    sc4.play();
    bubble.moveTo(200, 600, 559, 174, 100);
}

function sc4Update() {
	sc4.update(mX, mY);
	sc4.get('princeToBuddha').updateAnimation();
	var buddhaVisible = sc4.get('princeToBuddha').movie.visible;
	var princeVisible = sc4.get('prince').movie.visible;
	if (!buddhaVisible && !princeVisible) {
		sc4.get('prince').setVisible(true);
	}
}

function sc4Outro() {
	sc4.hideAfterMove();
    sc4.get('prince').moveToBottom(70, 'cubic');
    sc4.getByIndex(0).moveToBottom(70, 'cubic');
    sc4.getByIndex(1).moveToBottom(70, 'cubic');
}
// ----------------------------------- SC 5

function sc5Setup(){
	sc5.get('eyeTree1').setupAnimation(2, 7, 9);
	sc5.get('eyeStone1').setupAnimation(2, 7, 9);
	sc5.get('eyeTree2').setupAnimation(2, 7, 9);
	sc5.get('eyeStone2').setupAnimation(2, 7, 9);
	sc5.get('tree1').addButton(
		function(){ bOver(sc5, 'eyeTree1');}, 
	    function(){ bOut(sc5, 'eyeTree1');});
	sc5.get('tree1').setButton(92, 277, 124, 109);
	sc5.get('stone1').addButton(
		function(){
			sc5.get('eyeStone1').setVisible(true);
			sc5.get('eyeStone1').playStart();
		}, 
		function(){
			sc5.get('eyeStone1').hideAfterPlay = true;
			sc5.get('eyeStone1').playEnd();
		});
	sc5.get('stone1').setButton(538, 437, 107, 67);
	
	sc5.get('tree2').addButton(
		function(){
			sc5.get('eyeTree2').setVisible(true);
			sc5.get('eyeTree2').playStart();
		}, 
		function(){
			sc5.get('eyeTree2').hideAfterPlay = true;
			sc5.get('eyeTree2').playEnd();
		});
	sc5.get('tree2').setButton(227, 115, 348, 271);
	
	sc5.get('stone2').addButton(
		function(){
			sc5.get('eyeStone2').setVisible(true);
			sc5.get('eyeStone2').playStart();
		}, 
		function(){
			sc5.get('eyeStone2').hideAfterPlay = true;
			sc5.get('eyeStone2').playEnd();
		});
	sc5.get('stone2').setButton(163, 561, 232, 125);
}
function sc5Intro() {
	sc5.showAfterMove();
    sc5.setAllBottom();
    sc5.moveAllToOrigin(20, 50, 'cubic');
    sc5.get('eyeTree1').showAfterMove = false;
    sc5.get('eyeStone1').showAfterMove = false;
    sc5.get('eyeTree2').showAfterMove = false;
    sc5.get('eyeStone2').showAfterMove = false;
    sc5.play();
    tarTalk.moveTo(44, 666, 50, 'cubic');
	bubble.moveTo(200, 600, 559, 174, 100);
}
function sc5Update() {
    sc5.update(mX, mY);
    if (!sc5.moveCheck()) {
        sc5.get('tree1').updateButton(mX, mY);
        sc5.get('stone1').updateButton(mX, mY);
        sc5.get('tree2').updateButton(mX, mY);
        sc5.get('stone2').updateButton(mX, mY);
    } else {
        sc5.get('tree1').hideButton();
        sc5.get('stone1').hideButton();
        sc5.get('tree2').hideButton();
        sc5.get('stone2').hideButton();
    }
    sc5.get('eyeTree1').updateAnimation();
    sc5.get('eyeStone1').updateAnimation();
    sc5.get('eyeTree2').updateAnimation();
    sc5.get('eyeStone2').updateAnimation();
}

function sc5Outro() {
	sc5.hideAfterMove();
    sc5.moveAllToBottom(20, 50, 'cubic');
    sc5.get('tree1').hideButton();
    sc5.get('stone1').hideButton();
    sc5.get('tree2').hideButton();
    sc5.get('stone2').hideButton();
}

// ----------------------------------- SC 6
function sc6Intro() {
	sc6.showAfterMove();
    sc6.get('hand').setBottom();
    sc6.get('leafFall').setTop();
    sc6.get('leaf').setOrigin();
    sc6.get('leafFall').moveToOrigin(150, 'cubic');
    sc6.get('hand').moveToOrigin(100, 'cubic');
    sc6.play();
    tarTalk.moveTo(607, 38, 70, 'cubic');
	bubble.moveTo(49, 43, 431, 162, 100);
}

function sc6Update() {
    if (!sc6.get('leafFall').isMove) {
        sc6.get('leafFall').setVisible(false);
        sc6.get('leaf').setVisible(true);
    } else {
        sc6.get('leaf').setVisible(false);
    }
    sc6.update(mX, mY);
}

function sc6Outro() {
	sc6.hideAfterMove();
    sc6.get('leaf').moveToBottom(50, 'cubic');
    sc6.get('hand').moveToBottom(50, 'cubic');
}
// ----------------------------------- SC 7
function sc7Setup(){
	sc7.get('denySignLeft').setupAnimation(6, 7, 11);
	sc7.get('denySignRight').setupAnimation(6, 7, 11);
	sc7.get('shovel').addButton(
		function(){bOver(sc7, 'denySignLeft');},
		function(){bOut(sc7, 'denySignLeft');});
	sc7.get('shovel').setButtonToOrigin();
	sc7.get('fish').addButton(
		function(){bOver(sc7, 'denySignRight');},
		function(){bOut(sc7, 'denySignRight');});
	sc7.get('fish').setButtonToOrigin();
	sc7.get('faucet').addButton(
		function(){sc7.get('filter').setVisible(true);},
		function(){sc7.get('filter').setVisible(false);});
	sc7.get('faucet').setButtonToOrigin();
}
function sc7Intro() {
	sc7.showAfterMove();
    sc7.setAllTop();
	sc7.moveAllToOrigin(20, 70, 'cubic');
	sc7.get('filter').showAfterMove = false;
	sc7.get('denySignLeft').showAfterMove = false;
	sc7.get('denySignRight').showAfterMove = false;	
	sc7.play();
	tarTalk.moveTo(35, 645, 50, 'cubic');
	bubble.moveTo(200, 600, 559, 174, 100);
}

function sc7Update() {
	sc7.update(mX, mY);
	sc7.get('denySignLeft').updateAnimation(mX, mY);
	sc7.get('denySignRight').updateAnimation(mX, mY);
	sc7.get('shovel').updateButton(mX, mY);
	sc7.get('fish').updateButton(mX, mY);
	sc7.get('faucet').updateButton(mX, mY);
}

function sc7Outro() {
	sc7.hideAfterMove();
    sc7.moveAllToBottom(20, 70, 'cubic');
}
// ----------------------------------- SC 8
var slider;
function sc8Setup(){
	var translate = new Translate(290, 495, 261, 23);
	slider = document.createElement("INPUT");
	slider.setAttribute("id", "slider");
	slider.style.position = "absolute";
	slider.style.left = translate.x+'px';
	slider.style.top = translate.y+'px';
	slider.style.width = translate.w+'px';
	slider.setAttribute("type", "range");
	slider.setAttribute("min", "1");
	slider.setAttribute("max", "6");
	document.body.appendChild(slider);
	hideElement('slider');
	sc8.add('sliderMan1', 'sliderMan1_', 1, 305, 150, 217, 333, 9);
	sc8.add('sliderMan2', 'sliderMan2_', 1, 305, 150, 217, 333, 9);
	sc8.add('sliderMan3', 'sliderMan3_', 1, 305, 150, 217, 333, 9);
	sc8.add('sliderMan4', 'sliderMan4_', 1, 305, 150, 217, 333, 9);
	sc8.add('sliderMan5', 'sliderMan5_', 1, 305, 150, 217, 333, 9);
	sc8.add('sliderMan6', 'sliderMan6_', 1, 305, 150, 217, 333, 9);
}
function sc8Intro() {
	showElement('slider');
	slider.value = 1;
	sc8.showAfterMove();
	sc8.setAllTop();
	sc8.moveAllToOrigin(20, 20, 'cubic');
	sc8.play();
	tarTalk.moveTo(44, 535, 50, 'cubic');
	bubble.moveTo(200, 600, 559, 174, 100);
}

function sc8Update() {
	//     0 1 0 1 
	// mid 0   2    
	// print('slider.value = '+slider.value);
	var currentId = 'sliderMan'+slider.value;
	sc8.showCurrent(currentId);
	sc8.update(mX, mY);
}

function sc8Outro() {
	sc8.hideAfterMove();
	sc8.moveAllToBottom(20, 20, 'cubic');
	hideElement('slider');
	tarTalk.moveTo(323, 47, 100, 'cubic');
	bubble.moveTo(112, 223, 573, 440, 100);
}
function col1(){
	color.set(0.653061, 0.561224, 0.367347, 0, 0.01);
}
function col2(){
	color.set(0.173469 , 0.632653 , 0.443878, 0, 0.01);
}
function col3(){
	color.set(0.647959, 0.556122, 0.397959, 0, 0.01);
}
function col4(){
	color.set(1.0, 0.142857, 0.311224, 0, 0.01);
}
function col5(){
	color.set(0.403061, 0.72449, 0.5, 0, 0.01);
}
function col6(){
	color.set(0.841837, 0.520408, 0.933673, 0, 0.01);
}
function col7(){
	color.set(0.464286, 0.52551, 0.535714, 0, 0.01);
}
function col8(){
	color.set(0.392857, 0.581633, 0.331633, 0, 0.01);
}
function col9(){
	color.set(0.938776, 0.55102, 0.841837, 0, 0.01);
}
