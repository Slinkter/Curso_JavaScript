"use strict";

const cajas = document.querySelectorAll(".caja");
const verifyVisibility = (entries) => {
  for (const element of entries) {
    if (element.isIntersecting) {
     console.log(element);
     console.log(element.target);
      console.log("se esta viendo la ", element.target.textContent);
    }
  }
};

const observer = new IntersectionObserver(verifyVisibility);

for(const caja of cajas){
  observer.observe(caja);
}
