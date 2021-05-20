"use strict";

const caja3 = document.querySelector(".caja3");
const verifyVisibility = (entries) => {
  const entry = entries[0];
  console.log(entry);
  console.log(entry.isIntersecting);
};

const observer = new IntersectionObserver(verifyVisibility);

observer.observe(caja3)
