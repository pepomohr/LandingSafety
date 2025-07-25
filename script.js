const faders = document.querySelectorAll('.fade-in, .anim-card');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Animación al seleccionar servicio
function selectService(card) {
  card.classList.toggle("selected");
}

function mostrarTexto(texto) {
      document.getElementById("service-parrafo").textContent = texto;
    }

  let lastClickedCard = null;

  function mostrarTexto(id, titulo, texto) {
    // Update the title and text
    document.getElementById('service-titulo').innerText = titulo;
    document.getElementById('service-texto').innerText = texto;

    // Remove 'active' class from previously clicked card
    if (lastClickedCard) {
      lastClickedCard.classList.remove('active');
    }

    // Add 'active' class to the clicked card
    const clickedCard = document.querySelector(`.service-card[onclick*="mostrarTexto('${id}'"]`);
    if (clickedCard) {
      clickedCard.classList.add('active');
      lastClickedCard = clickedCard;
    }

    

  }