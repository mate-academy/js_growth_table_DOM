'use strict';

// write code here
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field tbody');

const minCell = 2;
const maxCell = 10;

function addRow() {
  const rows = table.querySelectorAll('tr');
  const lastRow = table.querySelector('tr:last-child');
  const newRow = lastRow.cloneNode(true);

  if (rows.length < maxCell) {
    removeRow.disabled = false;
    table.appendChild(newRow);
  }

  if (rows.length + 1 === maxCell) {
    appendRow.disabled = true;
  }
}

function addCol() {
  const rows = table.querySelectorAll('tr');
  const countCell = rows[0].querySelectorAll('td');

  if (countCell.length < maxCell) {
    removeColumn.disabled = false;

    rows.forEach((tr) => {
      const lastCell = tr.querySelector('td:last-child');
      const newCell = lastCell.cloneNode(true);

      tr.appendChild(newCell);
    });
  }

  if (countCell.length + 1 === maxCell) {
    appendColumn.disabled = true;
  }
}

function deleteRow() {
  const rows = table.querySelectorAll('tr');

  if (rows.length > minCell) {
    appendRow.disabled = false;
    table.removeChild(rows[rows.length - 1]);
  }

  if (rows.length - 1 === minCell) {
    removeRow.disabled = true;
  }
}

function deleteCol() {
  const rows = table.querySelectorAll('tr');

  rows.forEach((tr) => {
    const cells = tr.querySelectorAll('td');

    if (cells.length > minCell) {
      appendColumn.disabled = false;
      tr.removeChild(cells[cells.length - 1]);
    }

    if (cells.length - 1 === minCell) {
      removeColumn.disabled = true;
    }
  });
}

appendRow.addEventListener('click', () => {
  addRow();
});

removeRow.addEventListener('click', () => {
  deleteRow();
});

appendColumn.addEventListener('click', () => {
  addCol();
});

removeColumn.addEventListener('click', () => {
  deleteCol();
});
