'use strict';

const sourceTable = document.querySelector('table.field');
const addRowBtn = document.querySelector('button.append-row');
const removeRowBtn = document.querySelector('button.remove-row');
const addColumnBtn = document.querySelector('button.append-column');
const removeColumnBtn = document.querySelector('button.remove-column');

const updateButtons = () => {
  addRowBtn.disabled = sourceTable.rows.length >= 10;
  removeRowBtn.disabled = sourceTable.rows.length <= 2;
  addColumnBtn.disabled = sourceTable.rows[0].cells.length >= 10;
  removeColumnBtn.disabled = sourceTable.rows[0].cells.length <= 2;
};

updateButtons();

addRowBtn.addEventListener('click', () => {
  if (sourceTable.rows.length >= 10) {
    return;
  }

  const lastRow = sourceTable.rows[sourceTable.rows.length - 1];
  const rowToAdd = lastRow.cloneNode(true);

  sourceTable.tBodies[0].appendChild(rowToAdd);
  updateButtons();
});

removeRowBtn.addEventListener('click', () => {
  if (sourceTable.rows.length <= 2) {
    return;
  }

  const lastRow = sourceTable.rows[sourceTable.rows.length - 1];

  lastRow.remove();
  updateButtons();
});

addColumnBtn.addEventListener('click', () => {
  if (sourceTable.rows[0].cells.length >= 10) {
    return;
  }

  for (const row of sourceTable.rows) {
    row.appendChild(document.createElement('td'));
  }

  updateButtons();
});

removeColumnBtn.addEventListener('click', () => {
  if (sourceTable.rows[0].cells.length <= 2) {
    return;
  }

  for (const row of sourceTable.rows) {
    row.cells[row.cells.length - 1].remove();
  }

  updateButtons();
});
