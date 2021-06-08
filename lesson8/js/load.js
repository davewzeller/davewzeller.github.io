const imagesToLoad = document.querySelectorAll("img[data-src]");


const loadImages = (Image) => {
  Image.setAttribute("src", Image.getAttribute("data-src"));
  Image.onload = () => {
    Image.removeAttribute("data-src");
  };
};

const imgOptions = {
  rootMargin: '0px 0px 50px 0px',
  threshold: 1
};


if ("IntersectionObserver" in window) {
  const imgObserver = new IntersectionObserver((items, imgObserver) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        imgObserver.unobserve(item.target);
      }
    });
  }, imgOptions); 
  
  imagesToLoad.forEach((img)=>{
    imgObserver.observe(img);
  });

} else{
  imagesToLoad.forEach((img)=>{
    loadImages(img);
  });
}

//thank goodness for the lab...also side note data-src is not the same as data-scr :(