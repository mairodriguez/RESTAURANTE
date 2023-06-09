
const anadir = document.querySelectorAll('.añadir');
console.log(anadir)
for (let i = 0; i < anadir.length; i++) {
    anadir[i].addEventListener('click', anadir_plato);
}
let valorClick = 0;
let vacioPlatos = [];
let precio_plato;
function anadir_plato() {
 
    const plato = this.parentElement;
    const precio = plato.querySelector('input').value;
    const imagen = plato.querySelector('img');
    const texto = plato.querySelector('h2').textContent;
    let botonx1 = document.querySelectorAll('.butonx1');
    let cantidad = parseFloat(document.getElementsByClassName("cant1").value|0);
    let epa ;

    const div = document.createElement('div');
    div.classList.add('card');
    document.querySelector('#mySidebar').appendChild(div);
    const figure = document.createElement('figure');
    figure.classList.add('figure');
    div.appendChild(figure);
    const img = document.createElement('img');
    img.classList.add('img');
    img.src = imagen;
    figure.appendChild(img);
    const h2 = document.createElement('h2');
    h2.textContent = texto;
    div.appendChild(h2);
    
     precio_plato = document.createElement('p');
     precio_plato.id = "precioplato"
     precio_plato.textContent = precio;
    precio_plato.classList.add('precio_plato');
    div.appendChild(precio_plato);

    const eliminar = document.createElement('button')
    eliminar.textContent = 'Eliminar';
    eliminar.classList.add('Eliminar');
    div.appendChild(eliminar);
     eliminar.addEventListener('click', eliminar_plato);
    
     vacioPlatos.push(precio);
     console.log(vacioPlatos)

     console.log("holi")

     for(i = 0; i < botonx1.length; i++){
        botonx1[i].addEventListener("click", () =>{
           
         valorClick +=0;
         valorClick = parseFloat(precio) + valorClick ;
         epa =precio_plato.textContent ;
         precio_plato.textContent = valorClick;
        console.log("my" + epa)
        

     totaltodo()
     });
    }
    function totaltodo(){
        let i = 1;
        let total2 = parseInt(valorClick) + parseInt(precio);
        epa =precio_plato.textContent ;
        precio_plato.textContent = total2;
    }
   
 }
 //eliminar plato
 const eliminar = document.querySelectorAll('.eliminar');
 console.log(eliminar)
 for (let i = 0; i < eliminar.length; i++) {   
      eliminar[i].addEventListener('click', eliminar_plato);
 }
 function eliminar_plato() {
     const plato = this.parentElement;
     plato.remove();
 }
