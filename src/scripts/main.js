'use strict';

const table = document.querySelector('table');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumm = document.querySelector('.append-column');
const removeColumm = document.querySelector('.remove-column');

const appendR = () => {
  removeRow.disabled = false;
  table.rows[0].before(table.rows[0].cloneNode(true));
  appendRow.disabled = table.rows.length === 10;
};

const removeR = () => {
  appendRow.disabled = false;
  table.deleteRow(table.rows);
  removeRow.disabled = table.rows.length === 2;
};

const appendC = () => {
  removeColumm.disabled = false;

  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[0].after(table.rows[i].cells[1].cloneNode(true));
  }

  appendColumm.disabled = table.rows[0].cells.length === 10;
};

const removeC = () => {
  appendColumm.disabled = false;

  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[0].remove(table.rows[i].cells[1].cloneNode(true));
  }

  removeColumm.disabled = table.rows[0].cells.length === 2;
};

appendRow.addEventListener('click', appendR);
removeRow.addEventListener('click', removeR);
appendColumm.addEventListener('click', appendC);
removeColumm.addEventListener('click', removeC);
