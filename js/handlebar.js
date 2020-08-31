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
  { name: 'The virus came from abroad (130 x 170 cm, Acrylic on canvas)', link: './img/season5/The virus came from abroad (130 x 170 cm, Acrylic on canvas).jpg' },
  { name: 'The virus came from abroad (130 x 170 cm, Acrylic on canvas)', link: './img/season5/The virus came from abroad (130 x 170 cm, Acrylic on canvas).jpg' },

], };
const appHtml    = appTemplate(appContext);
const displayApp = document.getElementById('gallery');
displayApp.innerHTML = appHtml;
