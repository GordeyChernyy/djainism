var Sprite = function() {
    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;
};
Sprite.prototype.addButton = function(funOver, funOut){
    var tex = PIXI.Texture.fromFrame('mouth0.png');
    this.button = new PIXI.Sprite(tex);
    this.button.alpha = 0;
    this.button.visible = false;
    this.button.buttonMode = true;
    this.button.interactive = true;
    this.button.on('mouseover', funOver);
    this.button.on('mouseout', funOut);
    this.button.on('touchstart', funOver);
    this.button.on('touchend', funOut);
    stage.addChild(this.button);
};
Sprite.prototype.setButton = function(x, y, w, h){
    var translate = new Translate(x, y, w, h);
    this.rootbuttonX = x;
    this.rootbuttonY = y;
    this.rootbuttonH = h;
    this.rootbuttonW = w;    
    this.buttonX = translate.x;
    this.buttonY = translate.y;
    this.buttonH = translate.h;
    this.buttonW = translate.w;
    this.button.width = translate.w;
    this.button.height = translate.h;
};
Sprite.prototype.setButtonToOrigin = function(){
    this.buttonX = this.x;
    this.buttonY = this.y;
    this.buttonH = this.h;
    this.buttonW = this.w;
    this.rootbuttonX = this.rootX;
    this.rootbuttonY = this.rootY;
    this.rootbuttonH = this.rootW;
    this.rootbuttonW = this.rootH;
    this.button.width = this.w;
    this.button.height = this.h;
};
Sprite.prototype.updateButton = function(x, y){
    this.button.visible = true;
    var paralaxX = (x-windowWidth/2)/this.paralaxScale;
    var paralaxY = (y-windowHeight/2)/this.paralaxScale;
    this.button.position.x = this.buttonX+paralaxX; 
    this.button.position.y = this.buttonY+paralaxY;
};
Sprite.prototype.hideButton = function(){
    this.button.visible = false;
};
Sprite.prototype.load = function(path, frameCount) {
    var frames = [];
    for (var i = 0; i <= frameCount; i++) { // middle
        var tex = PIXI.Texture.fromFrame(path+i+'.png');
        frames.push(tex);
    }
    this.movie = new PIXI.extras.MovieClip(frames);
    this.movie.animationSpeed = 0.2;
};
Sprite.prototype.set = function(id, x, y, w, h, paralaxScale) {
    this.id = id;
    this.rootX = x;
    this.rootY = y;
    this.rootW = w;
    this.rootH = h;
    var translate = new Translate(x, y, w, h);
    this.x = translate.x;
    this.y = translate.y;
    this.originX = this.x; // to remember first pos
    this.originY = this.y; // to remember first pos
    this.w = translate.w;
    this.h = translate.h;
    this.movie.position.x = this.x;
    this.movie.position.y = this.y;
    this.movie.width = this.w;
    this.movie.height = this.h;
    this.timer = 0;
    this.duration = 0;
    this.paralaxScale = paralaxScale;
    this.movie.visible = false; // default hide
    this.hideAfterMove = false; // trigger visiblity
    this.showAfterMove = false;
    this.button = null;
};
Sprite.prototype.resize = function() {
    var translate = new Translate(this.rootX, this.rootY, this.rootW, this.rootH);
    this.x = translate.x;
    this.y = translate.y;
    this.originX = this.x; // to remember first pos
    this.originY = this.y; // to remember first pos
    this.w = translate.w;
    this.h = translate.h;
    this.movie.width = this.w;
    this.movie.height = this.h;    
    if (this.button!==null) {
        print('button');
        var btranslate = new Translate(this.rootbuttonX, this.rootbuttonY, this.rootbuttonW, this.rootbuttonH);
        this.buttonX = btranslate.x;
        this.buttonY = btranslate.y;
        this.buttonH = btranslate.h;
        this.buttonW = btranslate.w;
        this.button.width = btranslate.w;
        this.button.height = btranslate.h;        
    }
};
Sprite.prototype.setVisible = function(isVisible) {
    this.movie.visible = isVisible;
};
Sprite.prototype.setupAnimation = function(mid, end, total) {
    this.mid = mid;
    this.end = end;
    this.total = total;
    this.hideAfterPlay = false;
    this.frameCounter = 0;
    this.index = mid;
};
Sprite.prototype.playStart = function() {
    this.movie.gotoAndPlay(0);
};
Sprite.prototype.playEnd = function() {
    var f = this.movie.currentFrame;
    this.movie.gotoAndPlay(f);
};
Sprite.prototype.updateAnimation = function() {
    var f = this.movie.currentFrame;
    if (this.hideAfterPlay) { // play till end
        if (f === this.total) {
            this.movie.visible = false;
            this.hideAfterPlay = false;
        }
    } else { // loop
        if (f >= this.mid && this.frameCounter%5===0) {
            this.movie.gotoAndStop(this.index);
            this.index++;
            if (this.index>this.end) { // go back
               this.index = this.mid; 
            }
        }
    }
    this.frameCounter++;
};
Sprite.prototype.paralax = function(x, y) {
    var offX = (x - windowWidth / 2) / this.paralaxScale;
    var offY = (y - windowHeight / 2) / this.paralaxScale;
    this.movie.position.x = this.x + offX;
    this.movie.position.y = this.y + offY;
};
Sprite.prototype.update = function(x, y) {
    this.movie.position.x = this.x;
    this.movie.position.y = this.y;   
};
Sprite.prototype.setTop = function() {
    var parY = (windowHeight/2)/this.paralaxScale;
    this.y = -(parY+this.h);
    this.x = this.originX;
};
Sprite.prototype.setBottom = function(){
    var parY = (windowHeight/2)/this.paralaxScale;
    this.y = parY+windowHeight;
    this.x = this.originX;
};
Sprite.prototype.setLeft = function(){
  var parX = (windowWidth/2)/this.paralaxScale;
  this.x = -(parX+this.w);
  this.y = this.originY;    
};
Sprite.prototype.setOrigin = function(){
  this.x = this.originX;
  this.y = this.originY;    
};
Sprite.prototype.moveToOrigin = function(duration, easeType) {
    this.startX = this.x;
    this.startY = this.y;
    this.endX = this.originX;
    this.endY = this.originY;
    this.duration = duration;
    this.easeType = easeType;
    this.timer = 0;
    this.isMove = true;
};
Sprite.prototype.moveToBottom = function(duration, easeType) {
    var parY = (windowHeight/2)/this.paralaxScale;
    this.startX = this.x;
    this.startY = this.y;
    this.endX = this.originX;
    this.endY = parY+windowHeight;
    this.duration = duration;
    this.easeType = easeType;
    this.timer = 0;
    this.isMove = true;
};
Sprite.prototype.moveTo = function(x, y, duration, easeType) { // easeType: cubic, linear
    var translate = new Translate(x, y, this.w, this.h);
    this.startX = this.x;
    this.startY = this.y;
    this.endX = translate.x;
    this.endY = translate.y;
    this.duration = duration;
    this.timer = 0;
    this.easeType = easeType;
    this.isMove = true;
};
Sprite.prototype.move = function() {
    if (this.timer < this.duration) {
        if (this.showAfterMove && this.timer===0) { // check visibility
            this.movie.visible = true;
            this.showAfterMove = false;
            if (this.button!==null) {
                this.button.visible = true;
            }
        }
        if (this.easeType === 'cubic') {
            this.x = cubicInOut(this.timer, this.startX, this.endX - this.startX, this.duration);
            this.y = cubicInOut(this.timer, this.startY, this.endY - this.startY, this.duration);
        }
        if (this.easeType === 'linear') {
            this.x = linearInOut(this.timer, this.startX, this.endX - this.startX, this.duration);
            this.y = linearInOut(this.timer, this.startY, this.endY - this.startY, this.duration);
        }
        this.timer++;
        this.isMove = true;

    }else{
        if (this.hideAfterMove) {
            this.movie.visible = false;
            this.hideAfterMove = false;
        }
      this.isMove = false;
    }
};


var Translate = function(x, y, w, h) { // convert coordinates to fit window
    var canvasScaledWidth = (windowHeight * CANVAS_W) / CANVAS_H;
    var offsetX = (windowWidth - canvasScaledWidth) / 2;
    this.x = (x * canvasScaledWidth) / CANVAS_W + offsetX;
    this.y = (y * windowHeight) / CANVAS_H;
    this.h = (h / CANVAS_H) * windowHeight;
    this.w = (w / h) * this.h;
};