'use strict';

const buttons = document.querySelector('.container');
const table = document.querySelector('.field');
const tbody = document.querySelector('tbody');
const removeBt = document.querySelector('.remove-row');
const appendBt = document.querySelector('.append-row');
const appendColBt = document.querySelector('.append-column');
const removeColBt = document.querySelector('.remove-column');

buttons.addEventListener('click', (e) => {
  const target = e.target;

  // check what button is clicked //

  if (target.tagName === 'BUTTON') {
    const columnCount = table.rows[0]?.cells.length || 2;
    const rowCount = tbody.rows.length;

    if (target.matches('.append-row') && rowCount < 10) {
      // appending a new row to the table //

      const newRow = document.createElement('tr');

      // appending a new row to the table //

      for (let i = 0; i < columnCount; i++) {
        const newCell = document.createElement('td');

        newRow.appendChild(newCell);
      }

      tbody.appendChild(newRow);
    }

    // removing the last row from the table //

    if (target.matches('.remove-row') && rowCount > 2) {
      tbody.querySelector('tr:last-child').remove();
    }

    // check what button is clicked //

    if (target.matches('.append-column') && columnCount < 10) {
      // appending a new column to the table //

      for (let i = 0; i < table.rows.length; i++) {
        const newCell = document.createElement('td');
        const newRow = table.rows[i];

        newRow.appendChild(newCell);
      }
    }

    if (target.matches('.remove-column') && columnCount > 2) {
      // removing the last column from the table //

      for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].querySelector('td:last-child').remove();
      }
    }
  }

  // disabling and enabling the button if the table
  // has less than 2 ot more than 10 columns //

  const newColumnCount = table.rows[0]?.cells.length || 2;
  const newRowCount = tbody.rows.length;

  appendBt.disabled = newRowCount >= 10;
  removeBt.disabled = newRowCount <= 2;
  appendColBt.disabled = newColumnCount >= 10;
  removeColBt.disabled = newColumnCount <= 2;
});
