//Apps

const appSource   = document.getElementById('gallery-template').innerHTML;
const appTemplate = Handlebars.compile(appSource);
const appContext = { galleryName: [
  { name: 'From Ashes Rise (100 x 150 cm, Acrylic on canvas)', link: './img/season5/From Ashes Rise  (100 x 150 cm, Acrylic on canvas).jpg' },
  { name: 'From Her Lips to Gods Ears (40 x 60 cm, Acrylic on canvas)', link: './img/season5/From Her Lips to Gods Ears (40 x 60 cm, Acrylic on canvas).jpg' },
  { name: 'His Hero Is Gone (80  x 100 cm , Acrylic and Aching on iron plate)', link: './img/season5/His Hero Is Gone (80  x 100 cm , Acrylic and Aching on iron plate).jpg' },
  { name: 'Prächtig schaust du aus... (60 x 90 cm, Acrylic on canvas)', link: './img/season5/Prächtig schaust du aus... (60 x 90 cm, Acrylic on canvas).jpg' },
  { name: 'Steetart in Scheibbs', link: './img/season5/Steetart in Scheibbs.jpg' },
  { name: 'The Evil That Men Do (100 x 150 cm, Acrylic on canvas)', link: './img/season5/The Evil That Men Do (100 x 150 cm, Acrylic on canvas).jpg' },
  { name: 'The virus came from abroad (130 x 170 cm, Acrylic on canvas)', link: './img/season5/The virus came from abroad (130 x 170 cm, Acrylic on canvas).jpg' },
  { name: 'Torn web (70 x 150 cm, Acrylic on canvas)', link: './img/season5/Torn web (70 x 150 cm, Acrylic on canvas).jpg' },
  { name: 'Triumph and Defeat(100 x 150 cm, Acrylic on canvas)', link: './img/season5/Triumph and Defeat(100 x 150 cm, Acrylic on canvas).jpg' },
  { name: 'untitled ( 80 x 120 cm, Acrylic and eching on iron plate)', link: './img/season5/untitled ( 80 x 120 cm, Acrylic and eching on iron plate).jpg' },
  { name: 'Untitled (130 x 170 cm, Acrylic on canvas)', link: './img/season5/Untitled (130 x 170 cm, Acrylic on canvas).jpg' },
  { name: 'The fall of Duckburg – Season 4 Episode 1 (80 x 120 cm, Acrylic on canvas)', link: './img/season4/The fall of Duckburg – Season 4 Episode 1 (80 x 120 cm, Acrylic on canvas).jpg' },
  { name: 'The fall of Duckburg – Season 3 Episode 13 (80 x 115 cm, Acrylic on canvas)', link: './img/season3/The fall of Duckburg – Season 3 Episode 13 (80 x 115 cm, Acrylic on canvas).jpg' },
  { name: 'The fall of Duckburg – Season 3 Episode 12 (50 x 50 cm, Acrylic on canvas)', link: './img/season3/The fall of Duckburg – Season 3 Episode 12 (50 x 50 cm, Acrylic on canvas).jpg' },
  { name: 'The fall of Duckburg – Season 3 Episode 11 (100 x 150 cm, Acrylic on canvas)', link: './img/season3/The fall of Duckburg – Season 3 Episode 11 (100 x 150 cm, Acrylic on canvas).jpg' },
  { name: 'The fall of Duckburg – Season 3 Episode 10 (50 x 90 cm, Acrylic on canvas)', link: './img/season3/The fall of Duckburg – Season 3 Episode 10 (50 x 90 cm, Acrylic on canvas).jpg' },
  { name: 'The fall of Duckburg – Season 3 Episode 9 (140 x 210 cm, Acrylic on canvas)', link: './img/season3/The fall of Duckburg – Season 3 Episode 9 (140 x 210 cm, Acrylic on canvas).jpg' },
  { name: 'The fall of Duckburg – Season 3 Episode 8 (100 x 150 cm, Acrylic on canvas)', link: './img/season3/The fall of Duckburg – Season 3 Episode 8 (100 x 150 cm, Acrylic on canvas).jpg' },
  { name: 'The fall of Duckburg – Season 3 Episode 7 (60 x 80 cm, Acrylic on canvas)', link: './img/season3/The fall of Duckburg – Season 3 Episode 7 (60 x 80 cm, Acrylic on canvas).jpg' },
  { name: 'The fall of Duckburg – Season 3 Episode 6 (100 x 150 cm, Acrylic on canvas)', link: './img/season3/The fall of Duckburg – Season 3 Episode 6 (100 x 150 cm, Acrylic on canvas).jpg' },
  { name: 'The fall of Duckburg – Season 3 Episode 5 (60 x 70 cm, Acrylic on canvas)', link: './img/season3/The fall of Duckburg – Season 3 Episode 5 (60 x 70 cm, Acrylic on canvas).jpg' },
  { name: 'The fall of Duckburg – Season 3 Episode 4 (100 x 135 cm, Acrylic on canvas)', link: './img/season3/The fall of Duckburg – Season 3 Episode 4 (100 x 135 cm, Acrylic on canvas).jpg' },
  { name: 'The fall of Duckburg – Season 3 Episode 3 (70 x 90cm, Acrylic on canvas)', link: './img/season3/The fall of Duckburg – Season 3 Episode 3 (70 x 90cm, Acrylic on canvas).jpg' },
  { name: 'The fall of Duckburg – Season 3 Episode 2 (100 x 150 cm, Acrylic on canvas)', link: './img/season3/The fall of Duckburg – Season 3 Episode 2 (100 x 150 cm, Acrylic on canvas).jpg' },
  { name: 'The fall of Duckburg – Season 3 Episode (100 x 50 cm, Acrylic on canvas)', link: './img/season3/The fall of Duckburg – Season 3 Episode (100 x 50 cm, Acrylic on canvas).jpg' },
  { name: 'The fall of Duckburg – Season 2 Episode 5 (100 x 150 cm, Acrylic on canvas)', link: './img/season2/The fall of Duckburg – Season 2 Episode 5 (100 x 150 cm, Acrylic on canvas).jpg' },
  { name: 'The fall of Duckburg – Season 2 Episode 2 (100 x 150 cm, Acrylic on canvas)', link: './img/season2/The fall of Duckburg – Season 2 Episode 2 (100 x 150 cm, Acrylic on canvas).jpg' },
  { name: 'The fall of Duckburg – Season 2 Episode 1 (75 x 150 cm, Acrylic on canvas)', link: './img/season2/The fall of Duckburg – Season 2 Episode 1 (75 x 150 cm, Acrylic on canvas).jpg' },
  { name: 'The fall of Duckburg – Season 2 Episode 1 (20 x 20 cm, Acrylic on canvas)', link: './img/season2/The fall of Duckburg – Season 2 Episode 1 (20 x 20 cm, Acrylic on canvas).jpg' },
  { name: 'The fall of Duckburg – Season 2 Episode (100 x 100 cm, Acrylic on canvas)', link: './img/season2/The fall of Duckburg – Season 2 Episode (100 x 100 cm, Acrylic on canvas).jpg' },
  { name: 'The fall of Duckburg – Season 1 Episode 8 (100 x 150 cm, Acrylic on canvas)', link: './img/season1/The fall of Duckburg – Season 1 Episode 8 (100 x 150 cm, Acrylic on canvas).jpg' },
  { name: 'The fall of Duckburg – Season 1 Episode 7 (100 x 150 cm, Acrylic on canvas)', link: './img/season1/The fall of Duckburg – Season 1 Episode 7 (100 x 150 cm, Acrylic on canvas).jpg' },
  { name: 'The fall of Duckburg – Season 1 Episode 5 (100 x 130 cm, Acrylic on canvas)', link: './img/season1/The fall of Duckburg – Season 1 Episode 5 (100 x 130 cm, Acrylic on canvas).jpg' },
  { name: 'The fall of Duckburg – Season 1 Episode 3 (100 x 150 cm, Acrylic on canvas)', link: './img/season1/The fall of Duckburg – Season 1 Episode 3 (100 x 150 cm, Acrylic on canvas).jpg' },
  { name: 'The fall of Duckburg – Season 1 Episode 2 (100 x 150 cm, Acrylic on canvas)', link: './img/season1/The fall of Duckburg – Season 1 Episode 2 (100 x 150 cm, Acrylic on canvas).jpg' },
  { name: 'The fall of Duckburg – Season 1 Episode 1 (115 x 155 cm, Acrylic and oil on canvas)', link: './img/season1/The fall of Duckburg – Season 1 Episode 1 (115 x 155 cm, Acrylic and oil on canvas).jpg' },
  { name: 'The fall of Duckburg – Season 1 Episode 1 (100 x 150 cm, Acrylic and oil on canvas)', link: './img/season1/The fall of Duckburg – Season 1 Episode 1 (100 x 150 cm, Acrylic and oil on canvas).jpg' },
], };
const appHtml    = appTemplate(appContext);
const displayApp = document.getElementById('gallery');
displayApp.innerHTML = appHtml;
