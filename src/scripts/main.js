'use strict';

const table = document.querySelector('.field');

checkTable(table);

document.addEventListener('click', function (e) {
  const btn = e.target.closest('.button');

  if (btn === null) {
    return;
  }

  const rows = table.querySelectorAll('tr');

  if (rows.length === 0) {
    return;
  }

  switch (btn.classList[0]) {
    case 'append-row':
      addRow(table, rows);
      break;
    case 'remove-row':
      removeRow(rows);
      break;
    case 'append-column':
      addColumn(rows);
      break;
    case 'remove-column':
      removeColumn(rows);
      break;
  }
  checkTable(table);
});

function addColumn(rows) {
  const rowsArr = [...rows];

  rowsArr.forEach((el) => {
    const newColumn = document.createElement('td');

    el.append(newColumn);
  });
}

function removeColumn(rows) {
  const rowsArr = [...rows];

  rowsArr.forEach((el) => {
    if (el.cells.length > 0) {
      el.cells[el.cells.length - 1].remove();
    }
  });
}

function addRow(tableTarget, rows) {
  const clonedRow = rows[0].cloneNode(true);

  tableTarget.querySelector('tbody').append(clonedRow);
}

function removeRow(rows) {
  if (rows.length > 0) {
    rows[rows.length - 1].remove();
  }
}

function checkTable(tableTarget) {
  const rows = tableTarget.querySelectorAll('tr').length;
  const cols =
    rows > 0 ? tableTarget.querySelectorAll('tr')[0].cells.length : 0;
  const btnAddCol = document.querySelector('.append-column');
  const btnRemCol = document.querySelector('.remove-column');
  const btnRemRow = document.querySelector('.remove-row');
  const btnAddRow = document.querySelector('.append-row');

  if (rows >= 10) {
    btnAddRow.disabled = true;
  } else {
    btnAddRow.disabled = false;
  }

  if (rows <= 2) {
    btnRemRow.disabled = true;
  } else {
    btnRemRow.disabled = false;
  }

  if (cols >= 10) {
    btnAddCol.disabled = true;
  } else {
    btnAddCol.disabled = false;
  }

  if (cols <= 2) {
    btnRemCol.disabled = true;
  } else {
    btnRemCol.disabled = false;
  }
}
