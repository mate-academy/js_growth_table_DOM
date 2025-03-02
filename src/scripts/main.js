'use strict';

'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const MAX_ROWS = 10;
const MIN_ROWS = 2;
const MAX_COLUMNS = 10;
const MIN_COLUMNS = 2;

function updateButtons() {
  appendRow.disabled = table.rows.length >= MAX_ROWS;
  removeRow.disabled = table.rows.length <= MIN_ROWS;

  const columnsCount = table.rows[0]?.cells.length || 0;

  appendColumn.disabled = columnsCount >= MAX_COLUMNS;
  removeColumn.disabled = columnsCount <= MIN_COLUMNS;
}

appendRow.addEventListener('click', () => {
  const newRow = table.insertRow();

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    newRow.insertCell();
  }
  updateButtons();
});

removeRow.addEventListener('click', () => {
  table.deleteRow(-1);

  updateButtons();
});

appendColumn.addEventListener('click', () => {
  for (const row of table.rows) {
    row.insertCell();
  }

  updateButtons();
});

removeColumn.addEventListener('click', () => {
  for (const row of table.rows) {
    row.deleteCell(-1);
  }

  updateButtons();
});

updateButtons();
