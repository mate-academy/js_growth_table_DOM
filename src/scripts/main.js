'use strict';

const mainTable = document.querySelector('.field');
const tbody = mainTable.querySelector('tbody');

const addColumnButton = document.querySelector('.append-column');
const addRowButton = document.querySelector('.append-row');
const removeColumnButton = document.querySelector('.remove-column');
const removeRowButton = document.querySelector('.remove-row');

addColumnButton.addEventListener('click', addColumn);
addRowButton.addEventListener('click', addRow);
removeColumnButton.addEventListener('click', removeColumn);
removeRowButton.addEventListener('click', removeRow);

function addColumn(evenD) {
  const rows = [...mainTable.rows];

  if (rows[0].cells.length >= 9) {
    this.disabled = 'true';
  }

  rows.forEach((row) => {
    const newCell = document.createElement('td');

    row.append(newCell);
  });

  if (removeColumnButton.disabled) {
    removeColumnButton.removeAttribute('disabled');
  }
}

function removeColumn(evenD) {
  const rows = [...mainTable.rows];

  if (rows[0].cells.length <= 3) {
    this.disabled = 'true';
  }

  rows.forEach((row) => {
    row.lastElementChild.remove();
  });

  if (addColumnButton.disabled) {
    addColumnButton.removeAttribute('disabled');
  }
}

function addRow(evenD) {
  const rows = [...mainTable.rows];

  if (rows.length >= 9) {
    this.disabled = 'true';
  }

  const newRow = document.createElement('tr');

  [...rows[0].cells].forEach(() => {
    const newCell = document.createElement('td');

    newRow.append(newCell);
  });

  tbody.append(newRow);

  if (removeRowButton.disabled) {
    removeRowButton.removeAttribute('disabled');
  }
}

function removeRow(evenD) {
  const rows = [...mainTable.rows];

  if (rows.length <= 3) {
    this.disabled = 'true';
  }

  rows[rows.length - 1].remove();

  if (addRowButton.disabled) {
    addRowButton.removeAttribute('disabled');
  }
}
