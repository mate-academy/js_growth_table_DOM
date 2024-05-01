'use strict';

const table = document.querySelector('.field');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

function appendRow() {
  if (table.rows.length < 10) {
    const newRow = table.insertRow();

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      const newCell = newRow.insertCell();

      newCell.textContent = '';
    }

    updateButtons();
  }
}

function removeRow() {
  if (table.rows.length > 2) {
    table.deleteRow(-1);
    updateButtons();
  }
}

function appendColumn() {
  if (table.rows[0].cells.length < 10) {
    for (let i = 0; i < table.rows.length; i++) {
      const newCell = table.rows[i].insertCell();

      newCell.textContent = '';
    }
    updateButtons();
  }
}

function removeColumn() {
  if (table.rows[0].cells.length > 2) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(-1);
    }
    updateButtons();
  }
}

function updateButtons() {
  const numRows = table.rows.length;
  const numCols = table.rows[0].cells.length;

  appendRowBtn.disabled = numRows >= 10;
  removeRowBtn.disabled = numRows <= 2;
  appendColumnBtn.disabled = numCols >= 10;
  removeColumnBtn.disabled = numCols <= 2;
}

appendRowBtn.addEventListener('click', appendRow);
removeRowBtn.addEventListener('click', removeRow);
appendColumnBtn.addEventListener('click', appendColumn);
removeColumnBtn.addEventListener('click', removeColumn);

updateButtons();
