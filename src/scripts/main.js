'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('table');
const tableBody = table.querySelector('tbody');

appendRow.addEventListener('click', () => {
  removeRow.disabled = false;
  const tbodyRowCount = table.tBodies[0].rows.length;
  const tbodyCellsCount = table.tBodies[0].rows[0].cells.length;
  const tr = document.createElement('tr');

  if (tableBody.rows.length === 9) {
    appendRow.disabled = true;
  }

  if (tbodyRowCount >= 10) {
    return;
  } else {
    for (let i = 0; i < tbodyCellsCount; i++) {
      const td = document.createElement('td');
      tr.appendChild(td);
    }
  }

  tableBody.appendChild(tr);
});

appendColumn.addEventListener('click', () => {
  removeColumn.disabled = false;
  const ColumnCellCount = table.tBodies[0].rows[0].cells.length;

  if (ColumnCellCount === 9) {
    appendColumn.disabled = true;
  }

  if (ColumnCellCount >= 10) {
    return;
  } else {
    const trs = document.querySelectorAll('table tr');

    for (let tr of trs) {
      const td = document.createElement('td');
      tr.appendChild(td);
    }
  }
});

removeRow.addEventListener('click', () => {
  appendRow.disabled = false;
  tableBody.deleteRow(-1);

  if (tableBody.rows.length <= 2) {
    removeRow.disabled = true;
  }
});

removeColumn.addEventListener('click', () => {
  appendColumn.disabled = false;
  const tbodyCellCount = table.tBodies[0].rows[0].cells.length;
  const row = tableBody.rows;

  if (tbodyCellCount <= 3) {
    removeColumn.disabled = true;
  }

  for (let i = 0; i < row.length; i++) {
    row[i].deleteCell(-1);
  }
});
