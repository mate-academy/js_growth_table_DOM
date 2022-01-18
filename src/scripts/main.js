'use strict';

const table = document.querySelector('tbody');
const body = document.querySelector('body');

const tr = table.children;
const btnPlusRow = document.querySelector('.append-row');
const btnMinRow = document.querySelector('.remove-row');
const btnPlusCol = document.querySelector('.append-column');
const btnMinCol = document.querySelector('.remove-column');

const addRow = function(e) {
  const a = tr[0].cloneNode(true);

  btnMinRow.removeAttribute('disabled');
  table.appendChild(a);

  btnPlusRow.disabled = tr.length === 10;
};

const addColumn = function(e) {
  btnMinCol.removeAttribute('disabled');

  for (let i = 0; i < tr.length; i++) {
    const b = tr[0].lastElementChild.cloneNode(true);

    btnPlusCol.disabled = tr[0].children.length === 10;
    tr[i].append(b);
  }
};

const minRow = function(e) {
  btnMinRow.removeAttribute('disabled');
  btnPlusRow.removeAttribute('disabled');

  tr[0].remove();

  btnMinRow.disabled = tr.length === 2;
};

const minCol = function(e) {
  btnPlusCol.removeAttribute('disabled');
  btnMinCol.removeAttribute('disabled');

  for (let x = 0; x < table.children.length; x++) {
    table.children[x].lastElementChild.remove();
  }

  btnMinCol.disabled = tr[0].children.length === 2;
};

body.addEventListener('click', function(e) {
  switch (e.target) {
    case btnPlusRow:
      addRow();
      break;
    case btnPlusCol:
      addColumn();
      break;
    case btnMinRow:
      minRow();
      break;
    case btnMinCol:
      minCol();
      break;
  }
});
