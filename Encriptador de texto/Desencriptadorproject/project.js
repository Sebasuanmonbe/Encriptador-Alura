function verificarTexto() {
  const input = document.getElementById('text').value;
   caracteresEspeciales = /[!@#$%^&*(),.?":{}|<>]/g;
  if (caracteresEspeciales.test(input)) {
      swal("Error", "El texto contiene caracteres especiales. Por favor, elimínalos.", "error");
      return; 
  }

  // Si no hay caracteres especiales, puedes continuar con el código aquí
  swal("Éxito", "El texto es válido.", "success");
}

function encriptar()
 {
    let text = document.getElementById("text").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let sherlock = document.getElementById("sherlock");
    let textoprotegido = text
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
      if (text.length != 0) {
        document.getElementById("text").value = textoprotegido;
        tituloMensaje.textContent = "Tu texto fue Encriptado";
        parrafo.textContent = "";
        sherlock.src = "./images/Done.png";
      } else {
        sherlock.src = "./images/sherlock.png";
        tituloMensaje.textContent = "Por favor agrega un texto a desencriptar por favor";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar por favor";
        swal("Error!", "Debes ingresar al menos una frase", "Fatal error");
    }
  }
  
  function desencriptar() {
    let text = document.getElementById("text").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let sherlock = document.getElementById("sherlock");
  
    let textoprotegido = text
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (text.length != 0) {
        document.getElementById("text").value = textoprotegido;
        tituloMensaje.textContent = "Tu texto fue desencriptado";
        parrafo.textContent = "";
        sherlock.src = "./images/Done.png";
      } else {
        sherlock.src = "./images/sherlock.png";
        tituloMensaje.textContent = "Por favor agrega un texto a desencriptar por favor";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar por favor";
        swal("Error!", "Debes ingresar  al menos una frase", "Fatal error");
      }
  }
