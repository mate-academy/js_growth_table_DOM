'use strict';

const minSize = 2;
const maxSize = 10;

const table = document.querySelector('.field');

const newRow = document.querySelector('.append-row');
const delRow = document.querySelector('.remove-row');

const newCol = document.querySelector('.append-column');
const delCol = document.querySelector('.remove-column');

const updateBtnState = () => {
  newRow.disabled = table.rows.length >= maxSize;
  delRow.disabled = table.rows.length <= minSize;

  newCol.disabled = table.rows[0].cells.length >= maxSize;
  delCol.disabled = table.rows[0].cells.length <= minSize;
}

newCol.addEventListener('click', () => {
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].insertCell(-1).innerHTML = '';
  }
  updateBtnState();
});

delCol.addEventListener('click', () => {
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].deleteCell(-1);
  }

  updateBtnState();
});

newRow.addEventListener('click', () => {
  const addRow = table.insertRow();

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    addRow.insertCell(-1).innerHTML = '';
  }
  updateBtnState();
});

delRow.addEventListener('click', () => {
  table.deleteRow(-1);
  updateBtnState();
});
