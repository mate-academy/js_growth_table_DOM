'use strict';

// write code here

const container = document.querySelector('.container');

function toggleButtons() {
  const table = document.querySelector('.field');
  const rows = table.rows.length;
  const columns = table.rows[0].cells.length;

  const removeRowButton = document.querySelector('.remove-row');
  const removeColumnButton = document.querySelector('.remove-column');
  const appendRowButton = document.querySelector('.append-row');
  const appendColumnButton = document.querySelector('.append-column');

  removeRowButton.disabled = rows <= 2;
  appendRowButton.disabled = rows >= 10;

  removeColumnButton.disabled = columns <= 2;
  appendColumnButton.disabled = columns >= 10;
}

container.addEventListener('click', (e) => {
  const table = document.querySelector('.field');
  const rows = table.rows.length;
  const columns = table.rows[0].cells.length;

  if (e.target.classList.contains('append-row')) {
    if (rows < 10) {
      const newRow = table.insertRow();

      for (let i = 0; i < columns; i++) {
        newRow.insertCell(i).textContent = '';
      }
    }
  }

  if (e.target.classList.contains('remove-row')) {
    if (rows > 2) {
      table.deleteRow(rows - 1);
    }
  }

  if (e.target.classList.contains('append-column')) {
    if (columns < 10) {
      for (let i = 0; i < rows; i++) {
        table.rows[i].insertCell().textContent = '';
      }
    }
  }

  if (e.target.classList.contains('remove-column')) {
    if (columns > 2) {
      for (let i = 0; i < rows; i++) {
        table.rows[i].deleteCell(-1);
      }
    }
  }

  toggleButtons();
});

toggleButtons();
