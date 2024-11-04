function checkPalindrome(){
  //selecciona el elemento 'div' creado en el html
  const app = document.getElementById("input-group") as HTMLElement;//<-- indica a ts el tipo de objeto

  //elementos de entrada y boton
  const input :any = document.createElement("input") as HTMLInputElement;
  input.type = "text";
  input.placeholder = "ingresa una palabra"

  const button = document.createElement("button") as HTMLButtonElement;
  button.textContent = "palindrome";

  //mostrar resultado
  const resultado = document.createElement("p");
  

app.appendChild(input);
app.appendChild(resultado);
app.appendChild(button);


  button.addEventListener('click', ()=>{

    let palindrome :string = input.value.replace(/\s+/g, "").toLocaleLowerCase()//Convertir todos los caracteres en minúscula y Eliminar los espacios
    
    try {
      if(!isNaN(input.value)){//invertir el valor de isNaN para asegurar que la entrada sea string
          throw new Error(resultado.textContent = "No puedes ingresar un número");
      }
  
      //Conviertir el texto en un arreglo e inviertir el orden, luego conviertir el arreglo en una cadena
      let reverso = palindrome.split('').reverse().join('');
  
      if(palindrome === reverso && palindrome.length >1){
          
          resultado.textContent = `La palabra :${input.value} es palindrome`;
      }
      else {resultado.textContent = `La palabra :${input.value} no es palindrome`;
    }
          
  
  
  } catch (error:any) {
      resultado.textContent = "Hubo un error inesperado: "+ error.message;
  }
    
  })

}

export{checkPalindrome};
