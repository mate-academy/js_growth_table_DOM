'use strict';

const refs = {
  buttons: {
    appendRow: document.querySelector('.append-row'),
    removeRow: document.querySelector('.remove-row'),
    appendColumn: document.querySelector('.append-column'),
    removeColumn: document.querySelector('.remove-column'),
  },
  table: document.querySelector('.field'),
};

const MAX_ROWS = 10;
const MIN_ROWS = 2;
const MAX_COLUMNS = 10;
const MIN_COLUMNS = 2;

function getRowCount() {
  return refs.table.rows.length;
}

function getColumnCount() {
  return getRowCount() > 0 ? refs.table.rows[0].cells.length : 0;
}

function updateButtons() {
  const rowCount = getRowCount();
  const columnCount = getColumnCount();

  refs.buttons.appendRow.disabled = rowCount >= MAX_ROWS;
  refs.buttons.removeRow.disabled = rowCount <= MIN_ROWS;
  refs.buttons.appendColumn.disabled = columnCount >= MAX_COLUMNS;
  refs.buttons.removeColumn.disabled = columnCount <= MIN_COLUMNS;
}

function addRow() {
  if (getRowCount() < MAX_ROWS) {
    const newRow = refs.table.insertRow();
    const columnCount = getColumnCount();

    for (let i = 0; i < columnCount; i++) {
      const cell = newRow.insertCell();

      cell.textContent = '';
    }

    updateButtons();
  }
}

function removeRow() {
  if (getRowCount() > MIN_ROWS) {
    refs.table.deleteRow(-1);
    updateButtons();
  }
}

function addColumn() {
  if (getColumnCount() < MAX_COLUMNS) {
    Array.from(refs.table.rows).forEach((row) => {
      const cell = row.insertCell();

      cell.textContent = '';
    });

    updateButtons();
  }
}

function removeColumn() {
  if (getColumnCount() > MIN_COLUMNS) {
    Array.from(refs.table.rows).forEach((row) => {
      row.deleteCell(-1);
    });

    updateButtons();
  }
}

refs.buttons.appendRow.addEventListener('click', addRow);
refs.buttons.removeRow.addEventListener('click', removeRow);
refs.buttons.appendColumn.addEventListener('click', addColumn);
refs.buttons.removeColumn.addEventListener('click', removeColumn);

updateButtons();
