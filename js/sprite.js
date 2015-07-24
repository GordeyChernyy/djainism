var Sprite = function(w, h, paralaxAmount){
  this.x = 0;
  this.y = 0;
  this.destX = 0;
  this.destY = 0;
  this.xIn = 0;
  this.yIn = 0;
  this.lastDestX = 0;
  this.lastDestY = 0;
  this.w = w;
  this.h = h;
  this.frames = [];
  this.paralaxAmount = paralaxAmount;
  this.time = 0;
  this.duration = 0;
  this.index = 0;
  this.framerate = 4;
  // for non-loop sprite
  this.midIndexStart = 0;
  this.midIndexEnd = 0;
  this.isEnd = true;
  this.isOver = false;
  this.isMove = false;
  this.easeFunction = 1; // 0-linear 1-smooth
  this.isVisible = true;
};
Sprite.prototype.addButton = function(funOver, funOut){
  this.button = createDiv('');
  this.button.hide();
  this.button.class('animButton');
  this.button.mouseOver(funOver);
  this.button.mouseOut(funOut);
};
Sprite.prototype.setButton = function(x, y, w, h){
  var canvasScaledWidth = (windowHeight*CANVAS_W)/CANVAS_H;
  var offsetX = (windowWidth - canvasScaledWidth)/2;
  this.buttonX = (x * canvasScaledWidth)/CANVAS_W+offsetX;
  this.buttonY = (y * windowHeight)/CANVAS_H; 
  this.buttonH = (h/CANVAS_H)*windowHeight;
  this.buttonW = (w/h)*this.buttonH;
};

Sprite.prototype.updateButton = function(){
  this.button.show();
  var paralaxX = (mX-windowWidth/2)/this.paralaxAmount;
  var paralaxY = (mY-windowHeight/2)/this.paralaxAmount;
  this.button.position(this.buttonX+paralaxX, this.buttonY+paralaxY);
  this.button.size(this.buttonW, this.buttonH);
};

Sprite.prototype.hideButton = function(){
  this.button.hide();
};

Sprite.prototype.updateAnimation = function(){
  this.move();
  this.addParalax();
  if (this.isPlay && this.isFrameRate()) {
    this.playAnimation(this.index);
    this.index = this.incIndexAnimation(this.index);
  }
};
Sprite.prototype.incIndexAnimation = function(index){
  if (!this.isOver) { // play from mid to end
    if (index<this.frames.length) {
      print('index = '+index);
      index++;
    }
  }else{
    if (index == this.frames.length) { // when animation end
      index = 0;
    }else{
      index++;
      if (index==this.midIndexEnd+1) {
        index = this.midIndexStart;
      }
    }
  }
  return index;
};
Sprite.prototype.playAnimation = function(index){
 if(index>0){
    if (index == this.midIndexStart) { // loop 
      this.frames[index-1].hide();     
      this.frames[this.midIndexEnd].hide();
      this.frames[index].show();
    }else{ // normal hide previous
      if (index==this.frames.length) { // if animation end
        this.frames[index-1].hide();
        this.hide();
      }else{
        this.frames[index-1].hide();     
        this.frames[index].show();
      }
    }
  }else{ // when index = 0
    this.frames[index].show();
  }
};
// ---------------------------------- Update

Sprite.prototype.updateNoLoop = function(){
  this.move(); // position
  this.addParalax(); // paralax
  if(this.isFrameRate()){ // play
    this.index = this.onceIndex(this.frames, this.index);
    this.play(this.index);
  }
};
Sprite.prototype.winResize = function(){
  this.calcSize();
  this.moveTo(this.lastDestX, this.lastDestY, 10);
};
Sprite.prototype.pos = function(x, y){
  var canvasScaledWidth = (windowHeight*CANVAS_W)/CANVAS_H;
  var offsetX = (windowWidth - canvasScaledWidth)/2;
  this.x = (x * canvasScaledWidth)/CANVAS_W+offsetX;
  this.y = (y * windowHeight)/CANVAS_H; 
};
Sprite.prototype.moveTop = function(x){
  var parY = (windowHeight/2)/this.paralaxAmount;
  this.y = -(parY+this.h);
  // convert coordinates for x
  var canvasScaledWidth = (windowHeight*CANVAS_W)/CANVAS_H;
  var offsetX = (windowWidth - canvasScaledWidth)/2;
  this.x = (x * canvasScaledWidth)/CANVAS_W+offsetX;
};
Sprite.prototype.moveBottom = function(x){
  var parY = (windowHeight/2)/this.paralaxAmount;
  this.y = parY+windowHeight;
  // convert coordinates for x
  var canvasScaledWidth = (windowHeight*CANVAS_W)/CANVAS_H;
  var offsetX = (windowWidth - canvasScaledWidth)/2;
  this.x = (x * canvasScaledWidth)/CANVAS_W+offsetX;
};
Sprite.prototype.moveLeft = function(y){
  var parX = (windowWidth/2)/this.paralaxAmount;
  this.x = -(parX+this.w);
  this.y = (y * windowHeight)/CANVAS_H;    
};
Sprite.prototype.moveTo = function(destX, destY, duration, ease){
  this.easeFunction = ease;
  this.xIn = this.x;
  this.yIn = this.y;
  this.lastDestY = destY;
  this.lastDestX = destX;    
  this.destY = this.calcY(destY);
  this.destX = this.calcX(destX, destY, this.destY);
  this.time = 0;
  this.duration = duration;
  this.isMove = true;
};
Sprite.prototype.moveToBottom = function(destX, duration, ease){
  var parY = (windowHeight/2)/this.paralaxAmount;
  var destY = parY+windowHeight+this.h;
  this.easeFunction = ease;
  this.xIn = this.x;
  this.yIn = this.y;
  this.lastDestY = destY;
  this.lastDestX = destX;    
  this.destY = this.calcY(destY);
  this.destX = this.calcX(destX, destY, this.destY);
  this.time = 0;
  this.duration = duration;
  this.isMove = true;
};
Sprite.prototype.move = function(){
  if(this.time<this.duration){
    if (this.easeFunction === 0) {
      this.x = this.linear(this.time, this.xIn, this.destX-this.xIn, this.duration);
      this.y = this.linear(this.time, this.yIn, this.destY-this.yIn, this.duration);
    }else{
      this.x = this.ease(this.time, this.xIn, this.destX-this.xIn, this.duration);
      this.y = this.ease(this.time, this.yIn, this.destY-this.yIn, this.duration);
    }
    this.time++;
    for (var i = 0; i < this.frames.length; i++) {
      this.frames[i].position(this.x, this.y);
    }
    this.isMove = true;
  }else{
    this.isMove = false;
  }
};
Sprite.prototype.hide = function(){
  for (var i = 0; i <= this.frames.length-1; i++) { // middle
    this.frames[i].hide();
  }
  this.isVisible = false;
};
Sprite.prototype.show = function(){
  this.frames[this.index].show();
  this.isVisible = true;
};

Sprite.prototype.calcY = function(_y){
  return (_y * windowHeight)/CANVAS_H;
};
Sprite.prototype.calcX = function(_x, _y, y){
  var canvasScaledWidth = (windowHeight*CANVAS_W)/CANVAS_H;
  var offsetX = (windowWidth - canvasScaledWidth)/2;
  return (_x/_y)*y+offsetX;
};
Sprite.prototype.ease = function(t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t*t + b;
  t -= 2;
  return c/2*(t*t*t + 2) + b;
};
Sprite.prototype.linear = function (t, b, c, d) {
  return c*t/d + b;
};
// ---------------------------------- Size
Sprite.prototype.calcSize = function(){
  var h = (this.h/CANVAS_H)*windowHeight;
  var w = (this.w/this.h)*h;
  for (var i = 0; i < this.frames.length; i++) {
      this.frames[i].size(w, h);
  }
};
Sprite.prototype.load = function(path, frameCount){ 
  for (var i = 0; i <= frameCount; i++) { // middle
    var img = createImg(path+'img'+i+'.png');
    img.hide();
    img.class('animation');
    img.size(this.w, this.h); 
    this.frames.push(img);
  }
  this.calcSize();
};
Sprite.prototype.update = function(){
  this.move(); // position
  this.addParalax(); // paralax
  if(this.isFrameRate()){ // play
    this.index = this.loopIndex(this.frames, this.index);
    this.play(this.index);
  }
};
Sprite.prototype.updateNoParalax = function(){
  this.move(); // position
  if(this.isFrameRate()){ // play
    this.index = this.loopIndex(this.frames, this.index);
    this.play(this.index);
  }
};
Sprite.prototype.loadAnimation = function(path, midIndexStart, midIndexEnd, totalFrames){
  this.midIndexStart = midIndexStart;
  this.midIndexEnd = midIndexEnd;
  this.isPlay = false;
  for (var i = 0; i <= totalFrames; i++) { // middle
    var img = createImg(path+'img'+i+'.png');
    img.hide();
    img.class('animation');
    img.size(this.w, this.h); 
    this.frames.push(img);
  }
  this.calcSize();    
};
Sprite.prototype.loopIndex = function(frames, index){
  if(index < frames.length) index++;
  if(index==frames.length){
    index = 0;
    this.loopEnd = true;
  }
  return index;
};
Sprite.prototype.onceIndex = function(frames, index){
  if(index < frames.length-1) index++;
  return index;
};
Sprite.prototype.resetIndex = function(){
  this.index = 0;
};
Sprite.prototype.play = function(index){
  if(index>0){
    this.frames[index-1].hide();     
    this.frames[index].show();
  }else{
    this.frames[index].show();
    this.frames[this.frames.length-1].hide(); // for looped
  }
};
Sprite.prototype.addParalax = function(){
  var paralaxX = (mX-windowWidth/2)/this.paralaxAmount;
  var paralaxY = (mY-windowHeight/2)/this.paralaxAmount;
  for (var i = 0; i < this.frames.length; i++) {
      this.frames[i].position(this.x+paralaxX, this.y+paralaxY);
  }   
};
// ---------------------------------- Utilitis
Sprite.prototype.isFrameRate = function(){ 
  if (frameCount%this.framerate === 0) {
    return true;
  }else{
    return false;
  }
};