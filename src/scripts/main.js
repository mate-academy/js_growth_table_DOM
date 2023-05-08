'use strict';

const addRowButton = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const addColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

const maxCount = 10;
const minCount = 2;

addRowButton.addEventListener('click', () => {
  const firstRow = table.querySelector('tr');
  const newRow = firstRow.cloneNode(true);

  table.appendChild(newRow);

  if (table.rows.length >= maxCount) {
    addRowButton.disabled = true;
  }
  removeRowBtn.disabled = false;
});

removeRowBtn.addEventListener('click', () => {
  table.deleteRow(-1);

  if (table.rows.length <= minCount) {
    removeRowBtn.disabled = true;
  }
  addRowButton.disabled = false;
});

addColumnBtn.addEventListener('click', () => {
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].insertCell();
  }

  if (table.rows[0].cells.length >= maxCount) {
    addColumnBtn.disabled = true;
  }

  removeColumnBtn.disabled = false;
});

removeColumnBtn.addEventListener('click', () => {
  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].deleteCell(-1);
  }

  if (table.rows[0].cells.length <= minCount) {
    removeColumnBtn.disabled = true;
  }
  addColumnBtn.disabled = false;
});
