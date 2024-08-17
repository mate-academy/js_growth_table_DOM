'use strict';

const MAX_SIZE = 10;
const MIN_SIZE = 2;

const table = document.querySelector('.field');
const rows = table.rows;

const addRowBtn = document.querySelector('.append-row');
const deleteRowBtn = document.querySelector('.remove-row');
const addColumnBtn = document.querySelector('.append-column');
const deleteColumnBtn = document.querySelector('.remove-column');

const updateButtons = () => {
  addRowBtn.disabled = rows.length >= MAX_SIZE;
  deleteRowBtn.disabled = rows.length <= MIN_SIZE;
  addColumnBtn.disabled = rows[0].cells.length >= MAX_SIZE;
  deleteColumnBtn.disabled = rows[0].cells.length <= MIN_SIZE;
};

const addRow = () => {
  if (rows.length < MAX_SIZE) {
    const newRow = table.insertRow();

    for (let i = 0; i < rows[0].cells.length; i++) {
      newRow.insertCell();
    }
    updateButtons();
  }
};

const deleteRow = () => {
  if (rows.length > MIN_SIZE) {
    table.deleteRow(rows.length - 1);
    updateButtons();
  }
};

const addColumn = () => {
  if (rows[0].cells.length < MAX_SIZE) {
    for (const row of rows) {
      row.insertCell();
    }
    updateButtons();
  }
};

const deleteColumn = () => {
  if (rows[0].cells.length > MIN_SIZE) {
    for (const row of rows) {
      row.deleteCell(row.cells.length - 1);
    }
    updateButtons();
  }
};

addRowBtn.addEventListener('click', addRow);
deleteRowBtn.addEventListener('click', deleteRow);
addColumnBtn.addEventListener('click', addColumn);
deleteColumnBtn.addEventListener('click', deleteColumn);

updateButtons();
