'use strict';

const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const MIN_SIZE = 2;
const MAX_SIZE = 10;

function updateButtons() {
  const rows = table.rows.length;
  const columns = table.rows[0].cells.length;

  appendRowBtn.disabled = rows >= MAX_SIZE;
  removeRowBtn.disabled = rows <= MIN_SIZE;

  appendColumnBtn.disabled = columns >= MAX_SIZE;
  removeColumnBtn.disabled = columns <= MIN_SIZE;
}

appendRowBtn.addEventListener('click', () => {
  const rows = table.rows.length;
  const columns = table.rows[0].cells.length;

  if (rows >= MAX_SIZE) {
    return;
  }

  const newRow = document.createElement('tr');

  for (let i = 0; i < columns; i++) {
    newRow.appendChild(document.createElement('td'));
  }

  tbody.appendChild(newRow);

  updateButtons();
});

removeRowBtn.addEventListener('click', () => {
  if (table.rows.length > MIN_SIZE) {
    table.deleteRow(-1);
  }

  updateButtons();
});

appendColumnBtn.addEventListener('click', () => {
  const rows = table.rows.length;
  const columns = table.rows[0].cells.length;

  if (columns >= MAX_SIZE) {
    return;
  }

  for (let i = 0; i < rows; i++) {
    const cell = document.createElement('td');

    table.rows[i].appendChild(cell);
  }

  updateButtons();
});

removeColumnBtn.addEventListener('click', () => {
  const columns = table.rows[0].cells.length;

  if (columns > MIN_SIZE) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(-1);
    }
  }

  updateButtons();
});

updateButtons();
