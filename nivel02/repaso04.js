const materiaHTML = document.querySelector(".materias");
const data_materias = [] // --> array de objetos
data_materias.push({nombre:"Liam",apellido:"Cave"})
data_materias.push({nombre:"Fiorela",apellido:"Sosa"})
data_materias.push({nombre:"Andrea",apellido:"Vazques"})
data_materias.push({nombre:"Carlos",apellido:"Flores"})

const verificarMateriaPorID = (id)=>{
    return new Promise((resolve,reject)=>{
        if (data_materias[id]==undefined) {
          reject(`error, no se ha encontrao ese id ${data_materias[id]}`)
        }else{
        resolve(data_materias[id])
        }
    })
}

const mostrarMaterias = async()=>{
    let array_materia = []
    console.log(data_materias.length);
    for(i in data_materias){
      console.log(data_materias[i]);

      array_materia[i]= await verificarMateriaPorID(i);
      let newHTMLCode  = `
      <div class="materia">
        <div class="nombre">
           ${array_materia[i].nombre}
        </div>
        <div class="nota">
        ${array_materia[i].apellido}
        </div>
    </div>
    `;
        materiaHTML.innerHTML = materiaHTML.innerHTML +newHTMLCode;
    }


}

mostrarMaterias();
