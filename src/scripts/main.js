'use strict';

const minRowsAndCols = 2;
const maxRowsAndCols = 10;
const table = document.querySelector('table');
const tBody = table.tBodies[0];
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

document.addEventListener('click', (e) => {
  const btn = e.target.closest('button');

  if (!btn) {
    return;
  }

  if (btn.matches('.append-row')) {
    if (tBody.rows.length < maxRowsAndCols) {
      appendRow(tBody);
    }
  } else if (btn.matches('.remove-row')) {
    if (tBody.rows.length > minRowsAndCols) {
      deleteRow(tBody);
    }
  } else if (btn.matches('.append-column')) {
    if (tBody.rows[0].cells.length < maxRowsAndCols) {
      appendColumn(tBody);
    }
  } else if (btn.matches('.remove-column')) {
    if (tBody.rows[0].cells.length > minRowsAndCols) {
      deleteColumn(tBody);
    }
  }

  updateButtons();
});

function appendRow(table1) {
  const row = document.querySelector('tr');
  const newRow = row.cloneNode(true);

  table1.append(newRow);
}

function deleteRow(table1) {
  table1.deleteRow(table1.rows.length - 1);
}

function appendColumn(table1) {
  const tableRows = table1.rows;

  for (const row of tableRows) {
    const td = document.createElement('td');

    row.append(td);
  }
}

function deleteColumn(table1) {
  const tableRows = table1.rows;

  for (const row of tableRows) {
    row.deleteCell(row.cells.length - 1);
  }
}

function updateButtons() {
  appendRowBtn.disabled = tBody.rows.length >= maxRowsAndCols;
  removeRowBtn.disabled = tBody.rows.length <= minRowsAndCols;
  appendColumnBtn.disabled = tBody.rows[0].cells.length >= maxRowsAndCols;
  removeColumnBtn.disabled = tBody.rows[0].cells.length <= minRowsAndCols;
}
