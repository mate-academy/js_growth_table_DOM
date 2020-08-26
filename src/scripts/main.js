'use strict';

const tbody = document.querySelector('tbody');
let rowsCount = tbody.querySelectorAll('tr').length;
let columnCount = tbody.querySelector('tr').children.length;

document.querySelector('.append-row').onclick = () => {
  if (rowsCount < 10) {
    tbody.append(tbody.children[0].cloneNode(true));
    rowsCount++;
    document.querySelector('.remove-row').disabled = false;
    sayHihi();
  } else {
    sayError();
    document.querySelector('.append-row').disabled = true;
  }
};

document.querySelector('.remove-row').onclick = () => {
  if (rowsCount > 2) {
    tbody.children[0].remove();
    rowsCount--;
    document.querySelector('.append-row').disabled = false;
    sayAh();
  } else {
    sayError();
    document.querySelector('.remove-row').disabled = true;
  }
};

document.querySelector('.append-column').onclick = () => {
  if (columnCount < 10) {
    tbody.querySelectorAll('tr').forEach(tr => {
      tr.prepend(tr.children[0].cloneNode(true));
    });
    columnCount++;
    document.querySelector('.remove-column').disabled = false;
    sayHihi();
  } else {
    sayError();
    document.querySelector('.append-column').disabled = true;
  }
};

document.querySelector('.remove-column').onclick = () => {
  if (columnCount > 2) {
    tbody.querySelectorAll('tr').forEach(tr => {
      tr.children[0].remove();
    });
    columnCount--;
    document.querySelector('.append-column').disabled = false;
    sayAh();
  } else {
    sayError();
    document.querySelector('.remove-column').disabled = true;
  }
};

document.querySelectorAll('audio').forEach(audio => {
  audio.style.display = 'none';
});

function sayAh() {
  const audio = document.querySelector('#audioOfRemove');

  playAudio(audio);
}

function sayHihi() {
  const audio = document.querySelector('#audioOfAppend');

  playAudio(audio);
}

function sayError() {
  const audio = document.querySelector('#audioOfError');

  playAudio(audio);
}

function playAudio(audio) {
  audio.pause();
  audio.currentTime = 0;
  audio.play();
}
