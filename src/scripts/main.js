'use strict';

const MAX_ITEMS = 10;
const MIN_ITEMS = 2;

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

function updateButtonState() {
  const totalRows = table.rows.length;
  const totalColumns = table.rows[0].cells.length;

  appendRowBtn.disabled = totalRows >= MAX_ITEMS;
  removeRowBtn.disabled = totalRows <= MIN_ITEMS;
  appendColumnBtn.disabled = totalColumns >= MAX_ITEMS;
  removeColumnBtn.disabled = totalColumns <= MIN_ITEMS;
}

appendRowBtn.addEventListener('click', () => {
  if (table.rows.length >= MAX_ITEMS) {
    return;
  }

  const currentLength = table.rows[0].cells.length;

  const newRow = table.insertRow();

  for (let i = 0; i < currentLength; i++) {
    newRow.insertCell();
  }

  updateButtonState();
});

removeRowBtn.addEventListener('click', () => {
  if (table.rows.length <= MIN_ITEMS) {
    return;
  }

  table.deleteRow(-1);

  updateButtonState();
});

appendColumnBtn.addEventListener('click', () => {
  if (table.rows[0].cells.length >= MAX_ITEMS) {
    return;
  }

  for (const row of table.rows) {
    row.insertCell();
  }

  updateButtonState();
});

removeColumnBtn.addEventListener('click', () => {
  if (table.rows[0].cells.length <= MIN_ITEMS) {
    return;
  }

  for (const row of table.rows) {
    row.deleteCell(-1);
  }

  updateButtonState();
});

updateButtonState();
