'use strict';
// removing columns

const removeColumnButton = document.querySelector('.remove-column');
const appendRowButton = document.querySelector('.append-row');
const min = 2;
const max = 10;
let tableRows = [...document.querySelectorAll('tr')];

removeColumnButton.addEventListener('click', (e) => {
  tableRows.forEach((row) => {
    const lengthRow = row.children.length;
    const lastCell = row.querySelector('td:last-child');

    if (lengthRow > min) {
      lastCell.remove();
      removeColumnButton.disabled = false;
    }

    if (row.children.length === min) {
      removeColumnButton.disabled = true;
    }

    if (lengthRow === max) {
      appendColumnButton.disabled = false;
    }
  });
});
// adding columns

const appendColumnButton = document.querySelector('.append-column');

appendColumnButton.addEventListener('click', (e) => {
  tableRows.forEach((row) => {
    const cell = document.createElement('td');
    const lengthRow = row.children.length;
    const lastCell = row.querySelector('td:last-child');

    if (lengthRow > 1) {
      lastCell.insertAdjacentElement('beforebegin', cell);
      removeColumnButton.disabled = false;
    }

    if (lengthRow > 8) {
      appendColumnButton.disabled = true;
    }
  });
});
// removing rows

const removeRowButton = document.querySelector('.remove-row');

removeRowButton.addEventListener('click', (e) => {
  tableRows[0].remove();
  tableRows.shift();

  if (tableRows.length === min || tableRows.length === max) {
    removeRowButton.disabled = true;
  }

  if (tableRows.length < max) {
    appendRowButton.disabled = false;
  }
});

// adding rows

appendRowButton.addEventListener('click', (e) => {
  if (tableRows.length > 1 && tableRows.length < max) {
    removeRowButton.disabled = false;
  }

  const rows = tableRows[tableRows.length - 1];
  const newRow = rows.cloneNode(true);

  rows.after(newRow);
  tableRows = [...document.querySelectorAll('tr')];

  if (tableRows.length === max) {
    appendRowButton.disabled = true;
  }
});
