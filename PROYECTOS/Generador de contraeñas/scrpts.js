document.querySelector("#btn").addEventListener("click",function(){
  let longitud = 20; //numero de caracteres
  let clave = generarClave(longitud); 
  document.querySelector("#result").innerHTML = clave;
});

/*Función principal | Generador de claves | Password Generator*/
function generarClave(long)
{
  /*caracteres permitidos*/
  let caracteres = "Aa0BbCc1DdEe2FfGgHh3IiJj4KkLl5MmNn6OoPp7QqRr8SsTt9UuVv*WwXxYyZz$";
  let clave = '';
  let numero;

  /*creacion de clave*/
  for(let i=;i<long;i++)
  {
    numero = getNumero( , caracteres.length );
    clave += caracteres.substring( numero, numero + 1 );
  }
  return clave;
}

/*Función para generar un numero aleatorio*/
function getNumero(min,max)
{
  return Math.floor( Math.random() * ( max - min ) ) + min;
}
