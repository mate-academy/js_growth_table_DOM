'use strict';

const table = document.querySelector('.field');

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

appendRowButton.addEventListener('click', (button) => {
  if (table.rows.length < 10) {
    const row = document.createElement('tr');

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      const cell = document.createElement('td');

      row.appendChild(cell);
    }
    table.tBodies[0].appendChild(row);
  }

  if (table.rows.length === 10) {
    button.target.disabled = true;
  } else {
    removeRowButton.disabled = false;
  }
});

removeRowButton.addEventListener('click', (button) => {
  if (table.rows.length > 2) {
    table.tBodies[0].deleteRow(-1);
  }

  if (table.rows.length === 2) {
    button.target.disabled = true;
  } else {
    appendRowButton.disabled = false;
  }
});

appendColumnButton.addEventListener('click', (button) => {
  if (table.rows[0].cells.length < 10) {
    const rows = Array.from(table.tBodies[0].querySelectorAll('tr'));

    rows.forEach((row) => {
      const cell = document.createElement('td');

      row.appendChild(cell);
    });
  }

  if (table.rows[0].cells.length === 10) {
    button.target.disabled = true;
  } else {
    removeColumnButton.disabled = false;
  }
});

removeColumnButton.addEventListener('click', (button) => {
  if (table.rows[0].cells.length > 2) {
    const rows = Array.from(table.tBodies[0].querySelectorAll('tr'));

    rows.forEach((row) => {
      row.deleteCell(-1);
    });
  }

  if (table.rows[0].cells.length === 2) {
    button.target.disabled = true;
  } else {
    appendColumnButton.disabled = false;
  }
});
