// Axel Cotón Gutiérrez Copyright 2023

const colores = ['red', 'yellow', 'blue']; // Nombres en inglés
const mezclas = {
    'redyellow': 'orange',
    'yellowred': 'orange',
    'redblue': 'purple',
    'bluered': 'purple',
    'blueyellow': 'green',
    'yellowblue': 'green'
};

let color1, color2, mezclaCorrecta;

function seleccionarColores() {
    color1 = colores[Math.floor(Math.random() * colores.length)];
    do {
        color2 = colores[Math.floor(Math.random() * colores.length)];
    } while (color2 === color1);  // Repite hasta que color2 sea diferente de color1

    mezclaCorrecta = mezclas[color1 + color2];
    
    document.getElementById('color-circle-1').style.backgroundColor = color1;
    document.getElementById('color-circle-2').style.backgroundColor = color2;
}


function checkColor(colorSeleccionado) {
    const result = document.getElementById('result');
    if (colorSeleccionado === mezclaCorrecta) {
        result.innerHTML = '¡Correcto! Buen trabajo.';
        result.style.color = "green";
    } else {
        result.innerHTML = 'Incorrecto. Vuelve a intentarlo.';
        result.style.color = "red";
    }
}

function nextQuestion() {
    seleccionarColores();
    document.getElementById('result').innerText = '';
}

// Inicializar el primer juego
seleccionarColores();

// Navegaciòn"  
 
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');
        
    menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
    });
  });