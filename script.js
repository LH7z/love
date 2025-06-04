  const container = document.querySelector('.escritos');
  const button = document.getElementById('button');
  const audio = document.getElementById('audio');

  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's'; // velocidade variável
    heart.style.opacity = Math.random();

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000); // limpa o coração após a animação
  }

  setInterval(createHeart, 300); // frequência da chuva


  button.addEventListener('click', () => {
    audio.play()
  })
