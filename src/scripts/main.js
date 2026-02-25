'use strict';

const buttons = document.querySelector('.container');
const table = document.querySelector('.field');

buttons.addEventListener('click', (e) => {
  const btn = e.target;

  if (btn.classList.contains('append-column')) {
    Array.from(table.rows).forEach((row) => row.insertCell(-1));
    countCell();
  }

  if (btn.classList.contains('remove-column')) {
    Array.from(table.rows).forEach((row) => row.deleteCell(-1));
    countCell();
  }

  if (btn.classList.contains('append-row')) {
    const cellsCount = table.rows[0].cells.length;
    const newRow = table.insertRow(-1);

    for (let i = 0; i < cellsCount; i++) {
      newRow.insertCell(-1);
    }

    countCell();
  }

  if (btn.classList.contains('remove-row')) {
    table.deleteRow(-1);
    countCell();
  }

  function countCell() {
    const rowCount = table.rows.length;
    const colCount = table.rows[0].cells.length;

    document.querySelector('.append-row').disabled = rowCount >= 10;
    document.querySelector('.remove-row').disabled = rowCount <= 2;
    document.querySelector('.append-column').disabled = colCount >= 10;
    document.querySelector('.remove-column').disabled = colCount <= 2;
  }
});
