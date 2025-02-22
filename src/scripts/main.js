'use strict';

const table = document.querySelector('tbody');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

function updateButtons() {
  const colCount = table.rows[0].cells.length;
  const rowCount = table.rows.length;

  appendRowBtn.disabled = rowCount >= 10;
  removeRowBtn.disabled = rowCount <= 2;
  appendColumnBtn.disabled = colCount >= 10;
  removeColumnBtn.disabled = colCount <= 2;
}

appendRowBtn.addEventListener('click', () => {
  if (table.rows.length >= 10) {
    return;
  }

  const row = table.insertRow();

  Array.from(table.rows[0].cells).forEach(
    () => (row.insertCell().textContent = ''),
  );

  updateButtons();
});

removeRowBtn.addEventListener('click', () => {
  if (table.rows.length <= 2) {
    return;
  }

  table.deleteRow(-1);

  updateButtons();
});

appendColumnBtn.addEventListener('click', () => {
  if (table.rows[0].cells.length >= 10) {
    return;
  }

  Array.from(table.rows).forEach((row) => {
    row.insertCell();
  });

  updateButtons();
});

removeColumnBtn.addEventListener('click', () => {
  if (table.rows[0].cells.length <= 2) {
    return;
  }

  Array.from(table.rows).forEach((row) => {
    row.deleteCell(-1);
  });

  updateButtons();
});
