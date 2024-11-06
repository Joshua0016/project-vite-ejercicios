
console.log("INSTRUCCIONES...");
console.log("1.Debe de introducir el nombre y el precio de los productos que desea agregar a una lista de articulos");
console.log("2. al final del programa se le mostrará todos los articulos con sus precios originales menos un 15% de descuento");
   
function articles(){

    //elementos de entrada y boton
let app = document.getElementById("input-group3") as HTMLElement;
let contentResults = document.getElementById("content-products") as HTMLElement;

let button = document.createElement("button") as HTMLButtonElement;
let buttonReset = document.createElement("button") as HTMLButtonElement;

let nameInput : any = document.createElement("input") as HTMLInputElement;
let priceInput : any = document.createElement("input") as HTMLInputElement;

nameInput.type = "text";
nameInput.placeholder = "producto";

priceInput.type = "text";
priceInput.placeholder = "precio";

button.textContent = "agregar producto";
buttonReset.textContent = "Reiniciar";

app.appendChild(nameInput);
app.appendChild(priceInput);
app.appendChild(button);
app.appendChild(buttonReset);

type Producto = {
    nombre : string,
    precio : number,
    [key:string]: any;//propiedades Dinamicas, permite agregar más prpiedades si es necesario
}

const productos : Producto[] =[
  //  {nombre: "nevera", precio: 30000},
    //{nombre: "estufa", precio: 25000},
]
   const list = document.createElement("ul");

   button.addEventListener("click", ()=>{

         
try {
              
        if(!isNaN(nameInput.value)){
            throw new Error("Error al introducir el nombre");
        }
        if(isNaN(priceInput.value)){
            throw new Error("Error al introducir el precio");
        }
        productos.push({nombre: nameInput.value, precio: priceInput.value});
    
       //acceder al último elemento del arreglo
        let ultimoElemento = productos.length -1;

        //Aplicar descuento al último elemento del arreglo
        productos[ultimoElemento].descuento = 0.15 * productos[ultimoElemento].precio ;

        const item = document.createElement("li");
        item.textContent = `Articulo :${productos[ultimoElemento].nombre} Precio$: ${productos[ultimoElemento].precio} Descuento: ${productos[ultimoElemento].descuento}`
        list.appendChild(item);
        //espacio entre productos
        const br = document.createElement("br");
        list.appendChild(br);
   

    contentResults.appendChild(list);
    nameInput.value = "";
    priceInput.value = "";
        

} catch (error:any) {
    contentResults.textContent ="Ha ocurrido un error :"+error.message;
}

   })

   buttonReset.addEventListener("click", ()=>{
    list.innerHTML = "";
    nameInput.value = "";
    priceInput.value = "";
    productos.length = 0;
   })


}
export {articles}