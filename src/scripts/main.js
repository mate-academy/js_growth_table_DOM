'use strict';

const MAX_ROWS = 10;
const MIN_ROWS = 2;
const MAX_COLUMNS = 10;
const MIN_COLUMNS = 2;

const table = document.querySelector('.field');
const container = document.querySelector('.container');

const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const updateButtons = () => {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  addRowButton.disabled = rowCount === MAX_ROWS;
  removeRowButton.disabled = rowCount === MIN_ROWS;

  addColumnButton.disabled = columnCount === MAX_COLUMNS;
  removeColumnButton.disabled = columnCount === MIN_COLUMNS;
};

const addRow = () => {
  const row = table.insertRow();

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    row.insertCell();
  }

  updateButtons();
};

const removeRow = () => {
  if (table.rows.length > 2) {
    table.deleteRow(-1);
  }

  updateButtons();
};

const addColumn = () => {
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].insertCell(-1);
  }

  updateButtons();
};

const removeColumn = () => {
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].deleteCell(-1);
  }

  updateButtons();
};

container.addEventListener('click', (e) => {
  const target = e.target.closest('button');

  if (!target) {
    return;
  }

  if (target.classList.contains('append-row')) {
    addRow();
  } else if (target.classList.contains('remove-row')) {
    removeRow();
  } else if (target.classList.contains('append-column')) {
    addColumn();
  } else if (target.classList.contains('remove-column')) {
    removeColumn();
  }
});
