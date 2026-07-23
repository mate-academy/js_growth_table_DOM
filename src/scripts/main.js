'use strict';

const table = document.querySelector('.field');

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');

const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

appendRowBtn.addEventListener('click', () => {
  if (table.rows.length >= 10) {
    return;
  }

  const row = table.insertRow();

  const cols = table.rows[0].cells.length;

  for (let i = 0; i < cols; i++) {
    row.insertCell();
  }

  updateButtons();
});

removeRowBtn.addEventListener('click', () => {
  if (table.rows.length <= 2) {
    return;
  }

  table.deleteRow(table.rows.length - 1);

  updateButtons();
});

appendColumnBtn.addEventListener('click', () => {
  if (table.rows[0].cells.length >= 10) {
    return;
  }

  for (const row of table.rows) {
    const td = document.createElement('td');

    row.append(td);
  }

  updateButtons();
});

removeColumnBtn.addEventListener('click', () => {
  if (table.rows[0].cells.length <= 2) {
    return;
  }

  for (const row of table.rows) {
    row.deleteCell(row.cells.length - 1);
  }

  updateButtons();
});

function updateButtons() {
  const rows = table.rows.length;
  const cols = table.rows[0].cells.length;

  appendRowBtn.disabled = rows >= 10;
  removeRowBtn.disabled = rows <= 2;

  appendColumnBtn.disabled = cols >= 10;
  removeColumnBtn.disabled = cols <= 2;
}

updateButtons();
