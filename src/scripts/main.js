'use strict';

const tbody = document.querySelector('tbody');
let rowsCount = tbody.querySelectorAll('tr').length;
let columnCount = tbody.querySelector('tr').children.length;

document.querySelector('.append-row').onclick = () => {
  if (rowsCount < 10) {
    tbody.append(tbody.children[0].cloneNode(true));
    rowsCount++;
    sayHihi();
  } else {
    sayError();
  }
};

document.querySelector('.remove-row').onclick = () => {
  if (rowsCount > 2) {
    tbody.children[0].remove();
    rowsCount--;
    sayAh();
  } else {
    sayError();
  }
};

document.querySelector('.append-column').onclick = () => {
  if (columnCount < 10) {
    tbody.querySelectorAll('tr').forEach(tr => {
      tr.prepend(tr.children[0].cloneNode(true));
    });
    columnCount++;
    sayHihi();
  } else {
    sayError();
  }
};

document.querySelector('.remove-column').onclick = () => {
  if (columnCount > 2) {
    tbody.querySelectorAll('tr').forEach(tr => {
      tr.children[0].remove();
    });
    columnCount--;
    sayAh();
  } else {
    sayError();
  }
};

document.querySelectorAll('audio').forEach(audio => {
  audio.style.display = 'none';
});

function sayAh() {
  const audio = document.querySelector('#audioOfRemove');

  audio.pause();
  audio.currentTime = 0;
  audio.play();
}

function sayHihi() {
  const audio = document.querySelector('#audioOfAppend');

  audio.pause();
  audio.currentTime = 0;
  audio.play();
}

function sayError() {
  const audio = document.querySelector('#audioOfError');

  audio.pause();
  audio.currentTime = 0;
  audio.play();
}
