'use strict';

const buttons = [...document.querySelectorAll('button')];

const maxCount = 10;
const minCount = 2;

function updateButtonState() {
  const table = document.querySelector('table');

  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  const appendRow = buttons.find((b) => b.classList.contains('append-row'));
  const removeRow = buttons.find((b) => b.classList.contains('remove-row'));
  const appendCol = buttons.find((b) => b.classList.contains('append-column'));
  const removeCol = buttons.find((b) => b.classList.contains('remove-column'));

  appendRow.disabled = rowCount >= maxCount;
  removeRow.disabled = rowCount <= minCount;
  appendCol.disabled = columnCount >= maxCount;
  removeCol.disabled = columnCount <= minCount;
}

buttons.forEach((b) => {
  b.addEventListener('click', () => {
    const table = document.querySelector('table');
    const rows = [...document.querySelectorAll('table tr')];

    if (b.classList.contains('append-row')) {
      const newRow = table.insertRow();
      const columnCount = table.rows[0].cells.length;

      for (let i = 0; i < columnCount; i++) {
        newRow.insertCell();
      }
    }

    if (b.classList.contains('remove-row')) {
      table.deleteRow(-1);
    }

    if (b.classList.contains('append-column')) {
      rows.forEach((row) => {
        const newCell = document.createElement('td');

        row.append(newCell);
      });
    }

    if (b.classList.contains('remove-column')) {
      rows.forEach((row) => {
        const lastCellIndex = row.cells.length - 1;

        row.deleteCell(lastCellIndex);
      });
    }

    updateButtonState();
  });
});
