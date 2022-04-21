//Apps

const appSource   = document.getElementById('gallery-template').innerHTML;
const appTemplate = Handlebars.compile(appSource);
const appContext = {
  galleryName: [
  { id:1, name: 'From Ashes Rise (100 x 150 cm, Acrylic on canvas)', link: 'season5/From Ashes Rise  (100 x 150 cm, Acrylic on canvas).jpg' },
  { id:2, name: 'From Her Lips to Gods Ears (40 x 60 cm, Acrylic on canvas)', link: 'season5/From Her Lips to Gods Ears (40 x 60 cm, Acrylic on canvas).jpg' },
  { id:3, name: 'His Hero Is Gone (80  x 100 cm , Acrylic and Aching on iron plate)', link: 'season5/His Hero Is Gone (80  x 100 cm , Acrylic and Aching on iron plate).jpg' },
  { id:4,name: 'Prächtig schaust du aus... (60 x 90 cm, Acrylic on canvas)', link: 'season5/Prächtig schaust du aus... (60 x 90 cm, Acrylic on canvas).jpg' },
  { id:5,name: 'Steetart in Scheibbs', link: 'season5/Steetart in Scheibbs.jpg' },
  { id:6, name: 'The Evil That Men Do (100 x 150 cm, Acrylic on canvas)', link: 'season5/The Evil That Men Do (100 x 150 cm, Acrylic on canvas).jpg' },
  { id:7, name: 'The virus came from abroad (130 x 170 cm, Acrylic on canvas)', link: 'season5/The virus came from abroad (130 x 170 cm, Acrylic on canvas).jpg' },
  { id:8, name: 'Torn web (70 x 150 cm, Acrylic on canvas)', link: 'season5/Torn web (70 x 150 cm, Acrylic on canvas).jpg' },
  { id:9, name: 'Triumph and Defeat(100 x 150 cm, Acrylic on canvas)', link: 'season5/Triumph and Defeat(100 x 150 cm, Acrylic on canvas).jpg' },
  { id:10, name: 'untitled ( 80 x 120 cm, Acrylic and eching on iron plate)', link: 'season5/untitled ( 80 x 120 cm, Acrylic and eching on iron plate).jpg' },
  { id:11, name: 'Untitled (130 x 170 cm, Acrylic on canvas)', link: 'season5/Untitled (130 x 170 cm, Acrylic on canvas).jpg' },
  { id:12, name: 'The fall of Duckburg – Season 4 Episode 1 (80 x 120 cm, Acrylic on canvas)', link: 'season4/The fall of Duckburg – Season 4 Episode 1 (80 x 120 cm, Acrylic on canvas).jpg' },
  { id:13, name: 'The fall of Duckburg – Season 3 Episode 13 (80 x 115 cm, Acrylic on canvas)', link: 'season3/The fall of Duckburg – Season 3 Episode 13 (80 x 115 cm, Acrylic on canvas).jpg' },
  { id:14, name: 'The fall of Duckburg – Season 3 Episode 12 (50 x 50 cm, Acrylic on canvas)', link: 'season3/The fall of Duckburg – Season 3 Episode 12 (50 x 50 cm, Acrylic on canvas).jpg' },
  { id:15, name: 'The fall of Duckburg – Season 3 Episode 11 (100 x 150 cm, Acrylic on canvas)', link: 'season3/The fall of Duckburg – Season 3 Episode 11 (100 x 150 cm, Acrylic on canvas).jpg' },
  { id:16, name: 'The fall of Duckburg – Season 3 Episode 10 (50 x 90 cm, Acrylic on canvas)', link: 'season3/The fall of Duckburg – Season 3 Episode 10 (50 x 90 cm, Acrylic on canvas).jpg' },
  { id:17, name: 'The fall of Duckburg – Season 3 Episode 9 (140 x 210 cm, Acrylic on canvas)', link: 'season3/The fall of Duckburg – Season 3 Episode 9 (140 x 210 cm, Acrylic on canvas).jpg' },
  { id:18, name: 'The fall of Duckburg – Season 3 Episode 8 (100 x 150 cm, Acrylic on canvas)', link: 'season3/The fall of Duckburg – Season 3 Episode 8 (100 x 150 cm, Acrylic on canvas).jpg' },
  { id:19, name: 'The fall of Duckburg – Season 3 Episode 7 (60 x 80 cm, Acrylic on canvas)', link: 'season3/The fall of Duckburg – Season 3 Episode 7 (60 x 80 cm, Acrylic on canvas).jpg' },
  { id:20, name: 'The fall of Duckburg – Season 3 Episode 6 (100 x 150 cm, Acrylic on canvas)', link: 'season3/The fall of Duckburg – Season 3 Episode 6 (100 x 150 cm, Acrylic on canvas).jpg' },
  { id:21, name: 'The fall of Duckburg – Season 3 Episode 5 (60 x 70 cm, Acrylic on canvas)', link: 'season3/The fall of Duckburg – Season 3 Episode 5 (60 x 70 cm, Acrylic on canvas).jpg' },
  { id:22, name: 'The fall of Duckburg – Season 3 Episode 4 (100 x 135 cm, Acrylic on canvas)', link: 'season3/The fall of Duckburg – Season 3 Episode 4 (100 x 135 cm, Acrylic on canvas).jpg' },
  { id:23, name: 'The fall of Duckburg – Season 3 Episode 3 (70 x 90cm, Acrylic on canvas)', link: 'season3/The fall of Duckburg – Season 3 Episode 3 (70 x 90cm, Acrylic on canvas).jpg' },
  { id:24, name: 'The fall of Duckburg – Season 3 Episode 2 (100 x 150 cm, Acrylic on canvas)', link: 'season3/The fall of Duckburg – Season 3 Episode 2 (100 x 150 cm, Acrylic on canvas).jpg' },
  { id:25, name: 'The fall of Duckburg – Season 3 Episode 1 (100 x 50 cm, Acrylic on canvas)', link: 'season3/The fall of Duckburg – Season 3 Episode (100 x 50 cm, Acrylic on canvas).jpg' },
  { id:26, name: 'The fall of Duckburg – Season 2 Episode 5 (100 x 150 cm, Acrylic on canvas)', link: 'season2/The fall of Duckburg – Season 2 Episode 5 (100 x 150 cm, Acrylic on canvas).jpg' },
  { id:27, name: 'The fall of Duckburg – Season 2 Episode 4 (20 x 20 cm, Acrylic on canvas)', link: 'season2/The fall of Duckburg – Season 2 Episode 1 (20 x 20 cm, Acrylic on canvas).jpg' },
  { id:28,  name: 'The fall of Duckburg – Season 2 Episode 3 (100 x 100 cm, Acrylic on canvas)', link: 'season2/The fall of Duckburg – Season 2 Episode (100 x 100 cm, Acrylic on canvas).jpg' },
  { id:29, name: 'The fall of Duckburg – Season 2 Episode 2 (100 x 150 cm, Acrylic on canvas)', link: 'season2/The fall of Duckburg – Season 2 Episode 2 (100 x 150 cm, Acrylic on canvas).jpg' },
  { id:30, name: 'The fall of Duckburg – Season 2 Episode 1 (75 x 150 cm, Acrylic on canvas)', link: 'season2/The fall of Duckburg – Season 2 Episode 1 (75 x 150 cm, Acrylic on canvas).jpg' },
  { id:31, name: 'The fall of Duckburg – Season 1 Episode 8 (100 x 150 cm, Acrylic on canvas)', link: 'season1/The fall of Duckburg – Season 1 Episode 8 (100 x 150 cm, Acrylic on canvas).jpg' },
  { id:32, name: 'The fall of Duckburg – Season 1 Episode 7 (100 x 150 cm, Acrylic on canvas)', link: 'season1/The fall of Duckburg – Season 1 Episode 7 (100 x 150 cm, Acrylic on canvas).jpg' },
  { id:33, name: 'The fall of Duckburg – Season 1 Episode 6 (115 x 155 cm, Acrylic and oil on canvas)', link: 'season1/The fall of Duckburg – Season 1 Episode 1 (115 x 155 cm, Acrylic and oil on canvas).jpg' },
  { id:34, name: 'The fall of Duckburg – Season 1 Episode 5 (100 x 130 cm, Acrylic on canvas)', link: 'season1/The fall of Duckburg – Season 1 Episode 5 (100 x 130 cm, Acrylic on canvas).jpg' },
  { id:35, name: 'The fall of Duckburg – Season 1 Episode 3 (100 x 150 cm, Acrylic on canvas)', link: 'season1/The fall of Duckburg – Season 1 Episode 3 (100 x 150 cm, Acrylic on canvas).jpg' },
  { id:36, name: 'The fall of Duckburg – Season 1 Episode 2 (100 x 150 cm, Acrylic on canvas)', link: 'season1/The fall of Duckburg – Season 1 Episode 2 (100 x 150 cm, Acrylic on canvas).jpg' },
  { id:37, name: 'The fall of Duckburg – Season 1 Episode 1 (100 x 150 cm, Acrylic and oil on canvas)', link: 'season1/The fall of Duckburg – Season 1 Episode 1 (100 x 150 cm, Acrylic and oil on canvas).jpg' },
  { id:38, name: 'Black wind (fire and steel) (Acryl auf Leinwand, 70x110cm,2022)', link: 'peti202204/Black wind (fire and steel) (Acryl auf Leinwand, 70x110cm,2022).jpg' },
  { id:39, name: 'I bet you look good on the dancefloor! (Acryl auf Leinwand, 70x50cm,2022)', link: 'peti202204/I bet you look good on the dancefloor! (Acryl auf Leinwand, 70x50cm,2022).jpg' },
  { id:40, name: 'O.T.  (Acryl auf Leinwand, 20x30cm,2022)', link: 'peti202204/O.T.  (Acryl auf Leinwand, 20x30cm,2022).jpg' },
  { id:41, name: 'O.T.  (Acryl auf Leinwand, 20x31cm,2022)', link: 'peti202204/O.T.  (Acryl auf Leinwand, 20x31cm,2022).jpg' },
  { id:42, name: 'O.T.  (Acryl auf Leinwand, 20x32cm,2022)', link: 'peti202204/O.T.  (Acryl auf Leinwand, 20x32cm,2022).jpg' },
  { id:43, name: 'O.T.  (Acryl auf Leinwand, 20x32cm,2022)', link: 'peti202204/O.T.  (Acryl auf Leinwand, 20x32cm,2022).jpg' },
  { id:44, name: 'O.T.  (Acryl auf Leinwand, 21x33cm,2022)', link: 'peti202204/O.T.  (Acryl auf Leinwand, 21x33cm,2022).jpg' },
  { id:45, name: 'O.T.  (Acryl auf Leinwand, 25x32cm,2022)', link: 'peti202204/O.T.  (Acryl auf Leinwand, 25x32cm,2022).jpg' },
  { id:46, name: 'O.T. (Acryl auf Leinwand, 90x50cm,2022)', link: 'peti202204/O.T. (Acryl auf Leinwand, 90x50cm,2022).jpg' },
  { id:47, name: 'Pink turns Blue (Acryl auf Leinwand, 100x70cm,2020)', link: 'peti202204/Pink turns Blue (Acryl auf Leinwand, 100x70cm,2020).jpg' },
  { id:48, name: 'Stop screaming! (it´s what the bomb wants us to do) - (Acryl auf Leinwand, 70x150cm,2022)', link: 'img/peti202204/Stop screaming! (it´s what the bomb wants us to do) - (Acryl auf Leinwand, 70x150cm,2022).jpg' },
  { id:49, name: 'The fall of Duckburg – Season 4 Episode 1 (90 x 70 cm, Acrylic on canvas, 2020)', link: 'peti202204/The fall of Duckburg – Season 4 Episode 1 (90 x 70 cm, Acrylic on canvas, 2020).jpg' },
  { id:50, name: 'The fall of Duckburg – Season 4 Episode 2 (50 x 70 cm, Acrylic on canvas, 2020)', link: 'peti202204/The fall of Duckburg – Season 4 Episode 2 (50 x 70 cm, Acrylic on canvas, 2020).jpg' },
  { id:51, name: 'The fall of Duckburg – Season 6 Episode 1 (20 x 30 cm, Acrylic  on canvas, 2020)', link: 'peti202204/The fall of Duckburg – Season 6 Episode 1 (20 x 30 cm, Acrylic  on canvas, 2020).jpg' },
  { id:52, name: 'The fall of Duckburg – Season 6 Episode 2 (90 x 90 cm, Acrylic on canvas, 2022)', link: 'peti202204/The fall of Duckburg – Season 6 Episode 2 (90 x 90 cm, Acrylic on canvas, 2022).jpg' },
  { id:53, name: 'The fall of Duckburg – Season 6 Episode 3 (90 x 45 cm, Acrylic  on canvas, 2020)', link: 'peti202204/The fall of Duckburg – Season 6 Episode 3 (90 x 45 cm, Acrylic  on canvas, 2020).jpg' },
  { id:54, name: 'The sun is going nowhere (Acryl auf Leinwand, 100x150cm,2022)', link: 'peti202204/The sun is going nowhere (Acryl auf Leinwand, 100x150cm,2022).jpg' },
  { id:55, name: 'You look like I need a drink (Acryl auf Leinwand, 130x150cm,2022)', link: 'peti202204/You look like I need a drink (Acryl auf Leinwand, 130x150cm,2022).jpg' },
],
printsName:[
  { id:1, name: 'If they are stalking you... Hell is the sweetest place TO HIDE (dark)  -  23 x 33 - Mimeagraphy on paper - Edition of 26 - 2019', link: 'prints/If they are stalking you... Hell is the sweetest place TO HIDE (dark) - 23 x 33 - Mimeagraphy on paper - Edition of 26 - 2019.jpg' },
  { id:2, name: 'If they are stalking you... Hell is the sweetest place TO HIDE (white)  -  23 x 33 - Mimeagraphy on paper - Edition of 12 - 2019', link: 'prints/If they are stalking you... Hell is the sweetest place TO HIDE (white) - 23 x 33 - Mimeagraphy on paper - Edition of 12 - 2019.jpg' },
  { id:3, name: 'Torn web- 40 x 50 - silkscreen print on paper - edition of 36 - 2020', link: 'prints/Torn web- 40 x 50 - silkscreen print on paper - edition of 36 - 2020.jpg' },
],
sculpturesName:[
  { id:1, name:'bird (135 cm).jpg', link:'sculptures/bird (135 cm).jpg'},
  { id:2, name:'Dragonfly (110 x 130 cm )', link:'sculptures/Dragonfly (110 x 130 cm )).jpg'},
  { id:3, name:'Dragonfly (110 x 130 cm)', link:'sculptures/Dragonfly (110 x 130 cm.jpg'},
  { id:4, name:'', link:'sculptures/DSC08537.jpg'},
  { id:5, name:'robot 1', link:'sculptures/robot1.jpg'},
  { id:6, name:'Steel bug Nr 1 (43 cm)', link:'sculptures/Steel bug Nr 1 (43 cm).jpg'},
  { id:7, name:'Steel bug Nr 2 (25 cm)', link:'sculptures/Steel bug Nr 2 (25 cm).jpg'},
  { id:8, name:'Steel bug Nr 3 ( 37 cm)', link:'sculptures/Steel bug Nr 3 ( 37 cm).jpg'},
  { id:9, name:'Steel bug Nr 4 ( 38 cm)', link:'sculptures/Steel bug Nr 4 ( 38 cm) .jpg'},
  { id:10,  name:'Steel bug Nr 5 ( 42 cm)', link:'sculptures/Steel bug Nr 5 ( 42 cm).jpg'},
],
 };
const appHtml    = appTemplate(appContext);
const displayApp = document.getElementById('gallery');
displayApp.innerHTML = appHtml;
