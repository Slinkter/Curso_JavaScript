const mq = window.matchMedia("(max-width:500px)");
const caja = document.querySelector(".caja");

console.log(mq);
mq.addEventListener("change", () => {
  console.log("dentro de area de 500 px ");

  if (caja.classList == "caja") {
    // cambiar la clase de div
    caja.classList.replace("caja", "caja-responsive");
  } else if (caja.classList == "caja-responsive") {
    caja.classList.replace("caja-responsive", "caja");
  }
});
