'use strict';

const table = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

function updateButtons() {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  appendRowButton.disabled = rowCount >= 10;
  removeRowButton.disabled = rowCount <= 2;

  appendColumnButton.disabled = columnCount >= 10;
  removeColumnButton.disabled = columnCount <= 2;
}

function addRow() {
  if (table.rows.length < 10) {
    const newRow = table.insertRow();

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      newRow.insertCell();
    }

    updateButtons();
  }
}

function removeRow() {
  if (table.rows.length > 2) {
    table.deleteRow(-1);
  }

  updateButtons();
}

function addColumn() {
  if (table.rows[0].cells.length < 10) {
    table.querySelectorAll('tr').forEach((row) => {
      row.insertCell();
    });
  }

  updateButtons();
}

function removeColumn() {
  if (table.rows[0].cells.length > 2) {
    table.querySelectorAll('tr').forEach((row) => {
      row.deleteCell(-1);
    });
  }

  updateButtons();
}

appendRowButton.addEventListener('click', () => {
  addRow();
});

removeRowButton.addEventListener('click', () => {
  removeRow();
});

appendColumnButton.addEventListener('click', () => {
  addColumn();
});

removeColumnButton.addEventListener('click', () => {
  removeColumn();
});

updateButtons();
