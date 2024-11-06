 function imc(){
  
    let app = document.getElementById("input-group1") as HTMLElement;

    //elementos de entrada
    let peso : any = document.createElement("input");
    let altura : any = document.createElement("input");

    peso.type = "text";
    altura.type ="text";
    peso.placeholder = "ingresar tu peso en kg";
    altura.placeholder = "ingresa tu altura en metros"

    let resultado = document.createElement("p");
    let button = document.createElement("button");
    button.textContent = "Calcular imc";

    app.appendChild(peso);
    app.appendChild(altura);
    app.appendChild(button);
    app.appendChild(resultado);

    button.addEventListener("click", ()=>{
    
   
   try {
               
    let alturaFinal = Math.pow(parseFloat(altura.value), 2);
    let IndiceMC = parseInt(peso.value) / alturaFinal;
    
     if(isNaN(peso.value)){
         throw new Error("Error al introducir el peso");
     }
   
     if(isNaN(altura.value)){
         throw new Error("Error al introducir la altura");
     }
     
     resultado.textContent = `tu índice de masa corporal es : ${IndiceMC.toFixed(4)}`;
    
 
     
 } catch (error:any) {
     resultado.textContent = "ha ocurrido un error inesperado: "+error.message;
         
    
}

    })

}
export{imc};
