document.addEventListener("DOMContentLoaded", function () {
  // Variables
  let aceptoBtnSi = document.getElementById("aceptoBtnSi");
  let aceptoBtnNo = document.getElementById("aceptoBtnNo");
  let submitPasswordBtn = document.getElementById("submitPassword");
  let passwordInput = document.getElementById("password");
  let modal = document.getElementById("modal");
  let cerrarModal = document.getElementById("cerrarModal");
  let header = document.getElementById("header");
  let inicio = document.getElementById("inicio");
  let btnRecuerdos = document.getElementById("btnRecuerdos");
  let btnNosotros = document.getElementById("btnNosotros");
  let btnInicio = document.getElementById("btnInicio");
  let btnRuleta = document.getElementById("btnRuleta");
  let btnSalir = document.getElementById("btnSalir");
  let recuerdos = document.getElementById("recuerdos");
  let ruleta = document.getElementById("ruleta");
  let nosotros = document.getElementById("nosotros");
  let contador = document.getElementById("contador");
  let mensaje = document.getElementById("mensajeBienvenida");
  let messagesContainer = document.getElementById("messagesContainer");
  let nextMessageBtn = document.getElementById("nextMessageBtn");
  let messageElement = document.getElementById("message");
  let tiempoNovios = document.getElementById("tiempoNovios");

  let noButtonClicks = 0;
  const correctPassword = "sofiaherrera"; // Contraseña correcta

  // ⏳ Contador hasta San Valentín
  function actualizarContadorSanValentin() {
    let fechaSanValentin = new Date("2025-02-14T00:00:00");
    let hoy = new Date();
    let diferencia = fechaSanValentin - hoy;

    if (diferencia <= 0) {
      contador.textContent = "¡Feliz San Valentín!";
      return;
    }

    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    let horas = Math.floor(
      (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    contador.textContent = `Faltan ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos para San Valentín.`;
  }
  setInterval(actualizarContadorSanValentin, 1000);
  actualizarContadorSanValentin();

  // ❤️ Contador de tiempo juntos
  function actualizarTiempoJuntos() {
    let fechaInicio = new Date("2024-08-16T00:00:00");
    let hoy = new Date();

    let diferencia = hoy - fechaInicio;

    let meses = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 30.44)); // 30.44 días promedio por mes
    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24)) % 30;
    let horas = Math.floor(
      (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    tiempoNovios.textContent = `${meses} meses, ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos`;
  }

  setInterval(actualizarTiempoJuntos, 1000);
  actualizarTiempoJuntos();

  // 🎭 Botón "Sí"
  if (aceptoBtnSi) {
    aceptoBtnSi.onclick = function () {
      document.getElementById("passwordPrompt").style.display = "block";
      aceptoBtnSi.style.display = "none";
      aceptoBtnNo.style.display = "none";
    };
  }

  // 😢 Botón "No"
  if (aceptoBtnNo) {
    aceptoBtnNo.onclick = function () {
      messagesContainer.style.display = "block";
    };
  }

  // ⏭ Mensajes para el botón "No"
  if (nextMessageBtn) {
    nextMessageBtn.addEventListener("click", function () {
      noButtonClicks++;
      let mensajes = [
        "¿Realmente estás segura? ¡Piénsalo bien!",
        "¿Estás dispuesta a dejar ir algo tan especial?",
        "Este momento es único, ¡piénsalo bien!",
        "No lo dejes escapar, por favor reflexiona.",
        "¡Ahora o nunca! ¡Haz la elección correcta!",
      ];

      if (noButtonClicks < mensajes.length) {
        messageElement.textContent = mensajes[noButtonClicks];
      } else {
        nextMessageBtn.style.display = "none";
      }
    });
  }

  // 🔑 Verificar contraseña y mostrar contenido
  if (submitPasswordBtn) {
    submitPasswordBtn.addEventListener("click", function () {
      if (passwordInput.value === correctPassword) {
        inicio.style.display = "none";
        header.style.display = "block";

        if (mensaje) {
          mensaje.style.display = "block";
        } else {
          console.error("No se encontró el mensaje de bienvenida");
        }
      } else {
        alert("Contraseña incorrecta. Inténtalo de nuevo.");
      }
    });
  }
  // Ocultar mensaje de bienvenida al cambiar de sección
  function ocultarMensajeBienvenida() {
    if (mensaje) {
      mensaje.style.display = "none";
    }
  }

  // 🔀 Navegación entre secciones
  if (btnInicio) {
    btnInicio.addEventListener("click", function () {
      mensajeBienvenida.style.display = "block";
      header.style.display = "block";
      recuerdos.style.display = "none";
      nosotros.style.display = "none";
      ruleta.style.display = "none";
      // ocultarMensajeBienvenida();
    });
  }
  if (btnRuleta) {
    btnRuleta.addEventListener("click", function () {
      ruleta.style.display = "block";
      header.style.display = "block";
      recuerdos.style.display = "none";
      nosotros.style.display = "none";
      ocultarMensajeBienvenida();
    });
  }
  if (btnRecuerdos) {
    btnRecuerdos.addEventListener("click", function () {
      recuerdos.style.display = "flex";
      nosotros.style.display = "none";
      ruleta.style.display = "none";

      ocultarMensajeBienvenida();
    });
  }

  if (btnNosotros) {
    btnNosotros.addEventListener("click", function () {
      recuerdos.style.display = "none";
      nosotros.style.display = "block";
      ruleta.style.display = "none";

      ocultarMensajeBienvenida();
    });
  }

  if (btnSalir) {
    btnSalir.addEventListener("click", function () {
      header.style.display = "none";
      recuerdos.style.display = "none";
      ruleta.style.display = "none";

      nosotros.style.display = "none";
      inicio.style.display = "block";
      ocultarMensajeBienvenida();
      passwordInput.value = "";
      document.getElementById("passwordPrompt").style.display = "none";
    });
  }

  // 📷 Abrir Modal
  function openModal(titulo, descripcion, imagen) {
    if (modal) {
      document.getElementById("modalTitulo").textContent = titulo;
      document.getElementById("modalDescripcion").textContent = descripcion;
      document.getElementById("modalImagen").src = imagen;
      modal.style.display = "block";
    } else {
      console.error("No se encontró el modal.");
    }
  }

  // ❌ Cerrar Modal
  if (cerrarModal) {
    cerrarModal.onclick = function () {
      modal.style.display = "none";
    };
  }

  // También cerrar modal al hacer clic fuera de él
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  // 🖼️ Manejo de botones para abrir modales
  document.querySelectorAll(".btnAbrirModal").forEach((button) => {
    button.addEventListener("click", function () {
      let parent = this.parentElement;
      let titulo = parent.getAttribute("data-titulo");
      let descripcion = parent.getAttribute("data-descripcion");
      let imagen = parent.getAttribute("data-imagen");

      openModal(titulo, descripcion, imagen);
    });
  });
});
