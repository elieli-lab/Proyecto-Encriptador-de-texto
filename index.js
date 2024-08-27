function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
                         
    if (texto.lenght !=0) { 
      document.getElementById("texto").value =textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent="";
      muñeco.src = "./img/muñeco.png"; 
    } else {
      muñeco.src = "./img/muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "";
      alert("debes ingresar algun texto");

    }
}
function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("tituloMensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");

      if (texto.lenght !=0) { 
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent="";
        muñeco.src = "./img/muñeco.png"; 
      } else {
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "";
        alert("debes ingresar algun texto");  
      } 
}