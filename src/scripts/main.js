'use strict';

const container = document.querySelector('.container');

function toggleButtons() {
  const table = document.querySelector('.field');
  const rows = table.rows.length;
  const columns = table.rows[0].cells.length;

  const removeRowButton = document.querySelector('.remove-row.button');
  const removeColumnButton = document.querySelector('.remove-column.button');

  removeRowButton.disabled = rows <= 1;
  removeColumnButton.disabled = columns <= 1;
}

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
    if (rows > 1) {
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
    const columns = table.rows[0].cells.length;

    if (columns > 1) {
      for (let i = 0; i < rows; i++) {
        table.rows[i].deleteCell(-1);
      }
    }
  }

  toggleButtons();
});

toggleButtons();
