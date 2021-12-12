'use strict';

const table = document.querySelector('tbody');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const min = 2;
const max = 10;

let amountRows = table.rows.length;
let amountColumn = table.rows[0].cells.length;

document.addEventListener('click', e => {
  const item = e.target;

  if (!item.closest('button') || amountRows === max || amountColumn === max) {
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
    [...table.rows].map(el => {
      const tdCln = document.createElement('td');

      el.append(tdCln);
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
    removeRowButton.setAttribute('disabled', true);
  } else {
    removeRowButton.disabled = null;
  }

  if (amountRows === max) {
    appendRowButton.setAttribute('disabled', true);
  } else {
    appendRowButton.disabled = null;
  }

  if (amountColumn === min) {
    removeColumnButton.setAttribute('disabled', true);
  } else {
    removeColumnButton.disabled = null;
  }

  if (amountColumn === max) {
    appendColumnButton.setAttribute('disabled', true);
  } else {
    appendColumnButton.disabled = null;
  }
});
