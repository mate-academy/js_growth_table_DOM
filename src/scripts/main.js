'use strict';

const container = document.querySelector('.container');
const table = container.querySelector('table');

container.addEventListener('click', function (e) {
  if (e.target.classList.contains('append-row') && table.rows.length < 10) {
    const newRow = table.insertRow(-1);
    const countCell = table.rows[0].cells.length;

    for (let i = 0; i < countCell; i++) {
      newRow.insertCell(-1);
    }
  }

  if (e.target.classList.contains('remove-row') && table.rows.length > 2) {
    table.deleteRow(-1);
  }

  if (
    e.target.classList.contains('append-column') &&
    table.rows[0].cells.length < 10
  ) {
    for (const row of table.rows) {
      row.insertCell(-1);
    }
  }

  if (
    e.target.classList.contains('remove-column') &&
    table.rows[0].cells.length > 2
  ) {
    for (const row of table.rows) {
      row.deleteCell(-1);
    }
  }

  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  // Керуємо станом disabled:
  container.querySelector('.append-row').disabled = rowCount >= 10;
  container.querySelector('.remove-row').disabled = rowCount <= 2;

  container.querySelector('.append-column').disabled = colCount >= 10;
  container.querySelector('.remove-column').disabled = colCount <= 2;
});
