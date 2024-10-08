'use strict';

const table = document.querySelector('.field');
const MAX = 10;
const MIN = 2;
const field = {
  rows: table.rows.length,
  cols: table.rows[0].cells.length,
};

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');

field.toggleRowBtns = () => {
  appendRow.disabled = field.rows >= MAX;
  removeRow.disabled = field.rows <= MIN;
};

field.toggleColBtns = () => {
  appendCol.disabled = field.cols >= MAX;
  removeCol.disabled = field.cols <= MIN;
};

const handleAppendRow = () => {
  if (field.rows >= MAX) {
    return;
  }

  const newRow = table.insertRow();

  for (let i = 0; i < field.cols; i++) {
    newRow.insertCell(-1);
  }

  field.rows++;
  field.toggleRowBtns();
};

const handleRemoveRow = () => {
  if (field.rows <= MIN) {
    return;
  }

  table.deleteRow(-1);
  field.rows--;
  field.toggleRowBtns();
};

const handleAppendCol = () => {
  if (field.cols >= MAX) {
    return;
  }

  for (const row of table.rows) {
    row.insertCell(-1);
  }

  field.cols++;
  field.toggleColBtns();
};

const handleRemoveCol = () => {
  if (field.cols <= MIN) {
    return;
  }

  for (const row of table.rows) {
    row.deleteCell(-1);
  }

  field.cols--;
  field.toggleColBtns();
};

appendRow.addEventListener('click', handleAppendRow);
removeRow.addEventListener('click', handleRemoveRow);
appendCol.addEventListener('click', handleAppendCol);
removeCol.addEventListener('click', handleRemoveCol);
