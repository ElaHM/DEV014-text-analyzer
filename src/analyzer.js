const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  /*text.trim();
  const palabras = text.trim().split(" ").lenght;
  return palabras*/

    //console.log (text.trim().split(" ").length);
    const palabras = text.trim().split(" ").length;
    //console.log (palabras)
    return palabras
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const caracteres = text.length;
    return caracteres
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      const caracter = text[i];
      if(caracter !== ' ' && caracter !== '.' && caracter !== ',' && caracter !== ';') {
        count++;}
    }
    return count;
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    console.log(text)
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      const caracter = text[i];
      if(caracter >="0" && caracter <="9"){
        count++;}
    }
    return count;
  },
  
  /* 
    for(let i = 0; i < arregloPalabras.length; i++) {

      if (isNaN(arregloPalabras [i])) {
        contadorNumeros = contadorNumeros + 0
      } else {
        contadorNumeros = contadorNumeros + 1
      }

      //por si hay uno que termina en punto
      const ultimoCaracter = arregloPalabras[i].length -1
      if(arreglopalabras[i].slice(-1) === '.'){
      const newElement = arregloPalabras[i].slice(0,ultimocaracter)
      if(!isNaN(newElement))
      {
        contadorNumeros ++
      }
    }
  }
  console.log('resultado final', contadorNumeros)
  return contadorNumeros;
*/


  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    console.log(text)
    const palabras = text.trim().split(" ");
    console.log(palabras);

    let sumaTotal = 0;
    for (let i = 0; i < palabras.length; i++) {
      const palabra = palabras[i]; 
      if(!isNaN(palabra)) {

        sumaTotal += Number(palabra);
        console.log(Number(palabra));
      }
    }
    return sumaTotal;
  },

  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    if(!text) return 0;
    const totalPalabras = text.trim().split(" ").length;
    const palabras = text.trim().split(" ");
    console.log(palabras)
    let acum = 0;
    for (let i=0; i < palabras.length; i++) {
      //const eliminar = palabras[i].trim(); 
      //console.log(eliminar)
      acum = acum + palabras[i].length;
      console.log(acum)
    }
    const promedio = acum / totalPalabras
    console.log(promedio)
    //return promedio;
    const promedioRedondeado = Math.round(promedio*100) / 100;
    console.log(promedioRedondeado);
    return promedioRedondeado;
  },

};

export default analyzer;
