/* eslint-disable no-shadow */
/* eslint-disable function-paren-newline */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
'use strict';

const tbody = document.querySelector('tbody');

document.querySelector('.append-row').addEventListener('click', (event) => {
  tbody.childElementCount < 10 &&
    tbody.append(tbody.lastElementChild.cloneNode(true));

  event.currentTarget.disabled = tbody.childElementCount >= 10;

  if (tbody.childElementCount > 2) {
    document.querySelector('.remove-row').removeAttribute('disabled');
  }
});

document.querySelector('.remove-row').addEventListener('click', (event) => {
  tbody.childElementCount > 2 && tbody.lastElementChild.remove();
  event.currentTarget.disabled = tbody.childElementCount <= 2;

  if (tbody.childElementCount < 10) {
    document.querySelector('.append-row').removeAttribute('disabled');
  }
});

document.querySelector('.append-column').addEventListener('click', (event) => {
  tbody.firstElementChild.childElementCount < 10 &&
    [...tbody.children].forEach((row) =>
      row.append(document.createElement('td')),
    );

  event.currentTarget.disabled =
    tbody.firstElementChild.childElementCount >= 10;

  if (tbody.firstElementChild.childElementCount > 2) {
    document.querySelector('.remove-column').removeAttribute('disabled');
  }
});

document.querySelector('.remove-column').addEventListener('click', (event) => {
  tbody.firstElementChild.childElementCount > 2 &&
    [...tbody.children].forEach((row) => row.lastElementChild.remove());

  event.currentTarget.disabled = tbody.firstElementChild.childElementCount <= 2;

  if (tbody.firstElementChild.childElementCount < 10) {
    document.querySelector('.append-column').removeAttribute('disabled');
  }
});
