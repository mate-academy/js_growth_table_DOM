'use strict';

let columnsCount = document.querySelector('tr').children.length;
let rowsCount = document.querySelectorAll('tr').length;
const rows = document.querySelector('tbody');

const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

addRow.addEventListener('click', el => {
  rowsCount++;

  removeRow.removeAttribute('disabled');

  if (rowsCount === 10) {
    addRow.disabled = true;
  }

  rows.append(document.querySelector('tr').cloneNode(true));
});

removeRow.addEventListener('click', el => {
  rowsCount--;

  addRow.removeAttribute('disabled');

  if (rowsCount === 2) {
    removeRow.disabled = true;
  }

  rows.lastElementChild.remove();

});

addColumn.addEventListener('click', el => {
  columnsCount++;

  removeColumn.removeAttribute('disabled');

  if (columnsCount === 10) {
    addColumn.disabled = true;
  }

  [...document.querySelectorAll('tr')].forEach(element => {
    element.innerHTML += '<td></td>';
  });
});

removeColumn.addEventListener('click', el => {
  columnsCount--;
  addColumn.removeAttribute('disabled');

  if (columnsCount === 2) {
    removeColumn.disabled = true;
  }

  [...document.querySelectorAll('tr')].forEach(element => {
    element.children[element.children.length - 1].remove();
  });
});
