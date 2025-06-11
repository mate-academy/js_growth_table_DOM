'use strict';

const table = document.querySelector('.field');

function recalcSizes() {
  const rowsQuantity = table.querySelectorAll('tr').length;
  const firstRow = table.querySelector('tr');
  const columnsQuantity = firstRow ? firstRow.children.length : 0;

  return { rowsQuantity, columnsQuantity };
}

const buttons = document.querySelectorAll('.button');

function updateButtonsState() {
  const { rowsQuantity, columnsQuantity } = recalcSizes();

  buttons.forEach((button) => {
    if (button.classList.contains('append-row')) {
      button.disabled = rowsQuantity >= 10;
    } else if (button.classList.contains('remove-row')) {
      button.disabled = rowsQuantity <= 2;
    } else if (button.classList.contains('append-column')) {
      button.disabled = columnsQuantity >= 10;
    } else if (button.classList.contains('remove-column')) {
      button.disabled = columnsQuantity <= 2;
    }
  });
}

buttons.forEach((but) => {
  but.addEventListener('click', () => {
    let { rowsQuantity, columnsQuantity } = recalcSizes();
    const tr = document.querySelectorAll('table tr');

    if (but.classList.contains('append-row')) {
      if (rowsQuantity < 10) {
        const newRow = document.createElement('tr');

        for (let i = 0; i < columnsQuantity; i++) {
          const cell = document.createElement('td');

          newRow.appendChild(cell);
        }

        table.appendChild(newRow);
      }
    } else if (but.classList.contains('remove-row')) {
      if (rowsQuantity > 2) {
        const lastRow = tr[tr.length - 1];

        lastRow.remove();
      }
    } else if (but.classList.contains('append-column')) {
      if (columnsQuantity < 10) {
        tr.forEach((row) => {
          const cell = document.createElement('td');

          row.appendChild(cell);
        });
      }
    } else if (but.classList.contains('remove-column')) {
      if (columnsQuantity > 2) {
        tr.forEach((row) => {
          row.lastElementChild?.remove();
        });
      }
    }
    updateButtonsState();
  });
});

updateButtonsState();
