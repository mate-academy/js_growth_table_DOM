'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const growthTable = document.querySelector('tbody');

appendRowButton.addEventListener('click', (e) => {
  if (growthTable.rows.length >= 10) {
    return;
  }

  const newTr = document.createElement('tr');
  const rowLength = growthTable.rows[0].cells.length;

  for (let i = 0; i < rowLength; i++) {
    const newTd = document.createElement('td');

    newTr.append(newTd);
  }

  growthTable.append(newTr);
  checkLimits();
});

removeRowButton.addEventListener('click', (e) => {
  if (growthTable.rows.length <= 2) {
    return;
  }

  growthTable.lastElementChild.remove();

  checkLimits();
});

appendColumnButton.addEventListener('click', (e) => {
  if (growthTable.rows[0].cells.length >= 10) {
    return;
  }

  const allTableRows = growthTable.rows;

  for (const row of allTableRows) {
    const newTd = document.createElement('td');

    row.append(newTd);
  }

  checkLimits();
});

removeColumnButton.addEventListener('click', (e) => {
  if (growthTable.rows[0].cells.length <= 2) {
    return;
  }

  const allTableRows = growthTable.rows;

  for (const row of allTableRows) {
    row.lastElementChild.remove();
  }

  checkLimits();
});

function checkLimits() {
  const rowsCount = growthTable.rows.length;
  const colsCount = growthTable.rows[0].cells.length;

  appendRowButton.disabled = rowsCount >= 10;

  removeRowButton.disabled = rowsCount <= 2;

  appendColumnButton.disabled = colsCount >= 10;

  removeColumnButton.disabled = colsCount <= 2;
}

checkLimits();
