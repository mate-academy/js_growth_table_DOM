'use strict';

// write code here
const table = document.querySelector('.field');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const MAX_COUNT = 10;
const MIN_COUNT = 2;

function updateButtons() {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0]?.cells.length || 0;

  appendRowBtn.disabled = rowCount >= MAX_COUNT;
  removeRowBtn.disabled = rowCount <= MIN_COUNT;
  appendColumnBtn.disabled = columnCount >= MAX_COUNT;
  removeColumnBtn.disabled = columnCount <= MIN_COUNT;
}

appendRowBtn.addEventListener('click', () => {
  const columnCount = table.rows[0]?.cells.length || 0;

  if (table.rows.length < MAX_COUNT) {
    const newRow = table.insertRow();

    for (let i = 0; i < columnCount; i++) {
      newRow.insertCell();
    }

    updateButtons();
  }
});

removeRowBtn.addEventListener('click', () => {
  if (table.rows.length > MIN_COUNT) {
    table.deleteRow(-1);

    updateButtons();
  }
});

appendColumnBtn.addEventListener('click', () => {
  if (table.rows[0]?.cells.length < MAX_COUNT) {
    for (const row of table.rows) {
      row.insertCell();
    }

    updateButtons();
  }
});

removeColumnBtn.addEventListener('click', () => {
  if (table.rows[0]?.cells.length > MIN_COUNT) {
    for (const row of table.rows) {
      row.deleteCell(-1);
    }

    updateButtons();
  }
});

updateButtons();
