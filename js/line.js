var Line = function(position) {
	this.offsetY = 0;
};
Line.prototype.setup = function(posY, xStep, yStep, yRange){
	this.posY = posY;
	this.xStep = xStep;
	this.yStep = yStep;
	this.yRange = yRange;
	this.strokeColor = color(0); //default
	this.enableFill = false;
};
Line.prototype.setPosY = function(posY){
	this.posY = posY;
};
Line.prototype.dragPosY = function(posY, speed){
	this.posY += (posY-this.posY)*speed;
};
Line.prototype.setFillColor = function(color){
	this.fillColor = color;
};
Line.prototype.run = function(){
	this.offsetY = this.inc(this.offsetY, this.yStep);
	this.draw(this.posY, this.xStep, this.yRange, this.offsetY);
};
Line.prototype.inc = function(value, speed){
	return value += speed; 
};
Line.prototype.draw = function(posY, xStep, yRange, offsetY){
	stroke(255);
	fill(this.fillColor);
	beginShape(); 
	var offsetX = 0; 
	beginShape();       
  	for (var x = 0; x <= width; x += width/30) {
  		var y = map(noise(offsetX, offsetY), 0, 1, posY-yRange/2, posY+yRange/2);
    	 
    	if (x > width-30) {
    		vertex(windowWidth, y);
    	}else{
    		vertex(x, y);
    	}
    	offsetX += xStep;
  	}
  	vertex(windowWidth, windowHeight);
  	vertex(0, windowHeight);
  	endShape(CLOSE);
};