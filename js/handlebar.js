//Apps

const appSource   = document.getElementById('gallery-template').innerHTML;
const appTemplate = Handlebars.compile(appSource);
const appContext = {
  galleryName: [
    {
      id: 1,
      name: "From Ashes Rise (100 x 150 cm, Acrylic on canvas)",
      link: "season5/From Ashes Rise  (100 x 150 cm, Acrylic on canvas).jpg",
    },
    {
      id: 2,
      name: "From Her Lips to Gods Ears (40 x 60 cm, Acrylic on canvas)",
      link: "season5/From Her Lips to Gods Ears (40 x 60 cm, Acrylic on canvas).jpg",
    },
    {
      id: 3,
      name: "His Hero Is Gone (80  x 100 cm , Acrylic and Aching on iron plate)",
      link: "season5/His Hero Is Gone (80  x 100 cm , Acrylic and Aching on iron plate).jpg",
    },
    {
      id: 4,
      name: "Prächtig schaust du aus... (60 x 90 cm, Acrylic on canvas)",
      link: "season5/Prächtig schaust du aus... (60 x 90 cm, Acrylic on canvas).jpg",
    },
    {
      id: 5,
      name: "Steetart in Scheibbs",
      link: "season5/Steetart in Scheibbs.jpg",
    },
    {
      id: 6,
      name: "The Evil That Men Do (100 x 150 cm, Acrylic on canvas)",
      link: "season5/The Evil That Men Do (100 x 150 cm, Acrylic on canvas).jpg",
    },
    {
      id: 7,
      name: "The virus came from abroad (130 x 170 cm, Acrylic on canvas)",
      link: "season5/The virus came from abroad (130 x 170 cm, Acrylic on canvas).jpg",
    },
    {
      id: 8,
      name: "Torn web (70 x 150 cm, Acrylic on canvas)",
      link: "season5/Torn web (70 x 150 cm, Acrylic on canvas).jpg",
    },
    {
      id: 9,
      name: "Triumph and Defeat(100 x 150 cm, Acrylic on canvas)",
      link: "season5/Triumph and Defeat(100 x 150 cm, Acrylic on canvas).jpg",
    },
    {
      id: 10,
      name: "untitled ( 80 x 120 cm, Acrylic and eching on iron plate)",
      link: "season5/untitled ( 80 x 120 cm, Acrylic and eching on iron plate).jpg",
    },
    {
      id: 11,
      name: "Untitled (130 x 170 cm, Acrylic on canvas)",
      link: "season5/Untitled (130 x 170 cm, Acrylic on canvas).jpg",
    },
    {
      id: 12,
      name: "The fall of Duckburg – Season 4 Episode 1 (80 x 120 cm, Acrylic on canvas)",
      link: "season4/The fall of Duckburg – Season 4 Episode 1 (80 x 120 cm, Acrylic on canvas).jpg",
    },
    {
      id: 13,
      name: "The fall of Duckburg – Season 3 Episode 13 (80 x 115 cm, Acrylic on canvas)",
      link: "season3/The fall of Duckburg – Season 3 Episode 13 (80 x 115 cm, Acrylic on canvas).jpg",
    },
    {
      id: 14,
      name: "The fall of Duckburg – Season 3 Episode 12 (50 x 50 cm, Acrylic on canvas)",
      link: "season3/The fall of Duckburg – Season 3 Episode 12 (50 x 50 cm, Acrylic on canvas).jpg",
    },
    {
      id: 15,
      name: "The fall of Duckburg – Season 3 Episode 11 (100 x 150 cm, Acrylic on canvas)",
      link: "season3/The fall of Duckburg – Season 3 Episode 11 (100 x 150 cm, Acrylic on canvas).jpg",
    },
    {
      id: 16,
      name: "The fall of Duckburg – Season 3 Episode 10 (50 x 90 cm, Acrylic on canvas)",
      link: "season3/The fall of Duckburg – Season 3 Episode 10 (50 x 90 cm, Acrylic on canvas).jpg",
    },
    {
      id: 17,
      name: "The fall of Duckburg – Season 3 Episode 9 (140 x 210 cm, Acrylic on canvas)",
      link: "season3/The fall of Duckburg – Season 3 Episode 9 (140 x 210 cm, Acrylic on canvas).jpg",
    },
    {
      id: 18,
      name: "The fall of Duckburg – Season 3 Episode 8 (100 x 150 cm, Acrylic on canvas)",
      link: "season3/The fall of Duckburg – Season 3 Episode 8 (100 x 150 cm, Acrylic on canvas).jpg",
    },
    {
      id: 19,
      name: "The fall of Duckburg – Season 3 Episode 7 (60 x 80 cm, Acrylic on canvas)",
      link: "season3/The fall of Duckburg – Season 3 Episode 7 (60 x 80 cm, Acrylic on canvas).jpg",
    },
    {
      id: 20,
      name: "The fall of Duckburg – Season 3 Episode 6 (100 x 150 cm, Acrylic on canvas)",
      link: "season3/The fall of Duckburg – Season 3 Episode 6 (100 x 150 cm, Acrylic on canvas).jpg",
    },
    {
      id: 21,
      name: "The fall of Duckburg – Season 3 Episode 5 (60 x 70 cm, Acrylic on canvas)",
      link: "season3/The fall of Duckburg – Season 3 Episode 5 (60 x 70 cm, Acrylic on canvas).jpg",
    },
    {
      id: 22,
      name: "The fall of Duckburg – Season 3 Episode 4 (100 x 135 cm, Acrylic on canvas)",
      link: "season3/The fall of Duckburg – Season 3 Episode 4 (100 x 135 cm, Acrylic on canvas).jpg",
    },
    {
      id: 23,
      name: "The fall of Duckburg – Season 3 Episode 3 (70 x 90cm, Acrylic on canvas)",
      link: "season3/The fall of Duckburg – Season 3 Episode 3 (70 x 90cm, Acrylic on canvas).jpg",
    },
    {
      id: 24,
      name: "The fall of Duckburg – Season 3 Episode 2 (100 x 150 cm, Acrylic on canvas)",
      link: "season3/The fall of Duckburg – Season 3 Episode 2 (100 x 150 cm, Acrylic on canvas).jpg",
    },
    {
      id: 25,
      name: "The fall of Duckburg – Season 3 Episode 1 (100 x 50 cm, Acrylic on canvas)",
      link: "season3/The fall of Duckburg – Season 3 Episode (100 x 50 cm, Acrylic on canvas).jpg",
    },
    {
      id: 26,
      name: "The fall of Duckburg – Season 2 Episode 5 (100 x 150 cm, Acrylic on canvas)",
      link: "season2/The fall of Duckburg – Season 2 Episode 5 (100 x 150 cm, Acrylic on canvas).jpg",
    },
    {
      id: 27,
      name: "The fall of Duckburg – Season 2 Episode 4 (20 x 20 cm, Acrylic on canvas)",
      link: "season2/The fall of Duckburg – Season 2 Episode 1 (20 x 20 cm, Acrylic on canvas).jpg",
    },
    {
      id: 28,
      name: "The fall of Duckburg – Season 2 Episode 3 (100 x 100 cm, Acrylic on canvas)",
      link: "season2/The fall of Duckburg – Season 2 Episode (100 x 100 cm, Acrylic on canvas).jpg",
    },
    {
      id: 29,
      name: "The fall of Duckburg – Season 2 Episode 2 (100 x 150 cm, Acrylic on canvas)",
      link: "season2/The fall of Duckburg – Season 2 Episode 2 (100 x 150 cm, Acrylic on canvas).jpg",
    },
    {
      id: 30,
      name: "The fall of Duckburg – Season 2 Episode 1 (75 x 150 cm, Acrylic on canvas)",
      link: "season2/The fall of Duckburg – Season 2 Episode 1 (75 x 150 cm, Acrylic on canvas).jpg",
    },
    {
      id: 31,
      name: "The fall of Duckburg – Season 1 Episode 8 (100 x 150 cm, Acrylic on canvas)",
      link: "season1/The fall of Duckburg – Season 1 Episode 8 (100 x 150 cm, Acrylic on canvas).jpg",
    },
    {
      id: 32,
      name: "The fall of Duckburg – Season 1 Episode 7 (100 x 150 cm, Acrylic on canvas)",
      link: "season1/The fall of Duckburg – Season 1 Episode 7 (100 x 150 cm, Acrylic on canvas).jpg",
    },
    {
      id: 33,
      name: "The fall of Duckburg – Season 1 Episode 6 (115 x 155 cm, Acrylic and oil on canvas)",
      link: "season1/The fall of Duckburg – Season 1 Episode 1 (115 x 155 cm, Acrylic and oil on canvas).jpg",
    },
    {
      id: 34,
      name: "The fall of Duckburg – Season 1 Episode 5 (100 x 130 cm, Acrylic on canvas)",
      link: "season1/The fall of Duckburg – Season 1 Episode 5 (100 x 130 cm, Acrylic on canvas).jpg",
    },
    {
      id: 35,
      name: "The fall of Duckburg – Season 1 Episode 3 (100 x 150 cm, Acrylic on canvas)",
      link: "season1/The fall of Duckburg – Season 1 Episode 3 (100 x 150 cm, Acrylic on canvas).jpg",
    },
    {
      id: 36,
      name: "The fall of Duckburg – Season 1 Episode 2 (100 x 150 cm, Acrylic on canvas)",
      link: "season1/The fall of Duckburg – Season 1 Episode 2 (100 x 150 cm, Acrylic on canvas).jpg",
    },
    {
      id: 37,
      name: "The fall of Duckburg – Season 1 Episode 1 (100 x 150 cm, Acrylic and oil on canvas)",
      link: "season1/The fall of Duckburg – Season 1 Episode 1 (100 x 150 cm, Acrylic and oil on canvas).jpg",
    },
    {
      id: 38,
      name: "Black wind (fire and steel) (Acryl auf Leinwand, 70x110cm,2022)",
      link: "peti202204/Black wind (fire and steel) (Acryl auf Leinwand, 70x110cm,2022).jpg",
    },
    {
      id: 39,
      name: "I bet you look good on the dancefloor! (Acryl auf Leinwand, 70x50cm,2022)",
      link: "peti202204/I bet you look good on the dancefloor! (Acryl auf Leinwand, 70x50cm,2022).jpg",
    },
    {
      id: 40,
      name: "O.T.  (Acryl auf Leinwand, 20x30cm,2022)",
      link: "peti202204/O.T.  (Acryl auf Leinwand, 20x30cm,2022).jpg",
    },
    {
      id: 41,
      name: "O.T.  (Acryl auf Leinwand, 20x31cm,2022)",
      link: "peti202204/O.T.  (Acryl auf Leinwand, 20x31cm,2022).jpg",
    },
    {
      id: 42,
      name: "O.T.  (Acryl auf Leinwand, 20x32cm,2022)",
      link: "peti202204/O.T.  (Acryl auf Leinwand, 20x32cm,2022).jpg",
    },
    {
      id: 43,
      name: "O.T.  (Acryl auf Leinwand, 21x33cm,2022)",
      link: "peti202204/O.T.  (Acryl auf Leinwand, 21x33cm,2022).jpg",
    },
    {
      id: 44,
      name: "O.T.  (Acryl auf Leinwand, 25x32cm,2022)",
      link: "peti202204/O.T.  (Acryl auf Leinwand, 25x32cm,2022).jpg",
    },
    {
      id: 45,
      name: "O.T. (Acryl auf Leinwand, 90x50cm,2022)",
      link: "peti202204/O.T. (Acryl auf Leinwand, 90x50cm,2022).jpg",
    },
    {
      id: 46,
      name: "Pink turns Blue (Acryl auf Leinwand, 100x70cm,2020)",
      link: "peti202204/Pink turns Blue (Acryl auf Leinwand, 100x70cm,2020).jpg",
    },
    {
      id: 47,
      name: "Stop screaming! (it´s what the bomb wants us to do) - (Acryl auf Leinwand, 70x150cm,2022)",
      link: "peti202204/Stop screaming! (it´s what the bomb wants us to do) - (Acryl auf Leinwand, 70x150cm,2022).jpg",
    },
    {
      id: 48,
      name: "The fall of Duckburg – Season 4 Episode 1 (90 x 70 cm, Acrylic on canvas, 2020)",
      link: "peti202204/The fall of Duckburg – Season 4 Episode 1 (90 x 70 cm, Acrylic on canvas, 2020).jpg",
    },
    {
      id: 49,
      name: "The fall of Duckburg – Season 4 Episode 2 (50 x 70 cm, Acrylic on canvas, 2020)",
      link: "peti202204/The fall of Duckburg – Season 4 Episode 2 (50 x 70 cm, Acrylic on canvas, 2020).jpg",
    },
    {
      id: 50,
      name: "The fall of Duckburg – Season 6 Episode 1 (20 x 30 cm, Acrylic  on canvas, 2020)",
      link: "peti202204/The fall of Duckburg – Season 6 Episode 1 (20 x 30 cm, Acrylic  on canvas, 2020).jpg",
    },
    {
      id: 51,
      name: "The fall of Duckburg – Season 6 Episode 2 (90 x 90 cm, Acrylic on canvas, 2022)",
      link: "peti202204/The fall of Duckburg – Season 6 Episode 2 (90 x 90 cm, Acrylic on canvas, 2022).jpg",
    },
    {
      id: 52,
      name: "The fall of Duckburg – Season 6 Episode 3 (90 x 45 cm, Acrylic  on canvas, 2020)",
      link: "peti202204/The fall of Duckburg – Season 6 Episode 3 (90 x 45 cm, Acrylic  on canvas, 2020).jpg",
    },
    {
      id: 53,
      name: "The sun is going nowhere (Acryl auf Leinwand, 100x150cm,2022)",
      link: "peti202204/The sun is going nowhere (Acryl auf Leinwand, 100x150cm,2022).jpg",
    },
    {
      id: 54,
      name: "You look like I need a drink (Acryl auf Leinwand, 130x150cm,2022)",
      link: "peti202204/You look like I need a drink (Acryl auf Leinwand, 130x150cm,2022).jpg",
    },
    {
      id: 55,
      name: "Wet like a cherry in the bloodbath of birth, Acrylic on canvas, 130x170cm,2022",
      link: "2023/Wet like a cherry in the bloodbath of birth, Acrylic on canvas, 130x170cm,2022.jpg",
    },
    {
      id: 56,
      name: "Alone in Crowd, 150 x 150, Acrylic on canvac, 2022",
      link: "2023/Alone in Crowd, 150 x 150, Acrylic on canvac, 2022.jpg",
    },
    {
      id: 57,
      name: "Atomic Garden. 90 x100cm Acryl auf leinwand 2022",
      link: "2023/Atomic Garden. 90 x100cm Acryl auf leinwand 2022.jpg",
    },
    {
      id: 58,
      name: "Between The Hammer And The Envil. 90x140cm Acryl auf leinwand 2022",
      link: "2023/Between The Hammer And The Envil. 90x140cm Acryl auf leinwand 2022.jpg",
    },
    {
      id: 59,
      name: "Der weg war da,er war nur überwuchert,40x 60 cm, Acrylic on canvas",
      link: "2023/Der weg war da,er war nur überwuchert,40x 60 cm, Acrylic on canvas.jpg",
    },
    {
      id: 60,
      name: "Hello Cruel World. 100x100cm Acryl auf leinwand 2022",
      link: "2023/Hello Cruel World. 100x100cm Acryl auf leinwand 2022.jpg",
    },
    {
      id: 61,
      name: "Insekten,abgerichtet auf das Böse in der Welt, 30 x 40 cm, Acrylic on canvas, 2022",
      link: "2023/Insekten,abgerichtet auf das Böse in der Welt, 30 x 40 cm, Acrylic on canvas, 2022.jpg",
    },
    {
      id: 62,
      name: "Lost Pilgrim. 90 x120cm Acryl auf leinwand 2022",
      link: "2023/Lost Pilgrim. 90 x120cm Acryl auf leinwand 2022.jpg",
    },
    {
      id: 63,
      name: "Make Way For The Mold, Acrylic on canvas, 40 x 30 cm, 2022",
      link: "2023/Make Way For The Mold, Acrylic on canvas, 40 x 30 cm, 2022.jpg",
    },
    {
      id: 64,
      name: "My head is full of ghosts. 60x60cm Acryl auf leinwand 2022",
      link: "2023/My head is full of ghosts. 60x60cm Acryl auf leinwand 2022.jpg",
    },
    {
      id: 65,
      name: "Night Of Broken Glass, 40 x60 cm, Acrylic on canvas, 2022",
      link: "2023/Night Of Broken Glass, 40 x60 cm, Acrylic on canvas, 2022.jpg",
    },
    {
      id: 66,
      name: "O.T. 40x30cm Acryl auf leinwand 2022",
      link: "2023/O.T. 40x30cm Acryl auf leinwand 2022.jpg",
    },
    {
      id: 67,
      name: "O.T. 110x110cm Acryl auf leinwand 2022",
      link: "2023/O.T. 110x110cm Acryl auf leinwand 2022.jpg",
    },
    {
      id: 68,
      name: "Saints in Hell, 100x150cm Acrylic on canvas 2022",
      link: "2023/Saints in Hell, 100x150cm Acrylic on canvas 2022.jpg",
    },
    {
      id: 69,
      name: "Sofa in Singapur, 70 x110cm Acryl auf leinwand 2022",
      link: "2023/Sofa in Singapur, 70 x110cm Acryl auf leinwand 2022.jpg",
    },
    {
      id: 70,
      name: "The end of infinity, 70 x 110, Acryl auf leinwand 2022",
      link: "2023/The end of infinity, 70 x 110, Acryl auf leinwand 2022.jpg",
    },
    {
      id: 71,
      name: "The fall of Duckburg . Season 6 Episode 3,  70x 110 cm, Acrylic on canvas",
      link: "2023/The fall of Duckburg . Season 6 Episode 3,  70x 110 cm, Acrylic on canvas.jpg",
    },
    {
      id: 72,
      name: "The fall of Duckburg . Season 6 Episode 4,  90 x 90 cm, Acrylic on canvas",
      link: "2023/The fall of Duckburg . Season 6 Episode 4,  90 x 90 cm, Acrylic on canvas.jpg",
    },
    {
      id: 73,
      name: "The fall of Duckburg – Season 6 Episode 1, Arylic on canwas , 90 x 90 cm",
      link: "2023/The fall of Duckburg – Season 6 Episode 1, Arylic on canwas , 90 x 90 cm.jpg",
    },
    {
      id: 74,
      name: "The fall of Duckburg – Season 6 Episode 2, Arylic on canwas , 90 x 90 cm",
      link: "2023/The fall of Duckburg – Season 6 Episode 2, Arylic on canwas , 90 x 90 cm.jpg",
    },
    {
      id: 75,
      name: "The fall of Duckburg – Season 6 Episode 5, Arylic on canwas , 90 x 90 cm",
      link: "2023/The fall of Duckburg – Season 6 Episode 5, Arylic on canwas , 90 x 90 cm.jpg",
    },
    {
      id: 76,
      name: "We need a gimmic, 40 x 40 cm, Acrylic on canvas, 2022",
      link: "2023/We need a gimmic, 40 x 40 cm, Acrylic on canvas, 2022.jpg",
    },
  ],
  printsName: [
    {
      id: 1,
      name: "If they are stalking you... Hell is the sweetest place TO HIDE (dark)  -  23 x 33 - Mimeagraphy on paper - Edition of 26 - 2019",
      link: "prints/If they are stalking you... Hell is the sweetest place TO HIDE (dark) - 23 x 33 - Mimeagraphy on paper - Edition of 26 - 2019.jpg",
    },
    {
      id: 2,
      name: "If they are stalking you... Hell is the sweetest place TO HIDE (white)  -  23 x 33 - Mimeagraphy on paper - Edition of 12 - 2019",
      link: "prints/If they are stalking you... Hell is the sweetest place TO HIDE (white) - 23 x 33 - Mimeagraphy on paper - Edition of 12 - 2019.jpg",
    },
    {
      id: 3,
      name: "Torn web- 40 x 50 - silkscreen print on paper - edition of 36 - 2020",
      link: "prints/Torn web- 40 x 50 - silkscreen print on paper - edition of 36 - 2020.jpg",
    },
  ],
  sculpturesName: [
    { id: 1, name: "bird (135 cm).jpg", link: "sculptures/bird (135 cm).jpg" },
    {
      id: 2,
      name: "Dragonfly (110 x 130 cm )",
      link: "sculptures/Dragonfly (110 x 130 cm )).jpg",
    },
    {
      id: 3,
      name: "Dragonfly (110 x 130 cm)",
      link: "sculptures/Dragonfly (110 x 130 cm.jpg",
    },
    { id: 4, name: "", link: "sculptures/DSC08537.jpg" },
    { id: 5, name: "robot 1", link: "sculptures/robot1.jpg" },
    {
      id: 6,
      name: "Steel bug Nr 1 (43 cm)",
      link: "sculptures/Steel bug Nr 1 (43 cm).jpg",
    },
    {
      id: 7,
      name: "Steel bug Nr 2 (25 cm)",
      link: "sculptures/Steel bug Nr 2 (25 cm).jpg",
    },
    {
      id: 8,
      name: "Steel bug Nr 3 ( 37 cm)",
      link: "sculptures/Steel bug Nr 3 ( 37 cm).jpg",
    },
    {
      id: 9,
      name: "Steel bug Nr 4 ( 38 cm)",
      link: "sculptures/Steel bug Nr 4 ( 38 cm) .jpg",
    },
    {
      id: 10,
      name: "Steel bug Nr 5 ( 42 cm)",
      link: "sculptures/Steel bug Nr 5 ( 42 cm).jpg",
    },
  ],
};
reverseGallery=appContext.galleryName.reverse()
reversePrints=appContext.printsName.reverse()
reverseSculptures=appContext.sculpturesName.reverse();
const appContextReverse = {
  galleryName: reverseGallery,
  printsName: reversePrints,
  sculpturesName:reverseSculptures,
};
const appHtml = appTemplate(appContextReverse);
const displayApp = document.getElementById('gallery');
displayApp.innerHTML = appHtml;
