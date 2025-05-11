window.addEventListener('load', () => {
    const music = document.getElementById('background-music');
    const playPromise = music.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log('Автовідтворення заблоковане. Треба клікнути користувачу.');
      });
    }
  });