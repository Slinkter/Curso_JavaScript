const getName = async () => {
  let peticion;
  let resultado;

  //
  peticion = await fetch("https://reqres.in/api/users?page=2");
  console.log(peticion);
  resultado = await peticion.json();
  console.log(resultado);
  console.log(resultado.data);
  console.log(typeof resultado.data);

  let array_data = resultado.data;

  for (elemento in array_data) {
    console.log(array_data[elemento].email);
    console.log(array_data[elemento].first_name);
    console.log(array_data[elemento].last_name);
    //console.log(array_data[elemento].avatar)
    div_first_name = document.createElement("DIV");
    div_last_name = document.createElement("DIV");
    div_email = document.createElement("DIV");

    div_first_name.classList.add("first_name");
    div_last_name.classList.add("last_name");
    div_email.classList.add("email");
    
    //
    div_first_name.innerHTML = array_data[elemento].first_name;
    div_last_name.innerHTML = array_data[elemento].last_name;
    div_email.innerHTML = array_data[elemento].email;

    //   div.innerHTML = array_data[elemento].avatar;

    document.write("<br>");
    document.body.appendChild(div_first_name);
    document.body.appendChild(div_last_name);
    document.body.appendChild(div_email);
  }
};

getName();
