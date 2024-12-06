

document.getElementById("imc-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Obtener los valores de peso y altura
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("altura").value);

  // Verificar si los valores son válidos
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert("Por favor, ingrese valores válidos.");
    return;
  }

  // Calcular el IMC
  let imc = peso / (altura * altura);

  function mostrarAlerta(mensaje, imagen) {
    document.getElementById('mensaje-alerta').innerText = mensaje;
    document.getElementById('imagen-alerta').src = imagen;
    document.getElementById('alerta').style.display = 'flex';

    
}
  
 
if (imc < 18.5) {
    mostrarAlerta('Tu IMC indica bajo peso.', 'img/istockphoto-482708583-612x612.jpg');
} else if (imc >= 18.5 && imc <= 24.9) {
    mostrarAlerta('Tu IMC es saludable.', 'img/pngtree-illustration-vector-friendly-male-student-png-image_2380748.jpg');
} else if (imc >= 25 && imc <= 29.9) {
    mostrarAlerta('Tu IMC indica sobrepeso.', 'img/png-transparent-fat-cartoon-man-cute-fat-man-hand-people-weight-loss.png');
} else {
    mostrarAlerta('Tu IMC indica obesidad.', 'imagenes/obesidad.png');
}

});