'use strict';

const container = document.querySelector('.container');

function toggleButtons() {
  const table = document.querySelector('.field');
  const rows = table.rows.length;
  const columns = table.rows[0].cells.length;

  const removeRowButton = document.querySelector('.remove-row.button');
  const removeColumnButton = document.querySelector('.remove-column.button');
  const appendRowButton = document.querySelector('.append-row.button');
  const appendColumnButton = document.querySelector('.append-column.button');

  removeRowButton.disabled = rows <= 2;
  appendRowButton.disabled = rows >= 10;
  removeColumnButton.disabled = columns <= 2;
  appendColumnButton.disabled = columns >= 10;

  removeRowButton.style.display = rows <= 2 ? 'none' : '';
  appendRowButton.style.display = rows >= 10 ? 'none' : '';
  removeColumnButton.style.display = columns <= 2 ? 'none' : '';
  appendColumnButton.style.display = columns >= 10 ? 'none' : '';
}

container.addEventListener('click', function (e) {
  const table = document.querySelector('.field');
  let rows = table.rows.length;
  let columns = table.rows[0].cells.length;

  if (e.target.matches('.append-row.button')) {
    if (rows < 10) {
      const newRow = table.insertRow();

      for (let i = 0; i < columns; i++) {
        newRow.insertCell(i).textContent = '';
      }
      rows += 1;
    }
  }

  if (e.target.matches('.remove-row.button')) {
    if (rows > 2) {
      table.deleteRow(rows - 1);
      rows -= 1;
    }
  }

  if (e.target.matches('.append-column.button')) {
    if (columns < 10) {
      for (let i = 0; i < rows; i++) {
        table.rows[i].insertCell().textContent = '';
      }
      columns += 1;
    }
  }

  if (e.target.matches('.remove-column.button')) {
    if (columns > 2) {
      for (let i = 0; i < rows; i++) {
        table.rows[i].deleteCell(-1);
      }
      columns -= 1;
    }
  }

  toggleButtons();
});

toggleButtons();
