import './index.scss';
import ClientGame from './client/ClientGame';

window.addEventListener('load', () => {
  const greeting = document.querySelector('.start-game');
  const form = document.getElementById('nameForm');
  const name = form.querySelector('.input');

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    greeting.parentNode.removeChild(greeting);
    ClientGame.init({ tagId: 'game', playerName: name.value  });
  });
});

