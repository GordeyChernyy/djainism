var Scene = function() {
    this.sprites = [];
};
Scene.prototype.add = function(id, path, frameCount, x, y, w, h, paralaxScale) {
    var sprite = new Sprite();
    sprite.load(path, frameCount);
    sprite.set(id, x, y, w, h, paralaxScale);
    this.sprites.push(sprite);
    stage.addChild(sprite.movie);
};
Scene.prototype.update = function(x, y) {
    for (var i = 0; i < this.sprites.length; i++) {
        this.sprites[i].move();
        this.sprites[i].paralax(x, y);
    }
};
Scene.prototype.play = function() {
    for (var i = 0; i < this.sprites.length; i++) {
        this.sprites[i].movie.play();
    }
};
Scene.prototype.get = function(id) {
    for (var i = 0; i < this.sprites.length; i++) {
        if (this.sprites[i].id === id) return this.sprites[i];
    }
};
Scene.prototype.getByIndex = function(index) {
    return this.sprites[index];
};
Scene.prototype.moveCheck = function() {
    var isMove = false;
    for (var i = 0; i < this.sprites.length; i++) {
        if (this.sprites[i].isMove === true) {
            isMove = true;
            break;
        }
    }
    return isMove;
};
Scene.prototype.setVisible = function(isVisible) {
    for (var i = 0; i < this.sprites.length; i++) {
        this.sprites[i].movie.visible = isVisible;
    }
};
Scene.prototype.hideAfterMove = function() {
    for (var i = 0; i < this.sprites.length; i++) {
        this.sprites[i].hideAfterMove = true;
    }
};
Scene.prototype.showAfterMove = function() {
    for (var i = 0; i < this.sprites.length; i++) {
        this.sprites[i].showAfterMove = true;
    }
};
Scene.prototype.moveAllToOrigin = function(min, max, animationType) { // smooth, line
    for (var i = 0; i < this.sprites.length; i++) {
        this.sprites[i].moveToOrigin(random(min, max), animationType);
    }
};
Scene.prototype.moveAllToBottom = function(min, max, animationType) { // smooth, line
    for (var i = 0; i < this.sprites.length; i++) {
        this.sprites[i].moveToBottom(random(min, max), animationType);
    }
};
Scene.prototype.setAllBottom = function(animationType) { // smooth, line
    for (var i = 0; i < this.sprites.length; i++) {
        this.sprites[i].setBottom();
    }
};
Scene.prototype.setAllTop = function(animationType) { // smooth, line
    for (var i = 0; i < this.sprites.length; i++) {
        this.sprites[i].setTop();
    }
};
Scene.prototype.resize = function() {
    for (var i = 0; i < this.sprites.length; i++) {
        this.sprites[i].resize();
    }
};
Scene.prototype.showCurrent = function(id) {
    for (var i = 0; i < this.sprites.length; i++) {
        if (this.sprites[i].id === id) {
            this.sprites[i].movie.visible = true;
        } else {
            this.sprites[i].movie.visible = false;
        }
    }
};