'use strict';

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

const MAX_COUNT = 10;
const MIN_COUNT = 2;

const updateButtonState = () => {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  appendRowBtn.disabled = rowCount >= MAX_COUNT;
  appendColBtn.disabled = colCount >= MAX_COUNT;

  removeRowBtn.disabled = rowCount <= MIN_COUNT;
  removeColBtn.disabled = colCount <= MIN_COUNT;
};

appendRowBtn.addEventListener('click', () => {
  const rowCount = table.rows.length;

  if (rowCount < MAX_COUNT) {
    const newRow = table.insertRow();
    const colCount = table.rows[0].cells.length;

    for (let i = 0; i < colCount; i++) {
      newRow.insertCell();
    }
  }

  updateButtonState();
});

removeRowBtn.addEventListener('click', () => {
  const rowCount = table.rows.length;

  if (rowCount > MIN_COUNT) {
    table.deleteRow(-1);
  }

  updateButtonState();
});

appendColBtn.addEventListener('click', () => {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  if (colCount < MAX_COUNT) {
    for (let i = 0; i < rowCount; i++) {
      table.rows[i].insertCell();
    }
  }

  updateButtonState();
});

removeColBtn.addEventListener('click', () => {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  if (colCount > MIN_COUNT) {
    for (let i = 0; i < rowCount; i++) {
      table.rows[i].deleteCell(-1);
    }
  }

  updateButtonState();
});
