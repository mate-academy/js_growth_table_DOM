'use strict';

const table = document.querySelector('tbody');
const btnPlusRow = document.querySelector('.append-row');
const btnMinRow = document.querySelector('.remove-row');
const btnPlusCol = document.querySelector('.append-column');
const btnMinCol = document.querySelector('.remove-column');
const tr = table.children;

const addRow = function(e) {
  const a = tr[0].cloneNode(true);

  btnMinRow.removeAttribute('disabled');
  table.appendChild(a);

  if (tr.length === 10) {
    btnPlusRow.setAttribute('disabled', 'disabled');
  }
};

const addColumn = function(e) {
  btnMinCol.removeAttribute('disabled');

  for (let i = 0; i < tr.length; i++) {
    const b = tr[0].lastElementChild.cloneNode(true);

    if (tr[0].children.length === 10) {
      btnPlusCol.setAttribute('disabled', 'disabled');
    }
    tr[i].append(b);
  }
};

const minRow = function(e) {
  btnMinRow.removeAttribute('disabled');
  btnPlusRow.removeAttribute('disabled');

  tr[0].remove();

  if (tr.length === 2) {
    btnMinRow.setAttribute('disabled', 'disabled');
  }
};

const minCol = function(e) {
  btnPlusCol.removeAttribute('disabled');
  btnMinCol.removeAttribute('disabled');

  for (let x = 0; x < table.children.length; x++) {
    table.children[x].lastElementChild.remove();
  }

  if (tr[0].children.length === 2) {
    btnMinCol.setAttribute('disabled', 'disabled');
  }
};

btnPlusRow.addEventListener('click', addRow);
btnPlusCol.addEventListener('click', addColumn);
btnMinRow.addEventListener('click', minRow);
btnMinCol.addEventListener('click', minCol);
