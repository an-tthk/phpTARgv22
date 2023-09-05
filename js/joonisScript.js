function kustuta(){
    let j=document.getElementById("joonis").getContext("2d")
    j.clearRect(0, 0, 520, 566)
}

function joonista(){
    jalad();
    jeans();
    keha();
    muster();
    shoulders();
    hands();
    kael();
    ears();
    pea();
    face();
}

function jalad(){
    let j = document.getElementById("joonis").getContext("2d");

    j.fillStyle = "#d0b070";
    j.strokeStyle = "#807040";
    j.lineWidth = 2;

    j.strokeRect(135, 520, 110, 25);//ذ»ذµذ²ذ°رڈ ذ½ذ¾ذ³ذ°
    j.fillRect(135, 520, 110, 25);

    j.strokeRect(265, 520, 110, 25);//ذ؟ر€ذ°ذ²ذ°رڈ ذ½ذ¾ذ³ذ°
    j.fillRect(265, 520, 110, 25);

    j.strokeRect(135, 430, 240, 25); //ذ؟ذ¾رڈرپ
    j.fillRect(135, 430, 240, 25);
}

function jeans(){
    let j = document.getElementById("joonis").getContext("2d");

    j.fillStyle = "#e0d090";
    j.strokeStyle = "#807040";
    j.lineWidth = 2;

    j.moveTo(135,520);
    j.lineTo(135,455);
    j.lineTo(375, 455);
    j.lineTo(375,520);
    j.lineTo(265,520);
    j.lineTo(265,465);
    j.lineTo(245,465);
    j.lineTo(245, 520);
    j.lineTo(135, 520);
    j.closePath();

    j.stroke();
    j.fillRect(135, 455, 110,65)
    j.fillRect(265, 455, 110, 65)
    j.fillRect(245, 455, 20, 10)
}

function keha() {
    let k = document.getElementById("joonis").getContext("2d");

    k.strokeStyle = "#807040";
    k.fillStyle = "#e0d090";

    k.beginPath();
    k.moveTo(105, 430);
    k.lineTo(405, 430);
    k.lineTo(355, 210);
    k.lineTo(155, 210);
    k.lineTo(105, 430);
    k.closePath();

    k.stroke(); // ذ ذ¸رپذ¾ذ²ذ°ذ½ذ¸ذµ ذ؛ذ¾ذ½ر‚رƒر€ذ°
    k.fill(); // ذ—ذ°ذ؛ر€ذ°رپذ؛ذ° ر„ذ¸ذ³رƒر€ر‹
}

function muster(){
    let m = document.getElementById("joonis").getContext("2d");

    m.beginPath();
    m.moveTo(190, 212);
    m.lineTo(220, 315);
    m.lineTo(235, 430);
    m.lineTo(275, 430);
    m.lineTo(290, 315);
    m.lineTo(320, 212);
    m.lineTo(255, 247);
    m.lineTo(190, 212);
    m.closePath();
    m.lineWidth = 3;
    m.strokeStyle = "#303010";
    m.stroke();
    m.fillStyle = "#a08040";
    m.fill();

    m.beginPath();
    m.moveTo(220, 315);
    m.lineTo(290, 315); // ذ³ذ¾ر€ذ¸ذ·ذ¾ذ½ر‚ذ°ذ»رŒذ½ذ°رڈ ذ؟ر€رڈذ¼ذ°رڈ ذ»ذ¸ذ½ذ¸رڈ ذ؟ذ¾رپذµر€ذµذ´ذ¸ذ½ر‹ ذ؛ذ¾ر„ر‚ر‹
    m.stroke();

    m.beginPath();
    m.moveTo(227, 370);
    m.lineTo(286, 350);
    m.stroke();

    m.beginPath();
    m.moveTo(233,415);
    m.lineTo(277, 415); // ذ³ذ¾ر€ذ¸ذ·ذ¾ذ½ر‚ذ°ذ»رŒذ½ذ°رڈ ذ؟ر€رڈذ¼ذ°رڈ ذ»ذ¸ذ½ذ¸رڈ ذ²ذ½ذ¸ذ·رƒ ذ؛ذ¾ر„ر‚ر‹
    m.stroke();

    m.beginPath();
    m.moveTo(260, 415);
    m.lineTo(260,430); //ذ²ذµر€ر‚ذ¸ذ؛ذ°ذ»رŒذ½ذ°رڈ ذ؟ر€رڈذ¼ذ°رڈ ذ»ذ¸ذ½ذ¸رڈ ذ² رپذ°ذ¼ذ¾ذ¼ ذ½ذ¸ذ·رƒ ذ؛ذ¾ر„ر‚ر‹
    m.stroke();

    m.beginPath();
    m.moveTo(255,245);
    m.lineTo(255,315);
    m.stroke();

    m.beginPath();
    m.moveTo(196,230);
    m.lineTo(240,256);
    m.stroke();

    m.beginPath();
    m.moveTo(314,230);
    m.lineTo(265,256);
    m.stroke();
}

function shoulders(){
    let s = document.getElementById("joonis").getContext("2d");

    s.beginPath();
    s.moveTo(110, 225);
    s.lineTo(65, 315);
    s.lineTo(55, 405);
    s.lineTo(100, 415);
    s.lineTo(110, 405)
    s.lineTo(105,340);
    s.lineTo(135, 290);
    s.lineTo(151,225);
    s.lineTo(110, 225);
    s.closePath();
    s.strokeStyle = "#807040";
    s.stroke();
    s.fillStyle = "#e0d090";
    s.fill();

    s.beginPath();
    s.moveTo(359, 225);
    s.lineTo(400, 225);
    s.lineTo(455, 315);
    s.lineTo(455, 405);
    s.lineTo(410, 415);
    s.lineTo(400, 405);
    s.lineTo(405,340);
    s.lineTo(375,290);
    s.lineTo(359,225);
    s.strokeStyle = "#807040";
    s.stroke();
    s.fillStyle = "#e0d090";
    s.fill();
}

function hands() {
    let h = document.getElementById("joonis").getContext("2d");

    let startingAngle = 1.25 * Math.PI;
    let endingAngle = 2.25 * Math.PI;

    h.beginPath();
    h.arc(50, 450, 25,  startingAngle, endingAngle, false); // ذ ذ¸رپرƒذµذ¼ ذ´رƒذ³رƒ
    h.lineWidth = 20; // ذ¨ذ¸ر€ذ¸ذ½ذ° ذ»ذ¸ذ½ذ¸ذ¸
    h.strokeStyle = "#707030"; // ذ¦ذ²ذµر‚ ذ»ذ¸ذ½ذ¸ذ¸
    h.lineCap = "round";
    h.stroke(); // ذ ذ¸رپرƒذµذ¼ ذ»ذ¸ذ½ذ¸رژ, ذ»ذµذ²ذ°رڈ ر€رƒذ؛ذ°

    h.beginPath();
    h.moveTo(50, 430);
    h.lineTo(65, 400);
    h.lineTo(75, 395);
    h.lineTo(90, 400);
    h.lineTo(95, 410);
    h.lineTo(80, 440);
    h.lineTo(55, 430);
    h.closePath();
    h.lineWidth = 2;
    h.stroke();
    h.fillStyle = "#707030";
    h.fill();

    let firstAngle = 0.75 * Math.PI;
    let lastAngle = 1.75 * Math.PI;

    h.beginPath();
    h.arc(450, 450, 25, firstAngle, lastAngle, false); // ذ ذ¸رپرƒذµذ¼ ذ´رƒذ³رƒ
    h.lineWidth = 20; // ذ¨ذ¸ر€ذ¸ذ½ذ° ذ»ذ¸ذ½ذ¸ذ¸
    h.strokeStyle = "#707030"; // ذ¦ذ²ذµر‚ ذ»ذ¸ذ½ذ¸ذ¸
    h.lineCap = "round";
    h.stroke(); // ذ ذ¸رپرƒذµذ¼ ذ»ذ¸ذ½ذ¸رژ, ذ؟ر€ذ°ذ²ذ°رڈ ر€رƒذ؛ذ°

    h.beginPath();
    h.moveTo(420, 435);
    h.lineTo(410, 405);
    h.lineTo(415, 395);
    h.lineTo(435, 390);
    h.lineTo(445, 395);
    h.lineTo(445, 435);
    h.lineTo(420, 435);
    h.closePath();
    h.lineWidth = 2;
    h.stroke();
    h.fillStyle = "#707030";
    h.fill();
}

function kael() {
    let a = document.getElementById("joonis").getContext("2d");

    a.fillStyle = "#707030";
    a.strokeStyle = "#707030";

    a.strokeRect(190, 185, 130, 25);
    a.fillRect(190, 185, 130, 25); //رˆذµرڈ

    a.beginPath();
    a.moveTo(190, 210);
    a.lineTo(255, 245);
    a.lineTo(320, 210);
    a.lineTo(190, 210);
    a.closePath();

    a.stroke(); // ذ ذ¸رپذ¾ذ²ذ°ذ½ذ¸ذµ ذ؛ذ¾ذ½ر‚رƒر€ذ°
    a.fill();
}

function ears(){
    let e = document.getElementById("joonis").getContext("2d");

    e.beginPath();
    e.moveTo(55, 75);
    e.lineTo(70, 65);
    e.lineTo(90, 65);
    e.lineTo(120, 70);
    e.lineTo(160, 65);
    e.lineTo(180, 70);
    e.lineTo(160, 130);
    e.lineTo(145,135);
    e.lineTo(80,85);
    e.lineTo(55,75);
    e.closePath();
    e.strokeStyle = "#707030";
    e.stroke();
    e.fillStyle = "#707030";
    e.fill();

    e.beginPath();
    e.moveTo(70, 75);
    e.lineTo(90, 75);
    e.lineTo(120, 85);
    e.lineTo(160, 80);
    e.lineTo(175, 85);
    e.lineTo(163, 120);
    e.lineTo(145, 125);
    e.lineTo(85,80);
    e.lineTo(70, 75);
    e.closePath();
    e.strokeStyle = "#303010";
    e.stroke();
    e.fillStyle = "#303010";
    e.fill();

    e.beginPath();
    e.moveTo(330, 70);
    e.lineTo(350, 65);
    e.lineTo(390, 70);
    e.lineTo(420, 65);
    e.lineTo(440, 65);
    e.lineTo(455, 75);
    e.lineTo(430, 85);
    e.lineTo(365, 135);
    e.lineTo(350, 130);
    e.lineTo(330, 70);
    e.closePath();
    e.strokeStyle = "#707030";
    e.stroke();
    e.fillStyle = "#707030";
    e.fill();

    e.beginPath();
    e.moveTo(440, 75);
    e.lineTo(420, 75);
    e.lineTo(390, 85);
    e.lineTo(350, 80);
    e.lineTo(335, 85);
    e.lineTo(347, 120);
    e.lineTo(365, 125);
    e.lineTo(425, 80);
    e.lineTo(440, 75);
    e.closePath();
    e.strokeStyle = "#303010";
    e.stroke();
    e.fillStyle = "#303010";
    e.fill();
}

function pea() {
    let b = document.getElementById("joonis").getContext("2d");

    b.beginPath();
    b.arc(255, 110, 100, 0, 2 * Math.PI, true);
    b.fillStyle = "#707030";
    b.fill();

    b.beginPath();
    b.arc(237, 40, 35, 0, Math.PI, true);
    b.closePath();
    b.fillStyle = "#707030";
    b.fill();

    b.beginPath();
    b.arc(273, 40, 35, 0, Math.PI, true);
    b.closePath();
    b.fillStyle = "#707030";
    b.fill();

    b.beginPath();
    b.arc(205, 55, 35, 15, 5);
    b.closePath();
    b.fillStyle = "#707030";
    b.fill();

    b.beginPath();
    b.arc(305, 50, 35, 0, 2 * Math.PI);
    b.closePath();
    b.fillStyle = "#707030";
    b.fill();
    b.strokeStyle = "#707030";
    b.stroke();

    let sAngle = 1.5 * Math.PI;
    let eAngle = 2 * Math.PI;
    let stAngle = 1.4 * Math.PI;
    let enAngle = Math.PI;

    b.beginPath();
    b.arc(210, 42, 20,  sAngle, eAngle, false); // ذ ذ¸رپرƒذµذ¼ ذ´رƒذ³رƒ
    b.lineWidth = 5; // ذ¨ذ¸ر€ذ¸ذ½ذ° ذ»ذ¸ذ½ذ¸ذ¸
    b.strokeStyle = "#303010"; // ذ¦ذ²ذµر‚ ذ»ذ¸ذ½ذ¸ذ¸
    b.lineCap = "round";
    b.stroke(); //ذ»ذµذ²ذ°رڈ رپذ؛ذ»ذ°ذ´ذ؛ذ° ذ½ذ° ذ³ذ¾ذ»ذ¾ذ²ذµ

    b.beginPath();
    b.arc(305, 42, 25,  stAngle, enAngle, true); // ذ ذ¸رپرƒذµذ¼ ذ´رƒذ³رƒ
    b.lineWidth = 5; // ذ¨ذ¸ر€ذ¸ذ½ذ° ذ»ذ¸ذ½ذ¸ذ¸
    b.strokeStyle = "#303010"; // ذ¦ذ²ذµر‚ ذ»ذ¸ذ½ذ¸ذ¸
    b.lineCap = "round";
    b.stroke(); //ذ؟ر€ذ°ذ²ذ°رڈ رپذ؛ذ»ذ°ذ´ذ؛ذ° ذ½ذ° ذ³ذ¾ذ»ذ¾ذ²ذµ

    b.beginPath();
    b.moveTo(255, 13);
    b.lineTo(255, 40);
    b.strokeStyle = "#303010";
    b.lineWidth = 5;
    b.stroke(); //ذ؟ر€رڈذ¼ذ°رڈ رپذ؛ذ»ذ°ذ´ذ؛ذ° ذ؟ذ¾رپذµر€ذµذ´ذ¸ذ½ذµ
}

function face(){
    let f = document.getElementById("joonis").getContext("2d");

    f.beginPath();
    f.arc(255, 105, 15, Math.PI * 0.1, Math.PI*0.9, false);
    f.lineWidth = 5;
    f.lineCap = "round";
    f.strokeStyle = "#303010";
    f.stroke(); //ذ½ذ¾رپ

    f.beginPath();
    f.arc(255, 115, 15, Math.PI * 1.15, Math.PI * 1.9, false);
    f.lineWidth = 5;
    f.lineCap = "round";
    f.strokeStyle = "#303010";
    f.stroke(); //ذ½ذ¾رپ

    f.beginPath();
    f.arc(255, 105, 15, Math.PI * 1.15, Math.PI * 1.85, false);
    f.lineWidth = 2;
    f.lineCap = "round";
    f.strokeStyle = "#303010";
    f.stroke(); //رپذ؛ذ»ذ°ذ´ذ؛ذ° ذ½ذ°ذ´ ذ½ذ¾رپذ¾ذ¼

    f.beginPath();
    f.arc(205, 105, 25, Math.PI * 0.1, Math.PI * 0.95, false); // رƒذ²ذµذ»ذ¸ر‡ذµذ½ر‹ رƒذ³ذ»ر‹
    f.lineWidth = 5;
    f.lineCap = "round";
    f.fillStyle = "#FFFFFF"; // ر†ذ²ذµر‚ ذ·ذ°ذ؟ذ¾ذ»ذ½ذµذ½ذ¸رڈ
    f.fill(); // ذ·ذ°ذ؛ر€ذ°رˆذ¸ذ²ذ°ذ½ذ¸ذµ ذ²ذ½رƒر‚ر€ذµذ½ذ½ذµذ¹ ر‡ذ°رپر‚ذ¸
    f.strokeStyle = "#303010";
    f.stroke(); // ذ»ذµذ²ر‹ذ¹ ذ³ذ»ذ°ذ·

    f.beginPath();
    f.arc(205, 115, 25, Math.PI * 1.05, Math.PI * 1.95, false); // رƒذ²ذµذ»ذ¸ر‡ذµذ½ر‹ رƒذ³ذ»ر‹
    f.lineWidth = 5;
    f.lineCap = "round";
    f.fillStyle = "#FFFFFF"; // ر†ذ²ذµر‚ ذ·ذ°ذ؟ذ¾ذ»ذ½ذµذ½ذ¸رڈ
    f.fill(); // ذ·ذ°ذ؛ر€ذ°رˆذ¸ذ²ذ°ذ½ذ¸ذµ ذ²ذ½رƒر‚ر€ذµذ½ذ½ذµذ¹ ر‡ذ°رپر‚ذ¸
    f.strokeStyle = "#303010";
    f.stroke(); // ذ»ذµذ²ر‹ذ¹ ذ³ذ»ذ°ذ·


    f.beginPath();
    f.arc(305, 105, 25, Math.PI * 0.1, Math.PI * 0.95, false);
    f.lineWidth = 5;
    f.lineCap = "round";
    f.fillStyle = "#FFFFFF"; // ر†ذ²ذµر‚ ذ·ذ°ذ؟ذ¾ذ»ذ½ذµذ½ذ¸رڈ
    f.fill(); // ذ·ذ°ذ؛ر€ذ°رˆذ¸ذ²ذ°ذ½ذ¸ذµ ذ²ذ½رƒر‚ر€ذµذ½ذ½ذµذ¹ ر‡ذ°رپر‚ذ¸
    f.strokeStyle = "#303010";
    f.stroke(); //ذ؟ر€ذ°ذ²ر‹ذ¹ ذ³ذ»ذ°ذ·

    f.beginPath();
    f.arc(305, 115, 25, Math.PI * 1.05, Math.PI * 1.95, false);
    f.lineWidth = 5;
    f.lineCap = "round";
    f.fillStyle = "#FFFFFF"; // ر†ذ²ذµر‚ ذ·ذ°ذ؟ذ¾ذ»ذ½ذµذ½ذ¸رڈ
    f.fill(); // ذ·ذ°ذ؛ر€ذ°رˆذ¸ذ²ذ°ذ½ذ¸ذµ ذ²ذ½رƒر‚ر€ذµذ½ذ½ذµذ¹ ر‡ذ°رپر‚ذ¸
    f.strokeStyle = "#303010";
    f.stroke(); //ذ؟ر€ذ°ذ²ر‹ذ¹ ذ³ذ»ذ°ذ·

    f.beginPath();
    f.moveTo(205, 110);
    f.lineTo(224, 112);
    f.strokeStyle = "#FFFFFF";
    f.stroke();

    f.beginPath();
    f.moveTo(305, 110);
    f.lineTo(324, 112);
    f.strokeStyle = "#FFFFFF";
    f.stroke();

    f.beginPath();
    f.arc(205, 110, 17, Math.PI*2, 0, true);
    f.closePath();
    f.fillStyle = "#000000"
    f.fill(); //ذ»ذµذ²ر‹ذ¹ ذ·ر€ذ°ر‡ذ¾ذ؛

    f.beginPath();
    f.arc(305, 110, 17, Math.PI*2, 0, true);
    f.closePath();
    f.fillStyle = "#000000"
    f.fill(); //ذ؟ر€ذ°ذ²ر‹ذ¹ ذ·ر€ذ°ر‡ذ¾ذ؛

    f.beginPath();
    f.arc(202, 105, 5, Math.PI*2, 0, true);
    f.closePath();
    f.fillStyle = "#FFFFFF"
    f.fill(); //ذ»ذµذ²ر‹ذ¹ ذ·ر€ذ°ر‡ذ¾ذ؛

    f.beginPath();
    f.arc(302, 105, 5, Math.PI*2, 0, true);
    f.closePath();
    f.fillStyle = "#FFFFFF"
    f.fill(); //ذ؟ر€ذ°ذ²ر‹ذ¹ ذ·ر€ذ°ر‡ذ¾ذ؛

    f.beginPath();
    f.arc(205, 95, 25, Math.PI * 1.15, Math.PI * 1.85, false);
    f.lineWidth = 2;
    f.lineCap = "round";
    f.strokeStyle = "#303010";
    f.stroke(); //رپذ؛ذ»ذ°ذ´ذ؛ذ° ذ½ذ°ذ´ ذ»ذµذ²ر‹ذ¼ ذ³ذ»ذ°ذ·ذ¾ذ¼

    f.beginPath();
    f.arc(305, 95, 25, Math.PI * 1.15, Math.PI * 1.85, false);
    f.lineWidth = 2;
    f.lineCap = "round";
    f.strokeStyle = "#303010";
    f.stroke(); //رپذ؛ذ»ذ°ذ´ذ؛ذ° ذ½ذ°ذ´ ذ؟ر€ذ°ذ²ر‹ذ¼ ذ³ذ»ذ°ذ·ذ¾ذ¼

    let stAngle = 1.35 * Math.PI;
    let enAngle = Math.PI * 0.8;

    f.beginPath();
    f.arc(245, 155, 25,  stAngle, enAngle, true); // ذ ذ¸رپرƒذµذ¼ ذ´رƒذ³رƒ
    f.lineWidth = 2; // ذ¨ذ¸ر€ذ¸ذ½ذ° ذ»ذ¸ذ½ذ¸ذ¸
    f.strokeStyle = "#303010"; // ذ¦ذ²ذµر‚ ذ»ذ¸ذ½ذ¸ذ¸
    f.lineCap = "round";
    f.stroke(); //ذ»ذµذ²ذ°رڈ رپذ؛ذ»ذ°ذ´ذ؛ذ° ذ؟ذ¾ذ´ ذ½ذ¾رپذ¾ذ¼

    let strAngle = 1.65 * Math.PI;
    let endAngle = 0.2 * Math.PI;

    f.beginPath();
    f.arc(265, 155, 25,  strAngle, endAngle, false); // ذ ذ¸رپرƒذµذ¼ ذ´رƒذ³رƒ
    f.lineWidth = 2; // ذ¨ذ¸ر€ذ¸ذ½ذ° ذ»ذ¸ذ½ذ¸ذ¸
    f.strokeStyle = "#303010"; // ذ¦ذ²ذµر‚ ذ»ذ¸ذ½ذ¸ذ¸
    f.lineCap = "round";
    f.stroke(); //ذ؟ر€ذ°ذ²ذ°رڈ رپذ؛ذ»ذ°ذ´ذ؛ذ° ذ½ذ° ذ³ذ¾ذ»ذ¾ذ²ذµ

    f.beginPath();
    f.arc(255, 130, 25, Math.PI * 0.3, Math.PI * 0.7, false); // ذ¸ذ·ذ¼ذµذ½ذµذ½ر‹ رƒذ³ذ»ر‹ ذ¸ ذ½ذ°ذ؟ر€ذ°ذ²ذ»ذµذ½ذ¸ذµ
    f.lineWidth = 5;
    f.lineCap = "round";
    f.strokeStyle = "#303010";
    f.stroke(); //ذ³رƒذ±ر‹

    f.beginPath();
    f.arc(255, 150, 15, Math.PI * 0.3, Math.PI * 0.7, false); // ذ¸ذ·ذ¼ذµذ½ذµذ½ر‹ رƒذ³ذ»ر‹ ذ¸ ذ½ذ°ذ؟ر€ذ°ذ²ذ»ذµذ½ذ¸ذµ
    f.lineWidth = 2;
    f.lineCap = "round";
    f.strokeStyle = "#303010";
    f.stroke(); // رپذ؛ذ»ذ°ذ´ذ؛ذ° ذ؟ذ¾ذ´ ذ³رƒذ±ذ¾ذ¹

    f.beginPath();
    f.arc(255, 160, 50, Math.PI * 0.3, Math.PI * 0.7, false); // ذ¸ذ·ذ¼ذµذ½ذµذ½ر‹ رƒذ³ذ»ر‹ ذ¸ ذ½ذ°ذ؟ر€ذ°ذ²ذ»ذµذ½ذ¸ذµ
    f.lineWidth = 2;
    f.lineCap = "round";
    f.strokeStyle = "#303010";
    f.stroke(); // ر€ذ°ذ·ذ³ر€ذ°ذ½ذ¸ر‡ذ¸ر‚ذµذ»رŒ ذ³ذ¾ذ»ذ¾ذ²ر‹ ذ¸ رˆذµذ¸ = ذ؟ذ¾ذ´ذ±ذ¾ر€ذ¾ذ´ذ¾ذ؛
}
