var ColorTool = function(){
	this.color = color(0, 0, 0, 0);
	this.r = 0;
	this.g = 0;
	this.b = 0;
	this.a = 0;
};
ColorTool.prototype.set = function(r, g, b, a, speed){
	this.destColr = r;
	this.destColg = g;
	this.destColb = b;
	this.destCola = a;
	this.speed = speed;
};
ColorTool.prototype.fade = function() {
	this.r += (this.destColr - this.r)*this.speed;
	this.g += (this.destColg - this.g)*this.speed;
	this.b += (this.destColb - this.b)*this.speed;
	this.a += (this.destCola - this.a)*this.speed;
};	
ColorTool.prototype.update = function(){
	this.fade();
	this.color = color(this.r, this.g, this.b, this.a);
};