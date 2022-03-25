dineroCofla = prompt("Cuanto dinero tienes Cofla?");


if (dineroCofla > 0.6) {
  alert("comprate el helado de agua ");
} else if (dineroCofla >= 1 && dineroCofla < 1.6) {
  alert("comprate el helado de crema");
} else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
  alert("comprate el helado de heladix");
} else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
  alert("comprate el helado de heladovich");
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
  alert("comprate el helado de helardo");
} else if (dineroCofla >= 2.9) {
  alert("helado con confites o el pote de 1/4 kg");
} else {
  alert("no te alcanza a");
}
