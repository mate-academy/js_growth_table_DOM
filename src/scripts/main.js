'use strict';

const MIN_ROWS_COLUMNS_COUNT = 2;
const MAX_ROWS_COLUMNS_COUNT = 10;

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

document.addEventListener('click', (e) => {
  const button = e.target.closest('button');
  const body = document.querySelector('table').tBodies[0];

  if (!button || !body) {
    return;
  }

  const isAppend = button.className.includes('append');
  const isRows = button.className.includes('row');

  if (isAppend) {
    insertNewValues(body, isRows);
  } else {
    removeValues(body, isRows);
  }

  updateButtons(body);
});

function updateButtons(body) {
  const rowCount = body.rows.length;
  const colCount = body.rows[0].cells.length;

  appendRowBtn.disabled = rowCount >= MAX_ROWS_COLUMNS_COUNT;
  removeRowBtn.disabled = rowCount <= MIN_ROWS_COLUMNS_COUNT;

  appendColBtn.disabled = colCount >= MAX_ROWS_COLUMNS_COUNT;
  removeColBtn.disabled = colCount <= MIN_ROWS_COLUMNS_COUNT;
}

function insertNewValues(body, isRows) {
  const rowCount = body.rows.length;
  const colCount = body.rows[0].cells.length;

  if (isRows) {
    if (rowCount === MAX_ROWS_COLUMNS_COUNT) {
      return;
    }

    const row = body.insertRow();

    for (let i = 0; i < colCount; i++) {
      row.insertCell(i);
    }

    return;
  }

  if (colCount === MAX_ROWS_COLUMNS_COUNT) {
    return;
  }

  for (const row of body.rows) {
    row.insertCell();
  }
}

function removeValues(body, isRows) {
  const rowCount = body.rows.length;
  const colCount = body.rows[0].cells.length;

  if (isRows) {
    if (rowCount === MIN_ROWS_COLUMNS_COUNT) {
      return;
    }

    body.deleteRow(rowCount - 1);

    return;
  }

  if (colCount === MIN_ROWS_COLUMNS_COUNT) {
    return;
  }

  for (const row of body.rows) {
    row.deleteCell(colCount - 1);
  }
}
