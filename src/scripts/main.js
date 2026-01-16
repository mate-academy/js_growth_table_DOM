'use strict';

// write code here
const table = document.querySelector('table');
const maxColumns = 10;
const minColumns = 2;
const maxRows = 10;
const minRows = 2;

const buttonAppendRow = document.querySelector('button.append-row');
const buttonRemoveRow = document.querySelector('button.remove-row');
const buttonAppendColumn = document.querySelector('button.append-column');
const buttonRemoveColumn = document.querySelector('button.remove-column');

function getNumColumns() {
  return table.rows[0] ? table.rows[0].cells.length : 0;
}

function getNumRows() {
  return table.rows.length;
}

function updateButtons() {
  const numColumns = getNumColumns();
  const numRows = getNumRows();

  buttonAppendColumn.disabled = numColumns >= maxColumns;
  buttonRemoveColumn.disabled = numColumns <= minColumns;
  buttonAppendRow.disabled = numRows >= maxRows;
  buttonRemoveRow.disabled = numRows <= minRows;
}

function AppendRow(tab) {
  const tbody = tab.querySelector('tbody');
  const templateRow = tbody.querySelector('tr');

  const newRow = templateRow.cloneNode(true);

  const cells = newRow.querySelectorAll('td');

  cells.forEach((cell) => {
    cell.textContent = '';
  });

  tbody.appendChild(newRow);
  updateButtons();

  return tab;
}

function RemoveRow(tab) {
  const rows = table.rows;

  if (rows.length > 0) {
    table.deleteRow(rows.length - 1);
  }

  updateButtons();

  return tab;
}

function AppendColumn(tab) {
  const rows = tab.rows;

  for (const row of rows) {
    row.appendChild(document.createElement('td'));
  }

  updateButtons();

  return tab;
}

function RemoveColumn(tab) {
  const rows = tab.rows;

  for (let i = 0; i < rows.length; i++) {
    if (rows[i].cells.length > 0) {
      rows[i].deleteCell(rows[i].cells.length - 1);
    }
  }

  updateButtons();

  return tab;
}

buttonAppendColumn.addEventListener('click', () => {
  if (getNumColumns() < maxColumns) {
    AppendColumn(table);
  }
});

buttonRemoveColumn.addEventListener('click', () => {
  if (getNumColumns() > minColumns) {
    RemoveColumn(table);
  }
});

buttonAppendRow.addEventListener('click', () => {
  if (getNumRows() < maxRows) {
    AppendRow(table);
  }
});

buttonRemoveRow.addEventListener('click', () => {
  if (getNumRows() > minRows) {
    RemoveRow(table);
  }
});

updateButtons();
