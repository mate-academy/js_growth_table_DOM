'use strict';

const field = document.querySelector('.field');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', (e) => {
  const lastChild = field.rows[field.rows.length - 1];
  const newRow = lastChild.cloneNode(true);

  field.appendChild(newRow);

  if (field.rows.length >= 10) {
    appendRow.disabled = true;
  }

  removeRow.disabled = false;
});

removeRow.addEventListener('click', (e) => {
  const lastChild = field.rows[field.rows.length - 1];

  lastChild.remove();

  if (field.rows.length <= 2) {
    removeRow.disabled = true;
  }

  appendRow.disabled = false;
});

appendColumn.addEventListener('click', (e) => {
  [...field.rows].forEach(item => {
    const lastCell = item.cells[item.cells.length - 1];
    const newCell = lastCell.cloneNode(true);

    item.appendChild(newCell);

    if (item.cells.length >= 10) {
      appendColumn.disabled = true;
    }

    removeColumn.disabled = false;
  });
});

removeColumn.addEventListener('click', (e) => {
  [...field.rows].forEach(item => {
    const lastCell = item.cells[item.cells.length - 1];

    lastCell.remove();

    if (item.cells.length <= 2) {
      removeColumn.disabled = true;
    }

    appendColumn.disabled = false;
  });
});
