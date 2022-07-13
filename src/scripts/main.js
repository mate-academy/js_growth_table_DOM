'use strict';

const addRowBut = document.querySelector('.append-row');
const removeRowBut = document.querySelector('.remove-row');
const addColBut = document.querySelector('.append-column');
const removeColBut = document.querySelector('.remove-column');
const rows = document.querySelector('.field').firstElementChild;

function isEnough() {
  addRowBut.disabled = rows.children.length >= 10;

  removeRowBut.disabled = rows.children.length <= 2;

  addColBut.disabled = rows.children[0].children.length >= 10;

  removeColBut.disabled = rows.children[0].children.length <= 2;
}

addRowBut.addEventListener('click', (e) => {
  rows.append(rows.children[0].cloneNode(true));

  isEnough();
});

removeRowBut.addEventListener('click', (e) => {
  rows.removeChild(rows.children[0]);

  isEnough();
});

addColBut.addEventListener('click', (e) => {
  [...rows.children].forEach(el => el.append(el.children[0].cloneNode(true)));

  isEnough();
});

removeColBut.addEventListener('click', (e) => {
  [...rows.children].forEach(el => el.removeChild(el.children[0]));

  isEnough();
});
