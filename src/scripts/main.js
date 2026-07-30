'use strict';

const MAX_ROW_COLUMN = 10;
const MIN_ROW_COLUMN = 2;

const refs = {
  appendRow: document.querySelector('.append-row'),
  appendColumn: document.querySelector('.append-column'),
  removeRow: document.querySelector('.remove-row'),
  removeColumn: document.querySelector('.remove-column'),
  table: document.querySelector('.field'),
};

const tBody = refs.table.querySelector('tbody') ?? refs.table;

const getColumnCount = () => refs.table.rows[0]?.cells.length ?? 0;
const getRowCount = () => refs.table.rows.length;

const buttonsState = () => {
  const columns = getColumnCount();
  const rows = getRowCount();

  refs.appendColumn.disabled = columns >= MAX_ROW_COLUMN;
  refs.removeColumn.disabled = columns <= MIN_ROW_COLUMN;
  refs.appendRow.disabled = rows >= MAX_ROW_COLUMN;
  refs.removeRow.disabled = rows <= MIN_ROW_COLUMN;
};

const addColumn = () => {
  if (getColumnCount() >= MAX_ROW_COLUMN) {
    return;
  }

  for (const row of refs.table.rows) {
    row.appendChild(document.createElement('td'));
  }

  buttonsState();
};

const removeColumn = () => {
  if (getColumnCount() <= MIN_ROW_COLUMN) {
    return;
  }

  for (const row of refs.table.rows) {
    row.deleteCell(-1);
  }

  buttonsState();
};

const appendRow = () => {
  if (getRowCount() >= MAX_ROW_COLUMN) {
    return;
  }

  const columns = getColumnCount();
  const newRow = document.createElement('tr');

  for (let i = 0; i < columns; i++) {
    newRow.appendChild(document.createElement('td'));
  }

  tBody.appendChild(newRow);
  buttonsState();
};

const removeRow = () => {
  if (getRowCount() <= MIN_ROW_COLUMN) {
    return;
  }

  refs.table.deleteRow(-1);
  buttonsState();
};

refs.appendColumn.addEventListener('click', addColumn);
refs.removeColumn.addEventListener('click', removeColumn);
refs.appendRow.addEventListener('click', appendRow);
refs.removeRow.addEventListener('click', removeRow);

buttonsState();
