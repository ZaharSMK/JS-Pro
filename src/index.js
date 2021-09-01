import { io } from 'socket.io-client';

import './index.scss';
import ClientGame from './client/ClientGame';
import {getTime} from "./common/util";

window.addEventListener('load', () => {
  const socket = io('https://jspromarathonchat.herokuapp.com/');
  const $start = document.querySelector('.start-game');
  const $nameForm = document.getElementById('nameForm');
  const $name = document.getElementById('name');

  const $chatWrap = document.querySelector('.chat-wrap');
  const $form = document.getElementById('form');
  const $input = document.getElementById('input');
  const $message = document.querySelector('.message');
  const submitName = (e) => {
    e.preventDefault();

    if ($name.value) {
      ClientGame.init({ tagId: 'game', playerName: $name.value });
      socket.emit('start', $name.value);

      $chatWrap.style.display = 'block';
      $nameForm.removeEventListener('submit', submitName);
      $start.remove();
      }
    };
  $nameForm.addEventListener('submit', submitName);

  $form.addEventListener('submit', (e) => {
    e.preventDefault();

    if ($input.value) {
      console.log( '####: $input', $input.value);
      socket.emit('chat message', $input.value);
      $input.value = '';
    }
  })
    socket.on('chat connection', (data) => {
      console.log(data);
      $message.insertAdjacentHTML('beforeend', `<p><strong>${getTime(data.time)}</strong> - ${data.msg}</p>` );
    });
  socket.on('chat disconnect', (data) => {
    console.log(data);
    $message.insertAdjacentHTML('beforeend', `<p><strong>${getTime(data.time)}</strong> - ${data.msg}</p>` );
  });
  const myID = socket.id;
  socket.on('chat message', (data) => {
    console.log(data.id);
    console.log(socket.id);
    if (data.id === socket.id) {
      $message.insertAdjacentHTML('beforeend', `<p style="color:mediumblue;"><strong>${getTime(data.time)}</strong> - ${data.msg}</p>`);
    } else {
      $message.insertAdjacentHTML('beforeend', `<p style="color:red;"><strong>${getTime(data.time)}</strong> - ${data.msg}</p>`);
    }
  });
  socket.on('chat online', (data) => {
    console.log(data);
    $message.insertAdjacentHTML('beforeend', `<p><strong>${getTime(data.time)}</strong> - Сейчас онлайн ${data.online}</p>` );
  });
});
