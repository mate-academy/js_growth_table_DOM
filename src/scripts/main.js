'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const table = document.querySelector('.field');

const maxRows = 10;
const minRows = 2;
const maxColumns = 10;
const minColumns = 2;

function updateButtons() {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  appendRowButton.disabled = rowCount >= maxRows;
  removeRowButton.disabled = rowCount <= minRows;
  appendColumnButton.disabled = columnCount >= maxColumns;
  removeColumnButton.disabled = columnCount <= minColumns;
}

appendRowButton.onclick = () => {
  if (table.rows.length < maxRows) {
    const newRow = table.insertRow();

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      newRow.insertCell();
    }
  }
  updateButtons();
};

removeRowButton.onclick = () => {
  if (table.rows.length > minRows) {
    table.deleteRow(-1);
  }
  updateButtons();
};

appendColumnButton.onclick = () => {
  if (table.rows[0].cells.length < maxColumns) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].insertCell();
    }
  }
  updateButtons();
};

removeColumnButton.onclick = () => {
  if (table.rows[0].cells.length > minColumns) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(-1);
    }
  }
  updateButtons();
};

updateButtons();
