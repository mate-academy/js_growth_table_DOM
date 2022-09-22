'use strict';

// write code here
const fieldBody = document.querySelector('.field').tBodies[0];
const fieldRows = fieldBody.rows;
const fieldCells = fieldBody.rows[0].cells;

document.addEventListener('click', (e) => {
  const button = e.target.closest('.button');

  if (!button) {
    return;
  }

  if (button.classList.contains('append-row')) {
    if (fieldRows.length < 10) {
      const row = fieldRows[0].cloneNode(true);

      fieldBody.insertAdjacentElement('beforeend', row);
      document.querySelector('.remove-row').disabled = false;

      if (fieldRows.length === 10) {
        button.disabled = true;
      }
    }
  }

  if (button.classList.contains('remove-row')) {
    if (fieldRows.length > 2) {
      fieldRows[fieldRows.length - 1].remove();
      document.querySelector('.append-row').disabled = false;

      if (fieldRows.length === 2) {
        button.disabled = true;
      }
    }
  }

  if (button.classList.contains('append-column')) {
    if (fieldCells.length < 10) {
      [...fieldRows].forEach((fieldRow) => {
        fieldRow.insertAdjacentHTML('beforeend', '<td></td>');
      });

      document.querySelector('.remove-column').disabled = false;

      if (fieldCells.length === 10) {
        button.disabled = true;
      }
    }
  }

  if (button.classList.contains('remove-column')) {
    if (fieldCells.length > 2) {
      [...fieldRows].forEach(({ cells }) => {
        cells[cells.length - 1].remove();
      });

      document.querySelector('.append-column').disabled = false;

      if (fieldCells.length === 2) {
        button.disabled = true;
      }
    }
  }
});
