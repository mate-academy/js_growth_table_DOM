'use strict';

// write code here
const table = document.querySelector('.field');
const container = document.querySelector('.container');
const tbody = document.querySelector('tbody');

const buttonAppRow = document.querySelector('.append-row');
const buttonRemRow = document.querySelector('.remove-row');
const buttonAppColumn = document.querySelector('.append-column');
const buttonRemColumn = document.querySelector('.remove-column');

container.addEventListener('click', (e) => {
  const value = e.target.classList[0];

  if (value === 'append-row') {
    tbody.append(tbody.firstElementChild.cloneNode(true));
  }

  if (value === 'remove-row') {
    table.deleteRow(-1);
  }

  if (value === 'append-column') {
    const tr = [...tbody.children];

    tr.forEach(elem => elem.insertCell());
  }

  if (value === 'remove-column') {
    const tr = [...tbody.children];

    tr.forEach(elem => elem.lastChild.remove());
  }

  buttonAppRow.disabled = table.rows.length >= 10;
  buttonRemRow.disabled = table.rows.length <= 2;
  buttonAppColumn.disabled = table.rows[0].cells.length >= 10;
  buttonRemColumn.disabled = table.rows[0].cells.length <= 2;
});
