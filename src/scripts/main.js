'use strict';

const MAX_ROWS_COLUMNS = 10;
const MIN_ROWS_COLUMNS = 2;
const tbody = document.querySelector('tbody');
const buttonAppendRow = document.querySelector('.append-row');
const buttonRemoveRow = document.querySelector('.remove-row');
const buttonAppendColumn = document.querySelector('.append-column');
const buttonRemoveColumn = document.querySelector('.remove-column');

function buttonCheck() {
  buttonAppendRow.disabled = tbody.rows.length >= MAX_ROWS_COLUMNS;
  buttonRemoveRow.disabled = tbody.rows.length <= MIN_ROWS_COLUMNS;
  buttonAppendColumn.disabled = tbody.rows[0].cells.length >= MAX_ROWS_COLUMNS;
  buttonRemoveColumn.disabled = tbody.rows[0].cells.length <= MIN_ROWS_COLUMNS;
}

buttonAppendRow.addEventListener('click', () => {
  if (tbody.rows.length < MAX_ROWS_COLUMNS) {
    const tr = tbody.rows[0].cloneNode(true);

    tbody.appendChild(tr);
  }
  buttonCheck();
});

buttonRemoveRow.addEventListener('click', () => {
  if (tbody.rows.length > MIN_ROWS_COLUMNS) {
    tbody.deleteRow(-1);
  }
  buttonCheck();
});

buttonAppendColumn.addEventListener('click', () => {
  if (tbody.rows[0].cells.length < MAX_ROWS_COLUMNS) {
    for (const row of tbody.rows) {
      row.insertCell();
    }
  }
  buttonCheck();
});

buttonRemoveColumn.addEventListener('click', () => {
  if (tbody.rows[0].cells.length > MIN_ROWS_COLUMNS) {
    for (const row of tbody.rows) {
      row.deleteCell(-1);
    }
  }
  buttonCheck();
});
