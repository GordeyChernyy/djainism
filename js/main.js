var renderer;
var stage;
var tarTalk;
var sc1, sc2, sc3, sc4, sc5, sc6, sc7, sc8;
var sc = 0; // key trigger
var scUp = 0; // only when previos scene hide
var isMove = false;
var isSceneChange = false;
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var CANVAS_H = 866;
var CANVAS_W = 797;
var isScenesLoaded = false;
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
  // document.addEventListener("touchstart", onTouchStart, true);
  // document.addEventListener("touchend", onTouchEnd, true);
document.addEventListener("touchmove", onTouchMove, true);
// function onTouchStart(event){
//   mX = event.pageX;
//   mY = event.pageY;
// }
function onTouchMove(event){
  mX = event.pageX;
  mY = event.pageY;
}
// function onTouchEnd(event){
//   mX = event.pageX;
//   mY = event.pageY;
// }


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
        null,
        fragmentSource,
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
var texLogo = PIXI.Texture.fromImage('images/assets/pattern.jpg');
var logo;
function onLoaded(loader,res){
  renderer = PIXI.autoDetectRenderer(windowWidth, windowHeight, {
    backgroundColor: 0xffffff
});
renderer.view.className = "rendererView";
  document.body.appendChild(renderer.view);
    bg = PIXI.Sprite.fromImage('images/assets/img1.png');
    bg.width = windowWidth;
    bg.height = windowHeight;
    logo = new PIXI.extras.TilingSprite(texLogo, renderer.width, renderer.height);
    if(!isMobile()){
      stage.addChild(bg);
    }else{
      stage.addChild(logo);
    }
    var fragmentSrc = res.shader.data;
    filter = new CustomFilter(fragmentSrc);
    filter.uniforms.width.value = windowWidth;
    filter.uniforms.height.value = windowHeight;
    bg.filters = [filter];
}
// ----------------------------------- SETUP
var bubble;
var color;
var langButton;
window.onresize = windowResized;
function onAssetsLoaded () {
    loadScenes();
    bubble = new Bubble();
    bubble.setup(320, 50, 419, 178);
    bubble.moveTo(320, 50, 419, 178, 100);
    bubble.setText();
    bubble.changeText(0);
    color = new ColorTool();
    color.set(0.653061, 0.561224, 0.367347, 0, 0.2);
    setupButton();
    animate();
    langSwitch();
    isScenesLoaded = true;
}
function langSwitch(){
  langButton = document.createElement("BUTTON");
  langButton.onclick = changeLang;
  langButton.innerHTML = 'RU';
  langButton.style.position = "fixed";
  langButton.style.left = "50px";
  langButton.style.top = "50px";
  langButton.style.width = "50px";
  langButton.style.height = '30px';   
  document.body.appendChild(langButton);
}
function changeLang(){
  bubble.changeLanguage(sc);
}
function windowResized(){
    if (isScenesLoaded) {
        windowHeight = window.innerHeight;
        windowWidth = window.innerWidth;
        renderer.resize(windowWidth, windowHeight);
        logo.width = windowWidth;
        logo.height = windowHeight;
        bg.width = windowWidth;
        bg.height = windowHeight;
        filter.uniforms.width.value = windowWidth;
        filter.uniforms.height.value = windowHeight;
        var translate = new Translate(290, 495, 261, 23);
        slider.style.left = translate.x + 'px';
        slider.style.top = translate.y + 'px';
        slider.style.width = translate.w + 'px';
        var left = new Translate(51, 386, 73, 123);
        var right = new Translate(683, 388, 65, 118);
        buttonL.set(windowWidth / 15, left.y, left.w, left.h);
        buttonR.set(windowWidth - windowWidth / 15 - right.w, right.y, left.w, left.h);
        bubble.resize();
        tarTalk.resize();
        print('window resized');
        sc1.resize();
        sc2.resize();
        sc3.resize();
        sc4.resize();
        sc5.resize();
        sc6.resize();
        sc7.resize();
        sc8.resize();
    }
}

// ----------------------------------- DRAW
function animate() { 
    color.update();
    if (!isMobile()) {
        mX = renderer.plugins.interaction.mouse.global.x;
        mY = renderer.plugins.interaction.mouse.global.y;
        filter.uniforms.time.value += 0.01;
        filter.uniforms.mX.value = mX;
        filter.uniforms.mY.value = mY;
        filter.uniforms._r.value = color.r;
        filter.uniforms._g.value = color.g;
        filter.uniforms._b.value = color.b;
    }
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
// window.onload = onWinLoad;
var buttonL;
var buttonR;
var texButtonL = PIXI.Texture.fromImage('images/assets/button/buttonL.png');
var texButtonLOver = PIXI.Texture.fromImage('images/assets/button/buttonLOver.png');
var texButtonR = PIXI.Texture.fromImage('images/assets/button/buttonR.png');
var texButtonROver = PIXI.Texture.fromImage('images/assets/button/buttonROver.png');
function noop(){}
function setupButton () {
  var left = new Translate(51, 386, 73, 123);
  var right = new Translate(683, 388, 65, 118);
  buttonL = new Button(noop, changeSceneLeft, noop, 
                       texButtonL, texButtonLOver, texButtonLOver);
  buttonL.set(windowWidth/15, left.y, left.w, left.h);
  buttonR = new Button(noop, changeSceneRight, noop, 
                       texButtonR, texButtonROver, texButtonROver);
  buttonR.set(windowWidth-windowWidth/15-right.w, right.y, left.w, left.h);
}
function test(){
   print('test');
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
    case 0: sc1Intro(); bubble.changeText(_sc); col1(); break;
    case 1: sc2Intro(); bubble.changeText(_sc); col2(); break;
    case 2: sc3Intro(); bubble.changeText(_sc); col3(); break;
    case 3: sc4Intro(); bubble.changeText(_sc); col4(); break;
    case 4: sc5Intro(); bubble.changeText(_sc); col5(); break;
    case 5: sc6Intro(); bubble.changeText(_sc); col6(); break;
    case 6: sc7Intro(); bubble.changeText(_sc); col7(); break;
    case 7: sc8Intro(); bubble.changeText(_sc); col8(); break;
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
    case 7: sc8Outro(); bubble.changeText(8); col9(); break;
    default: break;
  }
}

