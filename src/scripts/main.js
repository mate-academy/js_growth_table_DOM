'use strict';

const MAX_SIZE = 10;
const MIN_SIZE = 2;

const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const table = document.querySelector('.field');

const currentRows = table.querySelectorAll('tr');

const addColumn = () => {
  if (currentRows[1].querySelectorAll('td').length < MAX_SIZE) {
    removeColumnButton.disabled = false;

    table.querySelectorAll('tr').forEach((row) => {
      const newTd = document.createElement('td');

      row.appendChild(newTd);
    });

    if (
      table.querySelectorAll('tr').item(0).querySelectorAll('td').length ===
      MAX_SIZE
    ) {
      addColumnButton.disabled = true;
    }
  }
};

const removeColumn = () => {
  if (currentRows[1].querySelectorAll('td').length > MIN_SIZE) {
    addColumnButton.disabled = false;

    table.querySelectorAll('tr').forEach((row) => {
      const lastTd = row.querySelector('td:last-child');

      row.removeChild(lastTd);
    });

    if (
      table.querySelectorAll('tr').item(0).querySelectorAll('td').length ===
      MIN_SIZE
    ) {
      removeColumnButton.disabled = true;
    }
  }
};

const addRow = () => {
  if (table.querySelectorAll('tr').length < MAX_SIZE) {
    removeRowButton.disabled = false;

    const newRow = table.insertRow();

    const cellCount = table.rows[0].cells.length;

    for (let i = 0; i < cellCount; i++) {
      newRow.insertCell();
    }

    if (table.querySelectorAll('tr').length === MAX_SIZE) {
      addRowButton.disabled = true;
    }
  }
};

const removeRow = () => {
  if (table.querySelectorAll('tr').length > MIN_SIZE) {
    addRowButton.disabled = false;
    table.deleteRow(-1);

    if (table.querySelectorAll('tr').length === MIN_SIZE) {
      removeRowButton.disabled = true;
    }
  }
};

addRowButton.addEventListener('click', addRow);
removeRowButton.addEventListener('click', removeRow);
addColumnButton.addEventListener('click', addColumn);
removeColumnButton.addEventListener('click', removeColumn);
