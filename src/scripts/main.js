'use strict';

// write code here

const min = 2;
const max = 10;

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('tbody');

let amountRows = table.rows.length;
let amountColumn = table.rows[0].cells.length;

document.addEventListener('click', (event) => {
  const item = event.target;
  
  if (!item.closest('button') || item.disabled === true) {
    return;
  }

  if (item.closest('.append-row')) {
    const tr = document.createElement('tr');

    for (let i = 0; i < amountColumn; i++) {
      const td = document.createElement('td');
      tr.append(td);
    }

    table.append(tr);
    amountRows++;
  }

  if (item.closest('.remove-row')) {
    table.rows[amountRows - 1].remove();
    amountRows--;
  }

  if (item.closest('.append-column')) {
    [...table.rows].map((element) => {
      const td = document.createElement('td');

      element.append(td);
    });

    amountColumn++;
  }

  if (item.closest('.remove-column')) {
    [...table.rows].map(el => {
      el.cells[amountColumn - 1].remove();
    });

    amountColumn--;
  }

  if (amountRows === min) {
    removeRow.setAttribute('disabled', true);
  } else {
    removeRow.disabled = null;
  }

  if (amountRows === max) {
    addRow.setAttribute('disabled', true);
  } else {
    addRow.disabled = null;
  }

  if (amountColumn === min) {
    removeColumn.setAttribute('disabled', true);
  } else {
    removeColumn.disabled = null;
  }

  if (amountColumn === max) {
    addColumn.setAttribute('disabled', true);
  } else {
    addColumn.disabled = null;
  }

});