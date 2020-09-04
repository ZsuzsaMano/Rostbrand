// create lightbox
const lightbox = document.createElement('div')
lightbox.id= 'lightbox';
document.body.appendChild(lightbox);

//create figure inside lightbox

const figure = document.createElement('FIGURE');
figure.classList.add('lightbox__figure')
lightbox.appendChild(figure);

//create arrows to move between images
const arrowRight = document.createElement('div');
arrowRight.classList.add('arrow','arrow--right');
arrowRight.innerHTML='❯'

const arrowLeft = document.createElement('div');
arrowLeft.classList.add('arrow','arrow--left');
arrowLeft.innerHTML='❮'



const caption = document.createElement('figcaption');
caption.classList.add('ligthbox__caption');

//grab images and add to lighbox what is clicked

const images = document.querySelectorAll('img');
images.forEach(image=>{
  image.addEventListener('click', e => {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    img.classList.add('lightbox__image')
    img.src = image.src;


//if image already selected remove it
   while(figure.firstChild){
     figure.removeChild(figure.firstChild);
   }
    figure.appendChild(img);
    figure.appendChild(arrowLeft);
    figure.appendChild(arrowRight);
    figure.appendChild(caption);
    caption.innerHTML=image.nextElementSibling.innerHTML
  })
});

//remove lightbox if clicked
lightbox.addEventListener('click', e => {
  if(e.target !== e.currentTarget) return;
  lightbox.classList.remove('active');
});


//next button to move between images
arrowRight.addEventListener('click',()=> alert('clicked'));
