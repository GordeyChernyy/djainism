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
    this.div.style.width = w+"px";
	this.div.style.height = 'auto';  	
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
Bubble.prototype.sc1 = function() {
   this.div.setAttribute("class", "bubble");
   this.div.innerHTML = "Привет! Это — интерактивный комикс про <b>джайнизм</b>, древнюю и очень интересную восточную религию. Чтобы переключаться между экранами, жми кнопки справа и слева. Некоторые элементы комикса интерактивны — они так и ждут, когда ты наведешь на них мышку. Попробуй!";
};
Bubble.prototype.sc2 = function(first_argument) {
    this.div.setAttribute("class", "bubble bottomCenter");
   this.div.innerHTML = "Привет, меня зовут Тараканджа, живу я в Индии. Я ооочень стар: мне 102 года! Интересно, как я дожил до таких лет? Все благодаря моим землякам <b>джайнам</b> и их религии!.";
};
Bubble.prototype.sc3 = function(first_argument) {
    this.div.setAttribute("class", "bubble left");
   this.div.innerHTML = "Джайны — представители религии экстремального ненасилия. Последователей джайнизма сейчас около двух миллионов, живут они в основном в Индии. Религия <b>запрещает им вредить всем живым существам, даже самым маленьким</b>. Джайны даже подметают путь перед собой, чтобы случайно не наступить на насекомое.";
};
Bubble.prototype.sc4 = function(first_argument) {
    this.div.setAttribute("class", "bubble left");
   this.div.innerHTML = "Основатель джайнизма — <b>принц Махавира</b>, жил в IX в. до нашей эры. Как и Будда, он отказался от царства ради <b>аскетического пути и философских исследований</b>. В глубоких медитациях ему открылась истина джайнизма.";
};
Bubble.prototype.sc5 = function(first_argument) {
    this.div.setAttribute("class", "bubble left");
   this.div.innerHTML = "Согласно джайнизму, весь мир состоит из одушевленных существ, страдающих и испытывающих боль. <b>Весь мир страдает, а больше всего в нем — человек";
};
Bubble.prototype.sc6 = function(first_argument) {
    this.div.setAttribute("class", "bubble right");
   this.div.innerHTML = "Только <b>бережное и трепетное отношение ко всему живому</b> может помочь человеку освободиться из круга перерождений и страдания.";
};
Bubble.prototype.sc7 = function(first_argument) {
    this.div.setAttribute("class", "bubble left");
   this.div.innerHTML = "Джайны процеживают питьевую воду, чтобы отфильтровать любые живые организмы. Им запрещено ловить рыбу и обрабатывать землю: вместо этого они успешно занимаются торговлей (и ведут бизнес, следуя принципам честности и справедливости).";
};
Bubble.prototype.sc8 = function(first_argument) {
    this.div.setAttribute("class", "bubble left");
   this.div.innerHTML = "Джайны заканчивают свою жизнь добровольным отказом от еды, таким образом символически пытаясь уменьшить степень вреда, нанесенного в течение прожитого времени.";
};
Bubble.prototype.sc9 = function(first_argument) {
    this.div.setAttribute("class", "bubble top");
   this.div.innerHTML = "Вот такие необычные и интересные эти джайны, гаранты моего долголетия! <b>Подумай, а как бы ты организовал свою жизнь, зная, что все существующее в мире живет и страдает?</b> В том числе камень, который ты пнул по дороге домой, бургер, съеденный на обед (был коровой!) и даже микробы, которых ты отправил в небытие, помыв руки? Почему ложь, по логике джайнов, приносит вред окружающему миру? Что полезного и актуального можно позаимствовать у религии джайнов?";
};
