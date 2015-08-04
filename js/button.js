var Button = function(funcOver, funcPress, funcOut, texButton, texButtonDown, texButtonOver) {
    this.texButton = texButton;
    this.texButtonDown = texButtonDown;
    this.texButtonOver = texButtonOver;

    this.button = new PIXI.Sprite(texButton);
    this.button.buttonMode = true;
    this.button.interactive = true;
    this.button
    .on('mousedown', function() {
            this.texture = texButtonDown;
            this.alpha = 1;
        }) // this.onButtonDown)
    .on('touchstart', function() {
        this.texture = texButtonDown;
        this.alpha = 1;
        funcOver();
    }) // this.onButtonDown)

    .on('mouseup', function() {
        this.isdown = false;
        if (this.isOver) {
            this.texture = texButtonOver;
        } else {
            this.texture = texButton;
        }
    }) // this.onButtonUp)
    .on('touchend', function() {
        this.isdown = false;
        if (this.isOver) {
            this.texture = texButtonOver;
            funcOver();
        } else {
            this.texture = texButton;
            funcOut();
        }
    }) // this.onButtonUp)
    .on('mouseupoutside', function() {
        this.isdown = false;
        if (this.isOver) {
            this.texture = texButtonOver;
            funcOver();
        } else {
            this.texture = texButton;
            funcOut();
        }
    }) // this.onButtonUp)
    .on('touchendoutside', function() {
        this.isdown = false;
        if (this.isOver) {
            this.texture = texButtonOver;
            funcOver();
        } else {
            this.texture = texButton;
            funcOut();
        }
    }) // this.onButtonUp)

    .on('mouseover', function() {
        this.isOver = true;
        if (this.isdown) {
            return;
        }
        this.texture = texButtonOver;
        funcOver();
    }) // this.onButtonOver)

    .on('mouseout', function() {
        this.isOver = false;
        if (this.isdown) {
            return;
        }
        this.texture = texButton;
        funcOut();
    }); // this.onButtonOut);
    this.button.tap = funcPress;
    this.button.click = funcPress;
    stage.addChild(this.button);
};
Button.prototype.set = function(x, y, w, h) {
    this.button.position.x = x;
    this.button.position.y = y;
    this.button.width = w;
    this.button.height = h; 
};
