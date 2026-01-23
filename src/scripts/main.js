'use strict';

// write code here

const btnAppendRow = document.getElementsByClassName('append-row');
const btnRemoveRow = document.getElementsByClassName('remove-row');
const btnAppendColumn = document.getElementsByClassName('append-column');
const btnRemoveColumn = document.getElementsByClassName('remove-column');

const btns = document.getElementsByClassName('button');

for (const btn of btns) {
  btn.addEventListener('click', (e) => {
    const rowCount = document.querySelectorAll('tr');
    const columnCount = document.querySelector('tr').querySelectorAll('td');

    const rows = document.querySelectorAll('tr');

    if (e.target.className.includes('append-row') && rowCount.length < 10) {
      const newRow = document.createElement('tr');

      for (let i = 0; i < columnCount.length; i++) {
        newRow.append(document.createElement('td'));
      }
      document.querySelector('tbody').appendChild(newRow);

      if (rowCount.length >= 2) {
        btnRemoveRow[0].disabled = false;
      }

      if (rowCount.length >= 9) {
        btnAppendRow[0].disabled = true;
      }
    } else if (
      e.target.className.includes('remove-row') &&
      rowCount.length > 2
    ) {
      const deletRow = document.querySelector('tbody').lastElementChild;

      document.querySelector('tbody').removeChild(deletRow);

      if (rowCount.length <= 3) {
        btnRemoveRow[0].disabled = true;
      }

      if (rowCount.length <= 10) {
        btnAppendRow[0].disabled = false;
      }
    } else if (
      e.target.className.includes('append-column') &&
      columnCount.length < 10
    ) {
      for (const row of rows) {
        row.appendChild(document.createElement('td'));
      }

      if (columnCount.length >= 2) {
        btnRemoveColumn[0].disabled = false;
      }

      if (columnCount.length >= 9) {
        btnAppendColumn[0].disabled = true;
      }
    } else if (
      e.target.className.includes('remove-column') &&
      columnCount.length > 2
    ) {
      for (const row of rows) {
        row.removeChild(row.lastElementChild);
      }

      if (columnCount.length <= 3) {
        btnRemoveColumn[0].disabled = true;
      }

      if (columnCount.length <= 10) {
        btnAppendColumn[0].disabled = false;
      }
    }
  });
}
