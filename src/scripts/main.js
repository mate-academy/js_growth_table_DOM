'use strict';

// write code here
const container = document.querySelector('.container');

container.addEventListener('click', function (e) {
  const table = document.querySelector('.field');
  let rows = table.rows.length;

  if (e.target.className === 'append-row button') {
    const newRow = table.insertRow();

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      newRow.insertCell(i).textContent = '';
    }
    rows += 1;
  }

  if (e.target.className === 'remove-row button') {
    if (rows > 0) {
      table.deleteRow(rows - 1);
      rows -= 1;
    }
  }

  if (e.target.className === 'append-column button') {
    for (let i = 0; i < rows; i++) {
      table.rows[i].insertCell().textContent = '';
    }
  }

  if (e.target.className === 'remove-column button') {
    for (let i = 0; i < rows; i++) {
      table.rows[i].deleteCell(-1);
    }
  }
});
