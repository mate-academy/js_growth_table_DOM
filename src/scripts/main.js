'use strict';

// write code here
const table = document.querySelector('table');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const rowCount = () => table.rows.length;
const columnCount = () => (table.rows.length ? table.rows[0].cells.length : 0);
const updateButtonState = () => {
  appendRowButton.disabled = rowCount() >= 10;
  removeRowButton.disabled = rowCount() <= 2;
  appendColumnButton.disabled = columnCount() >= 10;
  removeColumnButton.disabled = columnCount() <= 2;
};
const appendRow = () => {
  const currentRows = rowCount();
  const cols = columnCount();

  if (currentRows >= 10) {
    return;
  }

  const tr = document.createElement('tr');

  for (let i = 0; i < cols; i++) {
    const td = document.createElement('td');

    tr.appendChild(td);
  }

  table.tBodies[0].appendChild(tr);
  updateButtonState();
};

const removeRow = () => {
  const currentRows = rowCount();

  if (currentRows <= 2) {
    return;
  }

  table.deleteRow(currentRows - 1);
  updateButtonState();
};

const appendColumn = () => {
  const cols = columnCount();

  if (cols >= 10) {
    return;
  }

  for (const row of table.rows) {
    const td = document.createElement('td');

    row.appendChild(td);
  }

  updateButtonState();
};

const removeColumn = () => {
  const cols = columnCount();

  if (cols <= 2) {
    return;
  }

  for (const row of table.rows) {
    row.deleteCell(row.cells.length - 1);
  }

  updateButtonState();
};

appendRowButton.addEventListener('click', appendRow);
removeRowButton.addEventListener('click', removeRow);
appendColumnButton.addEventListener('click', appendColumn);
removeColumnButton.addEventListener('click', removeColumn);

updateButtonState();
