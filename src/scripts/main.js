'use strict';

const table = document.querySelector('.field');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const maxRows = 10;
const minRows = 2;
const maxColumns = 10;
const minColumns = 2;

updateButtonState();

appendRowBtn.addEventListener('click', function () {
  if (table.rows.length < maxRows) {
    const newRow = table.insertRow();
    for (let i = 0; i < table.rows[0].cells.length; i++) {
      newRow.insertCell();
    }

    updateButtonState();
  }
});

removeRowBtn.addEventListener('click', function () {
  if (table.rows.length > minRows) {
    table.deleteRow(-1);

    updateButtonState();
  }
});

appendColumnBtn.addEventListener('click', function () {
  if (table.rows[0].cells.length < maxColumns) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].insertCell();
    }

    updateButtonState();
  }
});

removeColumnBtn.addEventListener('click', function () {
  if (table.rows[0].cells.length > minColumns) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(-1);
    }
    
    updateButtonState();
  }
});

function updateButtonState() {
  appendRowBtn.disabled = table.rows.length >= maxRows;
  removeRowBtn.disabled = table.rows.length <= minRows;
  appendColumnBtn.disabled = table.rows[0].cells.length >= maxColumns;
  removeColumnBtn.disabled = table.rows[0].cells.length <= minColumns;
}
