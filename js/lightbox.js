//implement lightbox getElementById

const lightbox = document.createElement('div')
lightbox.id= 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('img');
images.forEach(image=>{
  image.addEventListener('click', e => {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    img.classList.add('lightbox__image')
    img.src = image.src;
    while(lightbox.firstChild){
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  })
});

lightbox.addEventListener('click', e => {
  lightbox.classList.remove('active');
});
