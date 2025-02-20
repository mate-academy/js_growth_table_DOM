'use strict';

const table = document.querySelector('table');

const tbody = table.querySelector('tbody');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const minRows = 2;
const minCols = 2;
const maxRows = 10;
const maxCols = 10;

appendRow.addEventListener('click', () => {
  if (tbody.children.length < maxRows) {
    const newRow = table.rows[0].cloneNode(true);

    tbody.appendChild(newRow);
  }

  updateButton();
});

removeRow.addEventListener('click', () => {
  if (tbody.children.length > minRows) {
    tbody.lastElementChild.remove();
  }

  updateButton();
});

appendColumn.addEventListener('click', () => {
  const rows = table.rows;

  if (rows[0].cells.length < maxCols) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].insertCell();
    }
  }

  updateButton();
});

removeColumn.addEventListener('click', () => {
  const rows = table.rows;

  if (rows[0].cells.length > minCols) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].deleteCell(-1);
    }
  }

  updateButton();
});

function updateButton() {
  appendRow.disabled = tbody.children.length === maxRows;
  removeRow.disabled = tbody.children.length === minRows;
  appendColumn.disabled = table.rows[0].cells.length === maxCols;
  removeColumn.disabled = table.rows[0].cells.length === minCols;
}

updateButton();
