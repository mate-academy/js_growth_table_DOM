'use strict';

const container = document.querySelector('.container');
const fieldTable = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

appendRowButton.addEventListener('click', appendRow);
removeRowButton.addEventListener('click', removeRow);
appendColumnButton.addEventListener('click', appendColumn);
removeColumnButton.addEventListener('click', removeColumn);

function appendRow() {
  if (fieldTable.rows.length < 10) {
    const newRow = fieldTable.insertRow();
    addCellsToRow(newRow);

    if (fieldTable.rows.length === 10) {
      appendRowButton.disabled = true;
    }
    removeRowButton.disabled = false;
  }
}

function removeRow() {
  if (fieldTable.rows.length > 2) {
    fieldTable.deleteRow(-1);

    if (fieldTable.rows.length === 2) {
      removeRowButton.disabled = true;
    }
    appendRowButton.disabled = false;
  }
}

function appendColumn() {
  if (fieldTable.rows[0].cells.length < 10) {
    const rows = fieldTable.rows;
    [...rows].forEach(row => row.insertCell());
  }

  if (fieldTable.rows[0].cells.length === 10) {
    appendColumnButton.disabled = true;
  }
  removeColumnButton.disabled = false;
}

function removeColumn() {
  if (fieldTable.rows[0].cells.length > 2) {
    const rows = fieldTable.rows;
    [...rows].forEach(row => row.deleteCell(-1));

    if (fieldTable.rows[0].cells.length === 2) {
      removeColumnButton.disabled = true;
    }
    appendColumnButton.disabled = false;
  }
}

function addCellsToRow(row) {
  const numCells = fieldTable.rows[0].cells.length;
  for (let i = 0; i < numCells; i++) {
    row.insertCell();
  }
}

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('append-row')) {
    appendRow();
  } else if (e.target.classList.contains('remove-row')) {
    removeRow();
  } else if (e.target.classList.contains('append-column')) {
    appendColumn();
  } else if (e.target.classList.contains('remove-column')) {
    removeColumn();
  }
});
