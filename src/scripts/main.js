'use strict';

const table = document.querySelector('tbody');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const firstRow = table.querySelector('tr');
let currentRow = table.rows.length;
let currentColumn = firstRow.cells.length;

function updateButtons(button) {
  appendRow.disabled = currentRow >= 10;
  removeRow.disabled = currentRow <= 2;
  appendColumn.disabled = currentColumn >= 10;
  removeColumn.disabled = currentColumn <= 2;
}

updateButtons();

appendRow.addEventListener('click', () => {
  if (currentRow < 10) {
    const tr = document.createElement('tr');

    for (let i = 0; i < currentColumn; i++) {
      const td = document.createElement('td');

      tr.appendChild(td);
    }
    table.appendChild(tr);
    currentRow++;
  }
  updateButtons();
});

removeRow.addEventListener('click', () => {
  if (currentRow > 2) {
    table.deleteRow(-1);
    currentRow--;
  }
  updateButtons();
});

appendColumn.addEventListener('click', () => {
  if (currentColumn < 10) {
    Array.from(table.rows).forEach((row) => {
      const cell = document.createElement('td');

      row.appendChild(cell);
    });
    currentColumn++;
  }
  updateButtons();
});

removeColumn.addEventListener('click', () => {
  if (currentColumn > 2) {
    Array.from(table.rows).forEach((row) => {
      row.deleteCell(-1);
    });
    currentColumn--;
  }
  updateButtons();
});
