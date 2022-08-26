'use strict';

const tableBody = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const rows = tableBody.rows;
const max = 10;
const min = 2;

appendRow.addEventListener('click', e => {
  const row = rows[0].cloneNode(true);

  tableBody.append(row);

  if (rows.length === max) {
    disable(appendRow);
  }

  if (row.length >= min) {
    enable(removeRow);
  }
});

removeRow.addEventListener('click', e => {
  tableBody.lastElementChild.remove();

  if (rows.length === min) {
    disable(removeRow);
  }

  if (rows.length > min && rows.length < max) {
    enable(appendRow);
  }
});

appendColumn.addEventListener('click', e => {
  for (let i = 0; i < rows.length; i++) {
    const cell = rows[i].cells[0].cloneNode(true);

    rows[i].append(cell);
  }

  if (rows[0].cells.length === max) {
    disable(appendColumn);
  }

  if (rows[0].cells.length > min) {
    enable(removeColumn);
  }
});

removeColumn.addEventListener('click', e => {
  for (let i = 0; i < rows.length; i++) {
    rows[i].lastElementChild.remove();
  }

  if (rows[0].cells.length === min) {
    disable(removeColumn);
  }

  if (rows[0].cells.length < max) {
    enable(appendColumn);
  }
});

function disable(button) {
  button.setAttribute('disabled', 'true');
}

function enable(button) {
  button.removeAttribute('disabled');
}
