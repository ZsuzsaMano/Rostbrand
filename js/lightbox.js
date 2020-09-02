//implement lightbox

const lightbox = document.createElement('div')
lightbox.id= 'lightbox';
document.body.appendChild(lightbox);

//create figure inside lightbox

const figure = document.createElement('FIGURE');
figure.classList.add('lightbox__figure')
lightbox.appendChild(figure);

const caption = document.createElement('figcaption');
caption.classList.add('ligthbox__caption');
caption.innerHTML = 'proba';

//grab images and add them to lighbox if  they are clicked

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
    figure.appendChild(caption)
  })
});

//remove lightbox if clicked
lightbox.addEventListener('click', e => {
  if(e.target !== e.currentTarget) return;
  lightbox.classList.remove('active');
});
