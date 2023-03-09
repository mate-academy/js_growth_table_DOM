'use strict';

const table = document.querySelector('.field');
const buttons = document
  .querySelectorAll('.remove-row, .append-row, .append-column, .remove-column');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const lastRowIndex = table.rows.length - 1;
    const lastColumnIndex = table.rows[0].cells.length - 1;

    if (button.classList.contains('remove-row') && lastRowIndex >= 2) {
      table.deleteRow(lastRowIndex);
    } else if (button.classList.contains('append-row') && lastRowIndex <= 8) {
      const newRow = table.insertRow(-1);

      newRow.innerHTML = table.rows[lastRowIndex].innerHTML;
    } else if (button.classList.contains('append-column')
    && lastColumnIndex <= 8) {
      [...table.rows].forEach(row => row.insertCell(-1));
    } else if (button.classList.contains('remove-column')
    && lastColumnIndex >= 2) {
      [...table.rows].forEach(row => row.deleteCell(lastColumnIndex));
    }
  });
});
