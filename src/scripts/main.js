'use strict';

const table = document.querySelector('.field');
const append = document.querySelector('.append-row');
const remove = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

function checkLimits() {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  append.disabled = rowCount >= 10;
  remove.disabled = rowCount <= 2;
  appendColumn.disabled = colCount >= 10;
  removeColumn.disabled = colCount <= 2;
}

checkLimits();

append.addEventListener('click', () => {
  if (table.rows.length >= 10) {
    return;
  }

  const newRow = table.insertRow(-1);
  const colCount = table.rows[0].cells.length;

  for (let i = 0; i < colCount; i++) {
    newRow.insertCell(-1);
  }

  checkLimits();
});

remove.addEventListener('click', () => {
  if (table.rows.length <= 2) {
    return;
  }

  table.deleteRow(-1);
  checkLimits();
});

appendColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length >= 10) {
    return;
  }

  for (const row of table.rows) {
    row.insertCell(-1);
  }
  checkLimits();
});

removeColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length <= 2) {
    return;
  }

  for (const row of table.rows) {
    row.deleteCell(-1);
  }

  checkLimits();
});
