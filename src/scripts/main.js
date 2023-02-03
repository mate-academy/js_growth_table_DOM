'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');

const rows = document.getElementsByTagName('tr');
const field = document.querySelector('tbody');
const newRow = field.getElementsByTagName('tr')[0];

appendRow.onclick = () => {
  if (rows.length < 10) {
    field.append(newRow.cloneNode(true));
  }
};

removeRow.onclick = () => {
  if (rows.length > 2) {
    field.children[rows.length - 1].remove();
  }
};

let collAmount = 4;

appendCol.onclick = () => {
  if (collAmount < 10) {
    for (const row of rows) {
      row.children[0].before(row.children[0].cloneNode(true));
    }
  }
  collAmount++;

  if (collAmount > 10) {
    collAmount = 10;
  }
};

removeCol.onclick = () => {
  if (collAmount > 2) {
    for (const row of rows) {
      row.children[collAmount - 1].remove();
    }
  }
  collAmount--;

  if (collAmount < 2) {
    collAmount = 2;
  }
};
