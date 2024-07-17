'use strict';

const table = document.querySelector('table');

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');

const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const MAX_COUNT = 10;
const MIN_COUNT = 2;

function manageButtons() {
  appendRowButton.disabled = table.rows.length >= MAX_COUNT;
  removeRowButton.disabled = table.rows.length <= MIN_COUNT;

  appendColumnButton.disabled = table.rows[0].cells.length >= MAX_COUNT;
  removeColumnButton.disabled = table.rows[0].cells.length <= MIN_COUNT;
}

appendRowButton.addEventListener('click', () => {
  if (table.rows.length < MAX_COUNT) {
    const newRow = table.insertRow();

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      newRow.insertCell();
    }
  }

  manageButtons();
});

removeRowButton.addEventListener('click', () => {
  if (table.rows.length > MIN_COUNT) {
    table.deleteRow(-1);
  }

  manageButtons();
});

appendColumnButton.addEventListener('click', () => {
  if (table.rows[0].cells.length < MAX_COUNT) {
    Array.from(table.rows).forEach((row) => {
      row.insertCell();
    });
  }

  manageButtons();
});

removeColumnButton.addEventListener('click', () => {
  if (table.rows[0].cells.length > MIN_COUNT) {
    Array.from(table.rows).forEach((row) => {
      row.deleteCell(-1);
    });
  }

  manageButtons();
});
