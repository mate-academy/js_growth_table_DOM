'use strict';

const MAX_NUMBER = 10;
const MIN_NUMBER = 2;

const container = document.querySelector('.container');
const buttons = container.querySelectorAll('button');
const table = document.querySelector('table');

const appendRowButton = container.querySelector('.append-row');
const removeRowButton = container.querySelector('.remove-row');
const appendColumnButton = container.querySelector('.append-column');
const removeColumnButton = container.querySelector('.remove-column');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    const rows = document.querySelectorAll('tr');
    const columns = rows.length > 0 ? rows[0].querySelectorAll('td') : [];

    switch (true) {
      case e.target.classList.contains('append-row'):
        const newRow = document.createElement('tr');

        for (let i = 0; i < (rows[0].cells.length || 0); i++) {
          newRow.appendChild(document.createElement('td'));
        }

        table.appendChild(newRow);

        if (rows.length + 1 >= MAX_NUMBER) {
          appendRowButton.setAttribute('disabled', '');
        }

        removeRowButton.removeAttribute('disabled');
        break;

      case e.target.classList.contains('remove-row'):
        if (rows.length > MIN_NUMBER) {
          rows[rows.length - 1].remove();
        }

        const updatedRows = table.querySelectorAll('tr');

        if (updatedRows.length <= MIN_NUMBER) {
          removeRowButton.setAttribute('disabled', '');
        }

        appendRowButton.removeAttribute('disabled');
        break;

      case e.target.classList.contains('append-column'):
        rows.forEach((row) => {
          row.appendChild(document.createElement('td'));
        });

        if (columns.length + 1 >= MAX_NUMBER) {
          appendColumnButton.setAttribute('disabled', '');
        }

        removeColumnButton.removeAttribute('disabled');
        break;

      case e.target.classList.contains('remove-column'):
        rows.forEach((row) => {
          if (row.cells.length > MIN_NUMBER) {
            row.removeChild(row.lastChild);
          }
        });

        const updatedColumns =
          rows.length > 0 ? rows[0].querySelectorAll('td') : [];

        if (updatedColumns.length <= MIN_NUMBER) {
          removeColumnButton.setAttribute('disabled', '');
        }
        appendColumnButton.removeAttribute('disabled');
        break;
    }
  });
});
