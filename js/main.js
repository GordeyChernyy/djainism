var renderer;
var stage;
var tarTalk;
var sc1, sc2, sc3, sc4, sc5, sc6, sc7, sc8;
var sc = 0; // key trigger
var scUp = 0; // only when previos scene hide
var isMove = false;
var isSceneChange = false;

stage = new PIXI.Container();
PIXI.loader
    .add('images/assets/sprites1.json')
    .add('images/assets/sprites2.json')
    .add('images/assets/sprites3.json')
    .load(onAssetsLoaded);

// ----------------------------------- MOUSE
function isMobile() {
    if (sessionStorage.desktop){ // desktop storage 
        return false;
      }
    else if (localStorage.mobile){ // mobile storage
        return true;
      }
    var mobile = ['iphone','ipad','android','blackberry','nokia','opera mini','windows mobile','windows phone','iemobile']; 
    for (var i in mobile) if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}
  document.addEventListener("touchstart", onTouchStart, true);
  document.addEventListener("touchend", onTouchEnd, true);
  document.addEventListener("touchmove", onTouchMove, true);


function onTouchStart(event){
  mX = event.pageX;
  mY = event.pageY;
}

function onTouchMove(event){
  mX = event.pageX;
  mY = event.pageY;
}

function onTouchEnd(event){
  mX = event.pageX;
  mY = event.pageY;
}


var mX = 0;
var mY = 0;
// ---------------------------- Shader
var shaderLoader = new PIXI.loaders.Loader();
shaderLoader.add('shader','images/assets/shader.frag');
shaderLoader.once('complete', onLoaded );
shaderLoader.load();
function CustomFilter(fragmentSource)
{
    PIXI.AbstractFilter.call(this,
        // vertex shader
        null,
        // fragment shader
        fragmentSource,
        // set the uniforms
        {
            time : {type : '1f', value : 0},
            width : {type : '1f', value : 0},
            height : {type : '1f', value : 0},
            mX : {type : '1f', value : 0},
            mY : {type : '1f', value : 0},
            _r : {type : '1f', value : 0},
            _g : {type : '1f', value : 0},
            _b : {type : '1f', value : 0},
        }
    );
}
CustomFilter.prototype = Object.create(PIXI.AbstractFilter.prototype);
CustomFilter.prototype.constructor = CustomFilter;

var filter;
var bg;
function onLoaded(loader,res){
  renderer = PIXI.autoDetectRenderer(windowWidth, windowHeight, {
    backgroundColor: 0x1099bb
});
renderer.view.className = "rendererView";
  document.body.appendChild(renderer.view);
    bg = PIXI.Sprite.fromImage('images/assets/img1.png');
    bg.width = windowWidth;
    bg.height = windowHeight;
    if(!isMobile()) stage.addChild(bg);
    var fragmentSrc = res.shader.data;
    filter = new CustomFilter(fragmentSrc);
    filter.uniforms.width.value = windowWidth;
    filter.uniforms.height.value = windowHeight;
    bg.filters = [filter];
}
// ----------------------------------- SETUP
var bubble;
var color;
function onAssetsLoaded () {
    bubbleSetup();
    loadScenes();
    setupButton();
    bubble = new Bubble();
    bubble.setup(320, 50, 419, 178);
    bubble.sc1();
    color = new ColorTool();
    color.set(0.653061, 0.561224, 0.367347, 0, 0.2);
    animate();
}
// ----------------------------------- DRAW
function animate() { 
    color.update();
    filter.uniforms.time.value+=0.01;
    filter.uniforms.mX.value = mX;
    filter.uniforms.mY.value = mY;
    filter.uniforms._r.value = color.r;
    filter.uniforms._g.value = color.g;
    filter.uniforms._b.value = color.b;
    tarTalk.move();
    tarTalk.update();
    bubble.update();
    switch(scUp){
      case 0: sc1Update(); break;
      case 1: sc2Update(); break;
      case 2: sc3Update(); break;
      case 3: sc4Update(); break;
      case 4: sc5Update(); break;
      case 5: sc6Update(); break;
      case 6: sc7Update(); break;
      case 7: sc8Update(); break;
      default: break;
    }
    SceneCheck(scUp);
    render();
}
// ----------------------------------- KEY
window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    if (key == 32) { // space
      sceneChangeOutro(sc);
      sc = 7;
      sceneChangeIntro(sc);
      isSceneChange = true;
    }
    if (key == 37) { // left
        changeSceneLeft();
    }
    if (key == 39) { // right
        changeSceneRight();
    }
};
function render () {
    renderer.render(stage);
    requestAnimationFrame(animate);
}
// ----------------------------------- SCENE MANAGMENT  

var buttonL;
var buttonR;
var texButtonL = PIXI.Texture.fromImage('images/assets/button/buttonL.png');
var texButtonLOver = PIXI.Texture.fromImage('images/assets/button/buttonLOver.png');
var texButtonR = PIXI.Texture.fromImage('images/assets/button/buttonR.png');
var texButtonROver = PIXI.Texture.fromImage('images/assets/button/buttonROver.png');
function setupButton () {

  var left = new Translate(51, 386, 73, 123);
  var right = new Translate(683, 388, 65, 118);
  
  buttonL =  new PIXI.Sprite(texButtonL);
  buttonL.buttonMode = true;
  buttonR = new PIXI.Sprite(texButtonR);
  buttonR.buttonMode = true;

  buttonL.width = left.w;
  buttonL.height = left.h;
  buttonL.position.x = windowWidth/15;
  buttonL.position.y = left.y;
  
  buttonL.interactive = true;
  buttonR.interactive = true;

  buttonR.width = right.w;
  buttonR.height = right.h;
  buttonR.position.x = windowWidth-windowWidth/15-right.w;
  buttonR.position.y = right.y;

  buttonL.on('mouseover', function () {buttonL.texture = texButtonLOver; });
  buttonL.on('mouseout', function () {buttonL.texture = texButtonL; });
  buttonL.on('mouseup', changeSceneLeft);
  buttonL.on('touchstart', changeSceneLeft);

  buttonR.on('mouseover', function () { buttonR.texture = texButtonROver; });
  buttonR.on('mouseout', function () { buttonR.texture = texButtonR; });
  buttonR.on('mouseup', changeSceneRight)
         .on('touchstart', onButtonDown)
         .on('touchend', onButtonUp)
         .on('touchendoutside', onButtonUp);

  stage.addChild(buttonL);
  stage.addChild(buttonR);
}

function onButtonDown()
{
    this.isdown = true;
    buttonR.texture = texButtonROver;
    this.alpha = 1;
}

function onButtonUp()
{
    this.isdown = false;

    if (this.isOver)
    {
        buttonR.texture = texButtonROver;
    }
    else
    {
        buttonR.texture = texButtonR; 
    }
}

function onButtonOver()
{
    this.isOver = true;

    if (this.isdown)
    {
        return;
    }

    this.texture = textureButtonOver;
}

function onButtonOut()
{
    this.isOver = false;

    if (this.isdown)
    {
        return;
    }

    this.texture = textureButton;
}

function changeSceneLeft () {
  if (!isMove && sc>0) {
    sc--;
    sceneChangeOutro(sc+1);
    sceneChangeIntro(sc);
    isSceneChange = true;
  }
}
function changeSceneRight () {
  if (!isMove && sc<8) {
    sc++;
    sceneChangeOutro(sc-1);
    sceneChangeIntro(sc);
    isSceneChange = true;
  }
}
function SceneCheck(_sc){  
  switch(_sc){
    case 0: isMove = sc1.moveCheck(); break;
    case 1: isMove = sc2.moveCheck(); break;
    case 2: isMove = sc3.moveCheck(); break;
    case 3: isMove = sc4.moveCheck(); break;
    case 4: isMove = sc5.moveCheck(); break;
    case 5: isMove = sc6.moveCheck(); break;
    case 6: isMove = sc7.moveCheck(); break;
    case 7: isMove = sc8.moveCheck(); break;
  }
  if(isSceneChange && !isMove){
    switch(_sc){
      case 0: sc1.setVisible(false); break;
      case 1: sc2.setVisible(false); break;
      case 2: sc3.setVisible(false); break;
      case 3: sc4.setVisible(false); break;
      case 4: sc5.setVisible(false); break;
      case 5: sc6.setVisible(false); break;
      case 6: sc7.setVisible(false); break;
      case 7: sc8.setVisible(false); break;
    }
    scUp = sc;
    isSceneChange = false;
  }
}
function sceneChangeIntro(_sc){
  switch(_sc){
    case 0: sc1Intro(); bubble.sc1(); col1(); break;
    case 1: sc2Intro(); bubble.sc2(); col2(); break;
    case 2: sc3Intro(); bubble.sc3(); col3(); break;
    case 3: sc4Intro(); bubble.sc4(); col4(); break;
    case 4: sc5Intro(); bubble.sc5(); col5(); break;
    case 5: sc6Intro(); bubble.sc6(); col6(); break;
    case 6: sc7Intro(); bubble.sc7(); col7(); break;
    case 7: sc8Intro(); bubble.sc8(); col8(); break;
    default: break;
  }
}
function sceneChangeOutro(_sc){
  switch(_sc){
    case 0: sc1Outro(); break;
    case 1: sc2Outro(); break;
    case 2: sc3Outro(); break;
    case 3: sc4Outro(); break;
    case 4: sc5Outro(); break;
    case 5: sc6Outro(); break;
    case 6: sc7Outro(); break;
    case 7: sc8Outro(); bubble.sc9(); col9(); break;
    default: break;
  }
}

