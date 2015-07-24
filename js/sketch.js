var mX = 0;
var mY = 0;
var isMouseMove = false;
var isAnimate = false;
var isNextScene = false;
var isPrevScene = false;
var sc = 0;
var scUp = 0;
var animCounter = 0;
var sceneDirectionR = true;
var isButtonOver = false;
var once = false;
var tarTalk;
var lineColor;
var buttonL;
var buttonLOver;
var buttonR;
var buttonROver;
// -------------- Constant
var url = "http://localhost/~Zerc/motionComics2";
var CANVAS_H = 866;
var CANVAS_W = 797;
var colMin = 50;
var colMax = 255;
var bgOpacity = 20;
var lineOpacity = 20;
var bgColSpeed = 0.3;
var lineColSpeed = 0.3;

function preload(){
  sc1Load();
  sc2Load();
  sc3Load();
  sc4Load();
  sc5Load();
  sc6Load();
  sc7Load();
  sc8Load();
  tarTalk = new Sprite(121, 169, 30);
  tarTalk.load('images/talk/', 3);
}
function setup(){
  line = new Line();
  line.setup(0, 0.06, 0.003, windowHeight/2.5); // (posY, xStep, yStep, offsetY)

  lineColor = new ColorTool();
  lineColor.set(73, 249, 222, 5, 0.3);

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.class('background');
  frameRate(60);
  sc1firstLoad();  
  buttonSetup();
}
function buttonSetup () {
  buttonL = createImg('images/button/buttonL.png');
  buttonLOver = createImg('images/button/buttonLOver.png');
  buttonR = createImg('images/button/buttonR.png');
  buttonROver = createImg('images/button/buttonROver.png');
  var left = new Translate(51, 386, 73, 123);
  var right = new Translate(683, 388, 65, 118);
  
  buttonL.size(left.w, left.h);
  buttonLOver.size(left.w, left.h);
  buttonR.size(right.w, right.h);
  buttonROver.size(right.w, right.h);
 
  buttonL.position(width/15, left.y);
  buttonLOver.position(width/15, left.y);
  buttonR.position(width-width/15-right.w, right.y);
  buttonROver.position(width-width/15-right.w, right.y);
  
  buttonLOver.hide();
  buttonROver.hide();  

  buttonL.mouseOver(function () { buttonLOver.show(); });
  buttonLOver.mouseOut(function () { buttonLOver.hide();});
  buttonLOver.mousePressed(function (){ changeSceneLeft();});

  buttonR.mouseOver(function () { buttonROver.show(); });
  buttonROver.mouseOut(function () { buttonROver.hide();});
  buttonROver.mousePressed(function (){ changeSceneRight();});

}
function keyPressed(){
  if (keyCode == LEFT_ARROW ) {
    changeSceneLeft ();
  }
  if (keyCode == RIGHT_ARROW) {
    changeSceneRight (); 
  }
  if (key === '1') {
    sceneChangeOutro(sc);
    sc = 8;
    sceneChangeIntro(sc);
    isNextScene = true;
  }
}
function changeSceneLeft () {
  if (!isAnimate && sc>0) {
    sc--;
    sceneChangeOutro(sc+1);
    sceneChangeIntro(sc);
    isPrevScene = true;
  }
}
function changeSceneRight () {
  if (!isAnimate && sc<8) {
    sc++;
    sceneChangeOutro(sc-1);
    sceneChangeIntro(sc);
    isNextScene = true;
  }
}
function keyTyped(){
  if (key === 's') {princeToBuddha.isOver = true;}
  if (key === 'a') {princeToBuddha.isOut = true;}
  
}
function lineUpdate(){
  lineColor.update();
  line.setFillColor(lineColor.color);
  line.setPosY(-(mY/2)+windowHeight/2);
  line.run();
}
function draw(){
  background(255, 255, 255, 3);
  
  lineUpdate();

  if(sc>=2){tarTalk.updateNoParalax();}else{tarTalk.hide();}
  mouseCheck();
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
}
function SceneCheck(_sc){  
  switch(_sc){
    case 0: sc1AnimationCheck(); break;
    case 1: sc2AnimationCheck(); break;
    case 2: sc3AnimationCheck(); break;
    case 3: sc4AnimationCheck(); break;
    case 4: sc5AnimationCheck(); break;
    case 5: sc6AnimationCheck(); break;
    case 6: sc7AnimationCheck(); break;
    case 7: sc8AnimationCheck(); break;
  }
  if(isNextScene || isPrevScene){
    if(!isAnimate){
      switch(_sc){
        case 0: sc1Hide(); break;
        case 1: sc2Hide(); break;
        case 2: sc3Hide(); break;
        case 3: sc4Hide(); break;
        case 4: sc5Hide(); break;
        case 5: sc6Hide(); break;
        case 6: sc7Hide(); break;
        case 7: sc8Hide(); break;
      }
    }
  }
  if (isNextScene && !isAnimate) {
    scUp = sc;
    isNextScene = false;
  }
  if(isPrevScene && !isAnimate){
    scUp = sc;
    isPrevScene = false;
  } 
}
function sceneChangeIntro(_sc){
  switch(_sc){
    case 0: col1(); sc1Intro(); break;
    case 1: col2(); sc2Intro(); break;
    case 2: col3(); sc3Intro(); break;
    case 3: col4(); sc4Intro(); break;
    case 4: col5(); sc5Intro(); break;
    case 5: col6(); sc6Intro(); break;
    case 6: col7(); sc7Intro(); break;
    case 7: col8(); sc8Intro(); break;
    default: break;
  }
}
function col1 () {
  lineColor.set(255, 254, 161,lineOpacity, lineColSpeed);
}
function col2 () {
  lineColor.set(189,249,73, lineOpacity, lineColSpeed);
}
function col3 () {
  lineColor.set(250,203,38, lineOpacity, lineColSpeed);
}
function col4 () {
  lineColor.set(255,9,79, lineOpacity, lineColSpeed);
}
function col5 () {
  lineColor.set(0,208,61, lineOpacity, lineColSpeed);
}
function col6 () {
  lineColor.set(12,212,186, lineOpacity, lineColSpeed);
}
function col7 () {
  lineColor.set(96,201,255, lineOpacity, lineColSpeed);
}
function col8 () {
  lineColor.set(96,238,255, lineOpacity, lineColSpeed);
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
    case 7: sc8Outro(); break;
    default: break;
  }
}

// }
function mouseCheck(){
  if (isMobile()){
    mX = touchX;
    mY = touchY;
  }else{
    mX = mouseX;
    mY = mouseY;
  }  
}
function mousePressed(){
}


function mouseMoved(){
}
function windowResized(){
  canvas = createCanvas(windowWidth, windowHeight);
}
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

