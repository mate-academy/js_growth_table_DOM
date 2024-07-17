'use strict';

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const table = document.querySelector('table tbody');
    const rows = document.querySelectorAll('tr');
    const row = document.querySelector('tr');
    const numberOfCells = row.querySelectorAll('td').length;
    const numberOfRows = document.querySelectorAll('tr').length;
    const newRow = document.createElement('tr');
    const buttonAppendRow = document.querySelector('.append-row');
    const buttonRemoveRow = document.querySelector('.remove-row');
    const buttonAppendCol = document.querySelector('.append-column');
    const buttonRemoveCol = document.querySelector('.remove-column');

    if (button.className === 'append-row button') {
      table.appendChild(newRow);

      for (let count = 1; count <= numberOfCells; count++) {
        const newCell = document.createElement('td');

        newRow.appendChild(newCell);
      }

      if (numberOfRows + 1 >= 10) {
        button.disabled = true;
      }

      if (numberOfRows >= 2 && buttonRemoveRow.hasAttribute('disabled')) {
        buttonRemoveRow.removeAttribute('disabled');
      }
    }

    if (button.className === 'remove-row button') {
      table.removeChild(table.lastElementChild);

      if (numberOfRows <= 3) {
        button.disabled = true;
      }

      if (numberOfRows <= 10 && buttonAppendRow.hasAttribute('disabled')) {
        buttonAppendRow.removeAttribute('disabled');
      }
    }

    if (button.className === 'append-column button') {
      rows.forEach((currentRow) => {
        const newCell = document.createElement('td');

        currentRow.appendChild(newCell);

        if (numberOfCells + 1 >= 10) {
          button.disabled = true;
        }

        if (numberOfCells >= 2 && buttonRemoveCol.hasAttribute('disabled')) {
          buttonRemoveCol.removeAttribute('disabled');
        }
      });
    }

    if (button.className === 'remove-column button') {
      rows.forEach((currentRow) => {
        currentRow.removeChild(currentRow.lastElementChild);
      });

      if (numberOfCells <= 3) {
        button.disabled = true;
      }

      if (numberOfCells <= 10 && buttonAppendCol.hasAttribute('disabled')) {
        buttonAppendCol.removeAttribute('disabled');
      }
    }
  });
});
