function random (min, max) {
	return Math.floor((Math.random() * max) + min);
}
function print (value) {
	console.log(value);
}
function showElement(id){
	document.getElementById(id).style.display='';
}
function hideElement(id){
	document.getElementById(id).style.display='none';
}
var Bubble = function(){
	this.div = document.createElement("div");
	this.div.setAttribute("class", "bubble");
	document.body.appendChild(this.div);
	this.x = 0;
	this.y = 0;
	this.w = 0;
	this.h = 0;
};
Bubble.prototype.setup = function(x, y, w, h) {
	var t = new Translate(x, y, w, h);
    this.x = t.x;
    this.y = t.y;
    this.w = t.w;
    this.h = t.h;
 	this.set(this.x, this.y, this.w, this.h);
};
Bubble.prototype.set = function(x, y, w, h){
 	this.div.style.left = x+"px";
	this.div.style.top = y+"px";
	var border = 10;
	if ((x+w)>windowWidth) {
		this.div.style.width = (windowWidth-x-border)+"px";
	}else{
		this.div.style.width = w+"px";
	}
	if ((y+h)>windowHeight) {
		this.div.style.height = (windowHeight-y-border)+'px';  
	}else{
		this.div.style.height = h+'px';  	
	}
};
Bubble.prototype.update = function() {
	this.move();
 	this.set(this.x, this.y, this.w, this.h);
};
Bubble.prototype.moveTo = function(x, y, w, h, duration) {
    var t = new Translate(x, y, w, h);
    this.startX = this.x;
    this.startY = this.y;
    this.endX = t.x;
    this.endY = t.y;
    this.startw = this.w;
    this.starth = this.h;
    
    this.endw = t.w;
    this.endh = t.h;
    this.duration = duration;
    this.timer = 0;
    this.isMove = true;
};
Bubble.prototype.move = function() {
    if (this.timer < this.duration) {
		this.x = cubicInOut(this.timer, this.startX, this.endX - this.startX, this.duration);
		this.y = cubicInOut(this.timer, this.startY, this.endY - this.startY, this.duration);
		this.w = cubicInOut(this.timer, this.startw, this.endw - this.startw, this.duration);
		this.h = cubicInOut(this.timer, this.starth, this.endh - this.starth, this.duration);
		this.timer++;
    }
};