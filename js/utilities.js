function random(min, max) {
    return Math.floor((Math.random() * max) + min);
}

function print(value) {
    console.log(value);
}

function showElement(id) {
    document.getElementById(id).style.display = '';
}

function hideElement(id) {
    document.getElementById(id).style.display = 'none';
}
var Bubble = function() {
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
Bubble.prototype.set = function(x, y, w, h) {
    this.div.style.left = x + "px";
    this.div.style.top = y + "px";
    var border = 10;
    this.div.style.width = w + "px";
    this.div.style.height = 'auto';
};
Bubble.prototype.changeLanguage = function(_sc) {
    this._switch ^= true;
    if (this._switch) {
        this.tx1 = this.txEn1;
        this.tx2 = this.txEn2;
        this.tx3 = this.txEn3;
        this.tx4 = this.txEn4;
        this.tx5 = this.txEn5;
        this.tx6 = this.txEn6;
        this.tx7 = this.txEn7;
        this.tx8 = this.txEn8;
        this.tx9 = this.txEn9;
        this.changeText(_sc);
        langButton.innerHTML = 'EN';
    } else {
        this.tx1 = this.txRu1;
        this.tx2 = this.txRu2;
        this.tx3 = this.txRu3;
        this.tx4 = this.txRu4;
        this.tx5 = this.txRu5;
        this.tx6 = this.txRu6;
        this.tx7 = this.txRu7;
        this.tx8 = this.txRu8;
        this.tx9 = this.txRu9;
        this.changeText(_sc);
        langButton.innerHTML = 'RU';
    }
    print('changeLanguage');
};
Bubble.prototype.update = function() {
    this.move();
    this.set(this.x, this.y, this.w, this.h);
};
Bubble.prototype.resize = function() {
    var t = new Translate(this.rootX, this.rootY, this.rootW, this.rootH);
    this.x = t.x;
    this.y = t.y;
    this.w = t.w;
    this.h = t.h;
    print('resize this.x= ' + this.x);
};
Bubble.prototype.moveTo = function(x, y, w, h, duration) {
    var t = new Translate(x, y, w, h);
    this.rootX = x;
    this.rootY = y;
    this.rootW = w;
    this.rootH = h;
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
Bubble.prototype.setText = function() {
    this.txRu1 = "Привет! Это — интерактивный комикс про <b>джайнизм</b>, древнюю и очень интересную восточную религию. Чтобы переключаться между экранами, жми кнопки справа и слева. Некоторые элементы комикса интерактивны — они так и ждут, когда ты наведешь на них мышку. Попробуй!";
    this.txRu2 = "Привет, меня зовут Тараканджа, живу я в Индии. Я ооочень стар: мне 102 года! Интересно, как я дожил до таких лет? Все благодаря моим землякам <b>джайнам</b> и их религии!.";
    this.txRu3 = "Джайны — представители религии экстремального ненасилия. Последователей джайнизма сейчас около двух миллионов, живут они в основном в Индии. Религия <b>запрещает им вредить всем живым существам, даже самым маленьким</b>. Джайны даже подметают путь перед собой, чтобы случайно не наступить на насекомое.";
    this.txRu4 = "Основатель джайнизма — <b>принц Махавира</b>, жил в IX в. до нашей эры. Как и Будда, он отказался от царства ради <b>аскетического пути и философских исследований</b>. В глубоких медитациях ему открылась истина джайнизма.";
    this.txRu5 = "Согласно джайнизму, весь мир состоит из одушевленных существ, страдающих и испытывающих боль. <b>Весь мир страдает, а больше всего в нем — человек";
    this.txRu6 = "Только <b>бережное и трепетное отношение ко всему живому</b> может помочь человеку освободиться из круга перерождений и страдания.";
    this.txRu7 = "Джайны процеживают питьевую воду, чтобы отфильтровать любые живые организмы. Им запрещено ловить рыбу и обрабатывать землю: вместо этого они успешно занимаются торговлей (и ведут бизнес, следуя принципам честности и справедливости).";
    this.txRu8 = "Джайны заканчивают свою жизнь добровольным отказом от еды, таким образом символически пытаясь уменьшить степень вреда, нанесенного в течение прожитого времени.";
    this.txRu9 = "Вот такие необычные и интересные эти джайны, гаранты моего долголетия! <b>Подумай, а как бы ты организовал свою жизнь, зная, что все существующее в мире живет и страдает?</b> В том числе камень, который ты пнул по дороге домой, бургер, съеденный на обед (был коровой!) и даже микробы, которых ты отправил в небытие, помыв руки? Почему ложь, по логике джайнов, приносит вред окружающему миру? Что полезного и актуального можно позаимствовать у религии джайнов?";

    this.txEn1 = "<p>Hi there!</p><p>This is an interactive comic about jainism — an ancient and very interesting eastern religion. Press left or right arrows to switch the screens. Some elements of the comic are interactive, they want you to put your mouse pointer over. Just try it!</p>";
    this.txEn2 = 'Hi folks! My name is Roachanandran, I live in India. I am 102 years old! How did I manage to live long like this? Thanks to the jains, my fellow countrymen and their religion!';
    this.txEn3 = 'Practitioners of jainism believe nonviolence and self-control are the means to liberation. There are around 5 million jains today, they live mostly in India. Religion prescribes them to avoid harming any living beings, even the tiniest ones. Jains sweep the floor while walking to avoid killing insects on the way.';
    this.txEn4 = 'Jainism was founded by Prince Mahavira (IX BC). Like Buddha, he traded all his wealth for an ascetic life and philosophical research. He claimed that he reached the ultimate truth during his meditations.';
    this.txEn5 = 'According to jainism, the world consists of living and suffering beings, exposed to the pain. The whole world is suffering, and the human is suffering more than anyone else.s';
    this.txEn6 = 'Only human care for any living creature may help break the samsara — the circle of births and suffering.';
    this.txEn7 = 'Jains filter the drinking water to separate any tiny living organisms. They can’t fishing or farming, but they can be businessmen. Jains are usually very good at business. They are not supposed to lie, so fair trade and justice is a big deal for them. ';
    this.txEn8 = 'Jains finish their life with voluntary starving, symbolically trying to minimize the harm done to the planet. ';
    this.txEn9 = 'So, jains are really interesting people, aren’t they? Just think, how should  you organize your life if you believe that every existing thing in the world is alive and suffering? This includes a rock you kicked on your way home, a burger you ate for lunch (it used to be a cow!) and even the microbes you killed while washing your hands. Why is the lie dangerous and harmful to the world, according jainism? What useful and interesting can you borrow from jainism?';
    this.tx1 = this.txRu1;
    this.tx2 = this.txRu2;
    this.tx3 = this.txRu3;
    this.tx4 = this.txRu4;
    this.tx5 = this.txRu5;
    this.tx6 = this.txRu6;
    this.tx7 = this.txRu7;
    this.tx8 = this.txRu8;
    this.tx9 = this.txRu9;
};
Bubble.prototype.changeText = function(_sc) {
    switch (_sc) {
        case 0:
            this.div.setAttribute("class", "bubble");
            this.div.innerHTML = this.tx1;
            break;
        case 1:
            this.div.setAttribute("class", "bubble bottomCenter");
            this.div.innerHTML = this.tx2;
            break;

        case 2:
            this.div.setAttribute("class", "bubble left");
            this.div.innerHTML = this.tx3;
            break;

        case 3:
            this.div.setAttribute("class", "bubble left");
            this.div.innerHTML = this.tx4;
            break;

        case 4:
            this.div.setAttribute("class", "bubble left");
            this.div.innerHTML = this.tx5;
            break;

        case 5:
            this.div.setAttribute("class", "bubble right");
            this.div.innerHTML = this.tx6;
            break;

        case 6:
            this.div.setAttribute("class", "bubble left");
            this.div.innerHTML = this.tx7;
            break;

        case 7:
            this.div.setAttribute("class", "bubble left");
            this.div.innerHTML = this.tx8;
            break;

        case 8:
            this.div.setAttribute("class", "bubble top");
            this.div.innerHTML = this.tx9;
            break;
    }
  };