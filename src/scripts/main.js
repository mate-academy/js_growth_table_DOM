'use strict';

const buttons = document.querySelectorAll('.button');
const table = document.querySelector('.field') || null;

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const rows = [...table.rows];
    const rowsLength = rows.length;

    if (rowsLength < 10) {
      if (e.target.classList.contains('append-row')) {
        const cloneRow = rows[rowsLength - 1].cloneNode(true);

        table.querySelector('tbody').appendChild(cloneRow);
      }
    }

    if (e.target.classList.contains('remove-row')) {
      table.deleteRow(rowsLength - 1);
    }

    rows.forEach((row) => {
      if (e.target.classList.contains('append-column')) {
        if (row.children.length < 10) {
          const cell = row.children[0].cloneNode(true);

          row.appendChild(cell);
        }
      }

      if (e.target.classList.contains('remove-column')) {
        row.deleteCell(-1);
      }
    });
    updateButtons();
  });
});

function updateButtons() {
  const rows = [...table.rows];
  const rowsLength = rows.length;
  const colLength = rows[0].children.length;

  document.querySelector('.remove-column').disabled = colLength <= 2;
  document.querySelector('.append-column').disabled = colLength >= 10;

  document.querySelector('.remove-row').disabled = rowsLength <= 2;
  document.querySelector('.append-row').disabled = rowsLength >= 10;
}

updateButtons();
