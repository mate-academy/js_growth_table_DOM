'use strict';

const MIN_SIZE = 2;
const MAX_SIZE = 10;
const container = document.querySelector('.container');
const table = container ? container.querySelector('.field') : null;
const appendRowButton = container
  ? container.querySelector('.append-row')
  : null;
const removeRowButton = container
  ? container.querySelector('.remove-row')
  : null;
const appendColumnButton = container
  ? container.querySelector('.append-column')
  : null;
const removeColumnButton = container
  ? container.querySelector('.remove-column')
  : null;

const setDisabled = (button, disabled) => {
  if (button) {
    button.disabled = disabled;
  }
};

const updateControls = () => {
  const firstRow = table?.rows[0];

  if (!table || !table.rows.length || !firstRow || !firstRow.cells.length) {
    return;
  }

  const rowsTotal = table.rows.length;
  const colsTotal = firstRow.cells.length;

  setDisabled(appendRowButton, rowsTotal >= MAX_SIZE);
  setDisabled(removeRowButton, rowsTotal <= MIN_SIZE);
  setDisabled(appendColumnButton, colsTotal >= MAX_SIZE);
  setDisabled(removeColumnButton, colsTotal <= MIN_SIZE);
};

if (container) {
  container.addEventListener('click', (e) => {
    if (!table) {
      return;
    }

    const button = e.target.closest('button');

    if (!button) {
      return;
    }

    const firstRow = table.rows[0];

    if (!table.rows.length || !firstRow || !firstRow.cells.length) {
      return;
    }

    const rowsTotal = table.rows.length;
    const colsTotal = firstRow.cells.length;

    if (button === appendRowButton && rowsTotal < MAX_SIZE) {
      const newRow = table.insertRow();

      for (let i = 0; i < colsTotal; i++) {
        newRow.insertCell();
      }
    }

    if (button === removeRowButton && rowsTotal > MIN_SIZE) {
      table.deleteRow(rowsTotal - 1);
    }

    if (button === appendColumnButton && colsTotal < MAX_SIZE) {
      for (let i = 0; i < rowsTotal; i++) {
        table.rows[i].insertCell();
      }
    }

    if (button === removeColumnButton && colsTotal > MIN_SIZE) {
      const lastIndex = colsTotal - 1;

      for (let i = 0; i < rowsTotal; i++) {
        table.rows[i].deleteCell(lastIndex);
      }
    }

    updateControls();
  });

  updateControls();
}
