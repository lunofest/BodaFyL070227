// -------------------- musica ------------------------

const audio = document.getElementById("audio");
const playButton = document.querySelector(".player__button--play");
const rewindButton = document.querySelector(".player__button--rewind");
const forwardButton = document.querySelector(".player__button--forward");

// Alternar Play/Pause
playButton.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        playButton.innerHTML = '<i class="fas fa-play"></i>';
    }
});

// Si la música termina, volver a poner el icono de "play"
audio.addEventListener("ended", () => {
    playButton.innerHTML = '<i class="fas fa-play"></i>';
});

// Retroceder 5 segundos
rewindButton.addEventListener("click", () => {
    audio.currentTime = Math.max(0, audio.currentTime - 5);
});

// Avanzar 5 segundos
forwardButton.addEventListener("click", () => {
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
});




// ------------------- temporizador -----------------------

// Fecha objetivo en formato "July 1, 2025 22:30:00"
const fechaObjetivo = new Date("February 7, 2027 18:00:00").getTime();

function actualizarContador() {
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    if (diferencia > 0) {
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        document.getElementById("dias").textContent = dias.toString().padStart(2, "0");
        document.getElementById("horas").textContent = horas.toString().padStart(2, "0");
        document.getElementById("minutos").textContent = minutos.toString().padStart(2, "0");
        document.getElementById("segundos").textContent = segundos.toString().padStart(2, "0");
    } else {
        document.querySelector(".contador__titulo").textContent = "¡Es el día!";
        document.querySelector(".contador__tiempo").style.display = "none";
    }
}

// Actualiza el contador cada segundo
setInterval(actualizarContador, 1000);
actualizarContador();

// ------------------- fotos ----------------------

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 4,
        depth: 3,
        modifier: 50,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2000, // Time between slides in milliseconds (e.g., 3 seconds)
        disableOnInteraction: false, // Set to true to stop autoplay on user interaction (e.g., dragging)
    },
    loop: true, // Enable infinite loop
});




// --------------------------------gift---------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const boton = document.getElementById('mostrarBoton');
    const textoDesplegable = document.getElementById('textoDesplegable');
  
    boton.addEventListener('click', function () {
      textoDesplegable.classList.toggle('mostrar');
    });
  });
  
  
  function copyText() {
    var aliasText = document.getElementById('alias').innerText; // Obtener el texto del alias
    var tempInput = document.createElement('input');
    tempInput.value = aliasText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  
    // Mostrar el mensaje de "¡Copiado!"
    var copyMessage = document.getElementById('copyMessage');
    copyMessage.style.display = 'block';
    setTimeout(function() {
        copyMessage.style.display = 'none';
    }, 1500); // Ocultar el mensaje después de 1.5 segundos
  }
  
  
  
  function copyCbuText() {
    const aliasText = document.getElementById('cbuAlias').textContent;
    const copyMessage = document.getElementById('copyCbuMessage');
  
    const textarea = document.createElement('textarea');
    textarea.value = aliasText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  
    copyMessage.style.display = 'block';
    setTimeout(() => {
        copyMessage.style.display = 'none';
    }, 2000);
  }


// --------------------------- playlist --------------------------------

  document.addEventListener('DOMContentLoaded', function() {
    // Definir los números de teléfono
    const phoneNumber1 = '543815079230'; // Número para el primer botón
    const phoneNumber2 = '543815341528'; // Número para el segundo botón
  
    // Función para enviar mensaje por WhatsApp
    function sendMessage(phoneNumber) {
        const name = document.getElementById('userName').value;
        const message = document.getElementById('whatsappMessage').value;
  
        if (name.trim() === '' || message.trim() === '') {
            alert('Por favor, completa ambos campos antes de enviar.');
            return;
        }
  
        const fullMessage = `*Nombre y Apellido:* ${name}\n\n*Tema recomendado:* ${message}`;
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
  
        // Abre la URL de WhatsApp en una nueva pestaña
        window.open(whatsappURL, '_blank');
  
        // Mostrar mensaje de confirmación
        alert('Mensaje enviado');
  
        // Limpiar los campos de entrada
        document.getElementById('userName').value = '';
        document.getElementById('whatsappMessage').value = '';
  
        // Volver al bloque de formulario
        document.querySelector('.playlist').scrollIntoView({ behavior: 'smooth' });
    }
  
    // Asignar eventos a los botones
    document.getElementById('botonplay1').addEventListener('click', function() {
        sendMessage(phoneNumber1);
    });
  
    document.getElementById('botonplay2').addEventListener('click', function() {
        sendMessage(phoneNumber2);
    });
  });





  // ---------------------menu----------------------


document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('precio__toggle-btn');
  const mostrarSection = document.getElementById('precio__mostrar');
  const copyCbuBtn = document.getElementById('precio__copy-cbu');
  const copyAliasBtn = document.getElementById('precio__copy-alias');

  // Toggle bank details
  toggleBtn.addEventListener('click', () => {
    mostrarSection.classList.toggle('active');
    toggleBtn.textContent = mostrarSection.classList.contains('active')
      ? 'Ocultar datos bancarios'
      : 'Ver datos bancarios para pagos';
  });

  // Función común para copiar texto (para CBU y Alias)
  const copiarTexto = (button, elementSelector) => {
    const element = document.querySelector(elementSelector);
    if (element) {
      const text = element.textContent.trim();
      navigator.clipboard.writeText(text).then(() => {
        button.textContent = `¡${elementSelector === '.precio__CBU' ? 'CBU' : 'Alias'} Copiado!`;
        setTimeout(() => {
          button.textContent = `Copiar ${elementSelector === '.precio__CBU' ? 'CBU' : 'Alias'}`;
        }, 2000);
      });
    } else {
      // Si el elemento no existe, cambia el texto del botón para informar al usuario
      button.textContent = `${elementSelector === '.precio__CBU' ? 'CBU' : 'Alias'} no disponible`;
      setTimeout(() => {
        button.textContent = `Copiar ${elementSelector === '.precio__CBU' ? 'CBU' : 'Alias'}`;
      }, 2000);
    }
  };

  // Copy CBU
  if (copyCbuBtn) {
    copyCbuBtn.addEventListener('click', () => {
      copiarTexto(copyCbuBtn, '.precio__CBU');
    });
  }

  // Copy Alias
  if (copyAliasBtn) {
    copyAliasBtn.addEventListener('click', () => {
      copiarTexto(copyAliasBtn, '.precio__alias');
    });
  }

  // Lightbox del menú
  const btnAbrir = document.querySelector('.foto__menu');
  const lightbox = document.getElementById('menuFotoLightbox');
  const btnCerrar = document.getElementById('menuFotoCerrar');
  const overlay = document.querySelector('.menuFoto-overlay');

  // Abrir lightbox
  btnAbrir.addEventListener('click', () => {
    lightbox.style.display = 'block';
    setTimeout(() => lightbox.classList.add('activo'), 10);
  });

  // Cerrar lightbox
  const cerrarLightbox = () => {
    lightbox.classList.remove('activo');
    setTimeout(() => (lightbox.style.display = 'none'), 0);
  };

  btnCerrar.addEventListener('click', cerrarLightbox);
  overlay.addEventListener('click', cerrarLightbox);

  // Prevenir cierre al hacer click en la imagen
  document.querySelector('.menuFoto-imagen').addEventListener('click', (e) => {
    e.stopPropagation();
  });
});

  


 // --------------- confirmacion --------------------------------------



document.addEventListener('DOMContentLoaded', function () {
  // Definir los números de teléfono
  const recipientNumber1 = '542966639444';
  const recipientNumber2 = '542966622019';

  const cantidadSelect = document.getElementById('cantidadPersonas');
  const personasContainer = document.getElementById('personasContainer');

  // Generar campos para la primera persona por defecto
  generarCamposPersonas(1);

  // Cuando cambie la cantidad
  cantidadSelect.addEventListener('change', function () {
    generarCamposPersonas(parseInt(this.value, 10));
  });

  function generarCamposPersonas(cantidad) {
    personasContainer.innerHTML = '';
    for (let i = 1; i <= cantidad; i++) {
      const card = document.createElement('div');
      card.className = 'persona-card';
      card.innerHTML = `
        <h6>Persona ${i}</h6>
        <div class="persona-fields">
          <div class="field-group">
            <label for="nombre${i}">Nombre <span>*</span></label>
            <input type="text" id="nombre${i}" placeholder="Ingresa el nombre" required>
          </div>
          <div class="field-group">
            <label for="apellido${i}">Apellido <span>*</span></label>
            <input type="text" id="apellido${i}" placeholder="Ingresa el apellido" required>
          </div>
          <div class="field-group">
            <label for="alimentacion${i}">¿Algún requerimiento?</label>
            <select id="alimentacion${i}">
              <option value="ninguna">Ninguna</option>
              <option value="celíac@">Celíac@</option>
              <option value="vegetarian@">Vegetarian@</option>
              <option value="hipertensión">Hipertensión</option>
              <option value="diabétic@">Diabétic@</option>
            </select>
          </div>
        </div>
      `;
      personasContainer.appendChild(card);
    }
  }

  function obtenerDatosPersonas() {
    const cantidad = parseInt(cantidadSelect.value, 10);
    const lista = [];
    for (let i = 1; i <= cantidad; i++) {
      const nombre = document.getElementById(`nombre${i}`).value.trim();
      const apellido = document.getElementById(`apellido${i}`).value.trim();
      const alimentacion = document.getElementById(`alimentacion${i}`).value;
      if (!nombre || !apellido) {
        alert(`Por favor, completa nombre y apellido de la Persona ${i}`);
        return null;
      }
      lista.push({ nombre, apellido, alimentacion });
    }
    return lista;
  }

  function limpiarCamposPersonas() {
    cantidadSelect.value = '1';
    generarCamposPersonas(1);
  }

  function sendMessage(phoneNumber) {
    const datos = obtenerDatosPersonas();
    if (!datos) return;

    const p1 = datos[0];
    const restrP1 = p1.alimentacion || 'ninguna';

    let texto;
    if (datos.length > 1) {
      // Cuando hay más de una persona
      texto = 
        `Hola quiero confirmar mi asistencia, mi nombre es *${p1.nombre} ${p1.apellido}*, mi restricción alimenticia es *${restrP1}* y voy con:\n\n`;
      // Listar acompañantes desde la persona 2
      for (let i = 1; i < datos.length; i++) {
        const p = datos[i];
        const restr = p.alimentacion || 'ninguna';
        texto += `*${p.nombre} ${p.apellido}*, restricción alimenticia: *${restr}*\n`;
      }
    } else {
      // Solo una persona
      texto = 
        `Hola quiero confirmar mi asistencia, mi nombre es *${p1.nombre} ${p1.apellido}*, mi restricción alimenticia es *${restrP1}*`;
    }

    // Añadir mensaje opcional si existe
    const customMsg = document.getElementById('customMessage').value.trim();
    if (customMsg) {
      texto += `\n\n*Mensaje:*\n${customMsg}`;
    }

    // Abrir WhatsApp
    const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(texto)}`;
    window.open(link, '_blank');
    alert('Mensaje enviado');

    // Limpieza y redirección
    document.getElementById('customMessage').value = '';
    limpiarCamposPersonas();
    if (document.getElementById('correo')) {
      window.location.hash = 'correo';
    }
  }

  // Eventos de click
  document.getElementById('btnConfirmacion1')
    .addEventListener('click', () => sendMessage(recipientNumber1));
  document.getElementById('btnConfirmacion2')
    .addEventListener('click', () => sendMessage(recipientNumber2));
});
