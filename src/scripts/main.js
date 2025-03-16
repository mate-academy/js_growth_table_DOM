'use strict';

const table = document.querySelector('.field');
const addRowBtn = document.querySelector('.append-row');
const removeRowbtn = document.querySelector('.remove-row');
const addColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const minSize = 2;
const maxSize = 10;

const newTable = () => {
  const rows = table.rows.length;
  const cols = table.rows[0].cells.length;

  addColumnBtn.disabled = cols >= maxSize;
  addRowBtn.disabled = rows >= maxSize;
  removeColumnBtn.disabled = cols <= minSize;
  removeRowbtn.disabled = rows <= minSize;
};

const addRow = () => {
  if (table.rows.length < maxSize) {
    const newRow = table.insertRow();

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      newRow.insertCell();
    }
  }

  newTable();
};

const removeRow = () => {
  if (table.rows.length > minSize) {
    table.deleteRow(-1);
  }

  newTable();
};

const addColumn = () => {
  if (table.rows[0].cells.length < maxSize) {
    Array.from(table.rows).forEach((row) => row.insertCell());
  }

  newTable();
};

const removeColumn = () => {
  if (table.rows[0].cells.length > minSize) {
    Array.from(table.rows).forEach((row) => row.deleteCell(-1));
  }

  newTable();
};

addRowBtn.addEventListener('click', addRow);
addColumnBtn.addEventListener('click', addColumn);
removeColumnBtn.addEventListener('click', removeColumn);
removeRowbtn.addEventListener('click', removeRow);
