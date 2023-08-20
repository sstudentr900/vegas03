function classToggle(n) {
    document.getElementById(n).classList.toggle('active');
}

function navButton(o) {
    var m = document.getElementById('menue');
    var h = document.getElementsByTagName("html")[0];
    o.classList.toggle('active');
    m.classList.toggle('active');
    if (o.classList.contains('active')) {
        h.style.overflowY = 'hidden';
        m.style.overflowY = 'scroll';
    } else {
        h.style.overflowY = '';
        m.style.overflowY = '';
    }

}

var c = document.getElementById('gameScene');
var ctx = c.getContext("2d");
var w = 1280,
    h = 800;
c.width = w
c.height = h
var imgs = {
    'ga_u01': './img/ga_u01.png',
    'ga_u02': './img/ga_u02.png',
    'ga_u03': './img/ga_u03.png',
    'ga_u04': './img/ga_u04.png',
    'ga_b01': './img/ga_b01.png',
    'ga_b02': './img/ga_b02.png',
    'ga_b03': './img/ga_b03.png',
    'ga_b04': './img/ga_b04.png',
    'ga_b05': './img/ga_b05.png',
    'ga_bg': './img/ga_bg.jpg',
    'ga_mo01': './img/ga_mo01.png',
    'ga_mo02': './img/ga_mo02.png',
    'ga_mo03': './img/ga_mo03.png',
    'ga_mo04': './img/ga_mo04.png',
    'ga_mo05': './img/ga_mo05.png'
}
var img = {};

function loadResource(callback) {
    var already = 0;
    var Ramount = lenght(imgs);
    for (var k in imgs) {
        img[k] = new Image();
        img[k].src = imgs[k];
        img[k].onload = function() {
            already++;
            // ctx.font = '20px 微軟雅黑';
            // ctx.fillText('正在加載圖片' + already + '/' + Ramount, 10, 40);
            if (already == Ramount) {
                // img['ga_u02'].px = w-img['ga_u02'].width;
                // img['ga_u02'].py = h-img['ga_u02'].height;
                // img['ga_u01'].px = 0;
                // img['ga_u01'].py = h-img['ga_u01'].height;
                // img['ga_u03'].px = 20;
                // img['ga_u03'].py = 20;
                callback();
            }
        }
    }
}
//mouse
var mouse = { x: 0, y: 0 }

function imgPosition() {
    ctx.clearRect(0, 0, w, h)
        //ui
    ctx.drawImage(img['ga_bg'], 0, 0);
    ctx.drawImage(img['ga_u02'], w - img['ga_u02'].width, h - img['ga_u02'].height);
    ctx.drawImage(img['ga_u01'], 0, h - img['ga_u01'].height);
    ctx.drawImage(img['ga_u03'], 20, 20);
    ctx.drawImage(img['ga_u04'], w - img['ga_u04'].width, 0);
    //按鈕
    var restButton = { 'x': w - img['ga_u02'].width + 12, 'y': h - img['ga_b01'].height - 12 };
    var enterButton = { 'x': restButton.x + img['ga_b02'].width + 12, 'y': restButton.y };
    var cancelButton = { 'x': enterButton.x + img['ga_b03'].width + 12, 'y': restButton.y };
    var dataButton = { 'x': w - img['ga_b05'].width - 16, 'y': restButton.y + 5 };
    var returnButton = { 'x': w - img['ga_b04'].width - 16, 'y': restButton.y - img['ga_b04'].height, 'w': (w - img['ga_b04'].width - 25) * 1 + img['ga_b04'].width * 1, 'h': restButton.y - img['ga_b04'].height + img['ga_b04'].height - 5 };
    ctx.drawImage(img['ga_b01'], restButton.x, restButton.y);
    ctx.drawImage(img['ga_b02'], enterButton.x, restButton.y);
    ctx.drawImage(img['ga_b03'], cancelButton.x, restButton.y);
    ctx.drawImage(img['ga_b04'], returnButton.x, returnButton.y);
    ctx.drawImage(img['ga_b05'], dataButton.x, dataButton.y);
    //錢
    var money50 = { 'x': restButton.x, 'y': h - img['ga_u02'].height - img['ga_mo01'].height / 2.1, 'w': restButton.x * 1 + img['ga_mo01'].width * 1 - 10, 'h': h - img['ga_u02'].height - img['ga_mo01'].height / 2.1 * 1 + img['ga_mo01'].height * 1 - 14 };
    var money100 = { 'x': money50.x + img['ga_mo02'].width + 4, 'y': money50.y, 'w': money50.w * 1 + img['ga_mo02'].width * 1 + 5, 'h': money50.h };
    var money500 = { 'x': money100.x + img['ga_mo03'].width + 4, 'y': money50.y, 'w': money100.w * 1 + img['ga_mo02'].width * 1 + 5, 'h': money50.h };
    var money1000 = { 'x': money500.x + img['ga_mo04'].width + 4, 'y': money50.y, 'w': money500.w * 1 + img['ga_mo02'].width * 1 + 5, 'h': money50.h };
    var money5000 = { 'x': money1000.x + img['ga_mo05'].width + 4, 'y': money50.y, 'w': money1000.w * 1 + img['ga_mo02'].width * 1 + 5, 'h': money50.h };

    if (mouse.x > money50.x && mouse.x < money50.w && mouse.y > money50.y && mouse.y < money50.h) {
        ctx.drawImage(img['ga_mo01'], money50.x, money50.y - 10);
    } else {
        ctx.drawImage(img['ga_mo01'], money50.x, money50.y);
    }
    if (mouse.x > money100.x && mouse.x < money100.w && mouse.y > money100.y && mouse.y < money100.h) {
        ctx.drawImage(img['ga_mo02'], money100.x, money100.y - 10);
    } else {
        ctx.drawImage(img['ga_mo02'], money100.x, money100.y);
    }
    if (mouse.x > money500.x && mouse.x < money500.w && mouse.y > money500.y && mouse.y < money500.h) {
        ctx.drawImage(img['ga_mo03'], money500.x, money500.y - 10);
    } else {
        ctx.drawImage(img['ga_mo03'], money500.x, money500.y);
    }
    if (mouse.x > money1000.x && mouse.x < money1000.w && mouse.y > money1000.y && mouse.y < money1000.h) {
        ctx.drawImage(img['ga_mo04'], money1000.x, money1000.y - 10);
    } else {
        ctx.drawImage(img['ga_mo04'], money1000.x, money1000.y);
    }
    if (mouse.x > money5000.x && mouse.x < money5000.w && mouse.y > money5000.y && mouse.y < money5000.h) {
        ctx.drawImage(img['ga_mo05'], money5000.x, money5000.y - 10);
    } else {
        ctx.drawImage(img['ga_mo05'], money5000.x, money5000.y);
    }
    c.onmousedown = function(event) {
        mouse.x = event.offsetX;
        mouse.y = event.offsetY;
        if (mouse.x > returnButton.x && mouse.x < returnButton.w && mouse.y > returnButton.y && mouse.y < returnButton.h) {
            history.go(-1)
        }
    }
}

function lenght(obj) {
    var count = 0;
    for (var i in obj) {
        count++;
    }
    return count;
};

function loadLine() {
    ctx.beginPath();
    for (var i = 0; i < 30; i++) {
        let pos = i * 50;
        ctx.moveTo(pos, 0);
        ctx.lineTo(pos, h);
        ctx.fillText(pos, pos, 10);

        ctx.moveTo(0, pos);
        ctx.lineTo(w, pos);
        ctx.fillText(pos, 10, pos);
    }
    ctx.strokeStyle = 'rgba(255,255,255,.1)';
    ctx.stroke();
}

loadResource(function() {
    loadLine()
        // imgPosition();
    setInterval(imgPosition, 30)
})
c.onmousemove = function(event) {
    mouse.x = event.offsetX;
    mouse.y = event.offsetY;
}