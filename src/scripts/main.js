'use strict';

// write code here
const arrowColumnAdd = document.querySelector('.append-column');
const arrowColumnRemove = document.querySelector('.remove-column');
const arrowRowAdd = document.querySelector('.append-row');
const arrowRowRemove = document.querySelector('.remove-row');
const table = document.querySelector('.field');
const tableBody = table.querySelector('tbody');
const rowOrigin = tableBody.querySelector('tr');

arrowRowAdd.addEventListener('click', () => {
  const rowsCount = tableBody.querySelectorAll('tr').length;

  if (rowsCount >= 10) {
    updateButtons();

    return;
  }

  tableBody.appendChild(rowOrigin.cloneNode(true));
  updateButtons();
});

arrowRowRemove.addEventListener('click', () => {
  const rowsCount = tableBody.querySelectorAll('tr').length;

  if (rowsCount <= 2) {
    return;
  }

  const lastRow = tableBody.querySelector('tr:last-child');

  if (lastRow) {
    tableBody.removeChild(lastRow);
    updateButtons();
  }
});

arrowColumnAdd.addEventListener('click', () => {
  const rows = tableBody.querySelectorAll('tr');
  const columnsCount = rows[0]?.querySelectorAll('td').length ?? 0;

  if (columnsCount >= 10) {
    updateButtons();

    return;
  }

  rows.forEach((row) => {
    const newCell = document.createElement('td');

    row.appendChild(newCell);
  });
  updateButtons();
});

arrowColumnRemove.addEventListener('click', () => {
  const rows = tableBody.querySelectorAll('tr');
  const columnsCount = rows[0]?.querySelectorAll('td').length ?? 0;

  if (columnsCount <= 2) {
    return;
  }

  rows.forEach((row) => {
    const lastCell = row.querySelector('td:last-child');

    if (lastCell) {
      row.removeChild(lastCell);
    }
  });
  updateButtons();
});

function updateButtons() {
  const rowsCount = tableBody.querySelectorAll('tr').length;

  if (rowsCount >= 10) {
    arrowRowAdd.disabled = true;
  } else {
    arrowRowAdd.disabled = false;
  }

  if (rowsCount <= 2) {
    arrowRowRemove.disabled = true;
  } else {
    arrowRowRemove.disabled = false;
  }

  const columnsCount = tableBody
    .querySelector('tr')
    .querySelectorAll('td').length;

  if (columnsCount >= 10) {
    arrowColumnAdd.disabled = true;
  } else {
    arrowColumnAdd.disabled = false;
  }

  if (columnsCount <= 2) {
    arrowColumnRemove.disabled = true;
  } else {
    arrowColumnRemove.disabled = false;
  }
}
