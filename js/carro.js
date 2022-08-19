// const btnaumentar = document.querySelector(".btn-info");
// const span = document.getElementById("span");
// let numero = 0;  
// // const btndisminuir = document.querySelector(".btn-danger")


// btnaumentar.addEventListener("click", () =>{
//   console.log("me diste click ")
//   numero++
//   span.textContent = numero
// })




const resultado = document.getElementById("resultado");
const btnAgregar = document.querySelector(".btn-info");
let contador = 0;
const btneliminar = document.querySelector(".btn-danger")

btneliminar.addEventListener("click", () =>{
  console.log("eliminando")
  contador = contador -1
  resultado.textContent = contador
}  
)


btnAgregar.addEventListener("click", () => {
  console.log("diste click");
  contador++;
  resultado.textContent = contador
});

// btneliminar.addEventListener("click", () =>{
//   console.log("eliminar")
// })
  


 
// btndisminuir.addEventListener("click", () =>{
//   console.log("funciona disminuir")
// })




// const lista = document.getElementById("lista-dinamica");
// const arrayItem = ["item 1", "item 2", "item 3"];

// const fragment = document.createDocumentFragment();
// const template = document.getElementById("template-li").content;  
// console.log(template)


// arrayItem.forEach((item) => {
//   template.querySelector("span").textContent = item;
//   const clone = template.cloneNode(true);
//   // const clone = document.importNode(template, true);
//   fragment.appendChild(clone);
// });

// lista.appendChild(fragment);