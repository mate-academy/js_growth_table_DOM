'use strict';

const tableField = document.querySelector('.field tbody');
const rowPlus = document.querySelector('.append-row');
const rowMinus = document.querySelector('.remove-row');
const columnPlus = document.querySelector('.append-column');
const columnMinus = document.querySelector('.remove-column');

document.addEventListener('click', event => {
  const row = tableField.querySelector('tr');
  const cell = row.querySelector('td');

  let rowsQuantity = 0;
  let columnsQuantity = 0;

  switch (event.target) {
    case rowPlus:
      if (rowsQuantity !== 10) {
        tableField.append(row.cloneNode(true));
      }
      rowsQuantity = tableField.children.length;

      if (rowsQuantity > 2) {
        rowMinus.disabled = false;
      }

      if (rowsQuantity > 9) {
        rowPlus.disabled = true;
      }
      break;

    case rowMinus:
      if (rowsQuantity !== 2) {
        row.remove();
      }
      rowsQuantity = tableField.children.length;

      if (rowsQuantity < 3) {
        rowMinus.disabled = true;
      }

      if (rowsQuantity < 10) {
        rowPlus.disabled = false;
      }
      break;

    case columnPlus:
      if (columnsQuantity !== 10) {
        [...tableField.children].forEach(tr => tr.append(cell.cloneNode(true)));
      }
      columnsQuantity = row.children.length;

      if (columnsQuantity > 2) {
        columnMinus.disabled = false;
      }

      if (columnsQuantity > 9) {
        columnPlus.disabled = true;
      }
      break;

    case columnMinus:
      if (columnsQuantity !== 2) {
        [...tableField.children].forEach(tr => tr.lastElementChild.remove());
      }

      columnsQuantity = row.children.length;

      if (columnsQuantity < 3) {
        columnMinus.disabled = true;
      }

      if (columnsQuantity < 10) {
        columnPlus.disabled = false;
      }
      break;
    default:
  }
});
