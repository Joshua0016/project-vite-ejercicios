function multipli():void {
 console.log("\nINSTRUCCIONES...");
console.log("1-ingresa los números de los cuales deseas ver su tabla de multiplicación, cada número debe estar separados por una coma (,) entre ellos");
console.log("2-Debe de ingresar un mínimo de 4 números y un máximo de 10");


const app = document.getElementById("input-group2") as HTMLElement;
const contNumber = document.getElementById("content-number") as HTMLElement;
//Elementos de entrada
let number  = document.createElement("input") as HTMLInputElement;
//Botón
let button = document.createElement("button") as HTMLButtonElement;
//
let resultsContainer = document.createElement("div") as HTMLElement;

number.type = "text";
number.placeholder = "ingresar números separados por coma";
button.textContent = "multiplicar";

app.appendChild(number);
app.appendChild(button);
contNumber.appendChild(resultsContainer);


button.addEventListener("click", ()=>{
    resultsContainer.innerHTML = "";//limpiar los resultados previos

    try {
        let ArrayNumbers : number[] = number.value.replace(/\s+/g, "").split(",").map(Number);
    
        if(ArrayNumbers.some(isNaN)){//COMPROBAR si la entrada es o no un numero en uno de los elemento del arreglo
            throw new Error("La entrada no es un número valido")
        }
        if (ArrayNumbers.length < 4 || ArrayNumbers.length > 10){//
            throw new Error("Debe introducir el rango establecido");
        }

        const list = document.createElement("ul");
            
            for(let i = 0; i < ArrayNumbers.length; i++){
                let contador:number = 1;
                
                while(contador < 11){
                    const item = document.createElement("li");
                    item.textContent =`${ArrayNumbers[i]} x ${contador} = ${ArrayNumbers[i] * contador}`
                    list.appendChild(item);
                    contador+=1;
                }
                contNumber.appendChild(list);
                const br = document.createElement("br");
                list.appendChild(br);
            }

            resultsContainer.appendChild(list);
    } catch (error:any) {
        resultsContainer.textContent = "Ha ocurrido un error :"+error.message;
    }
})



}

export {multipli}