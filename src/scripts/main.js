'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');

const rows = document.getElementsByTagName('tr');
const field = document.querySelector('tbody');
const newRow = field.getElementsByTagName('tr')[0];

const max = 10;
const min = 2;

appendRow.onclick = () => {
  removeRow.disabled = false;

  if (rows.length < max) {
    field.append(newRow.cloneNode(true));
  }

  if (rows.length === max) {
    appendRow.disabled = true;
  }
};

removeRow.onclick = () => {
  appendRow.disabled = false;

  if (rows.length > min) {
    field.children[rows.length - 1].remove();
  }

  if (rows.length === min) {
    removeRow.disabled = true;
  }
};

let collAmount = 4;

appendCol.onclick = () => {
  removeCol.disabled = false;

  if (collAmount < max) {
    for (const row of rows) {
      row.children[0].before(row.children[0].cloneNode(true));
    }
  }
  collAmount++;

  if (collAmount === max) {
    appendCol.disabled = true;
  }
};

removeCol.onclick = () => {
  appendCol.disabled = false;

  if (collAmount > min) {
    for (const row of rows) {
      row.children[collAmount - 1].remove();
    }
  }

  collAmount--;

  if (collAmount === min) {
    removeCol.disabled = true;
  }
};
