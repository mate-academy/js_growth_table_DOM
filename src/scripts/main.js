'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('.field');
const rows = table.rows;

const buttons = {
  addRow: document.querySelector('.append-row'),
  removeRow: document.querySelector('.remove-row'),
  addColumn: document.querySelector('.append-column'),
  removeColumn: document.querySelector('.remove-column'),
};

container.addEventListener('click', (e) => {
  const tBody = table.querySelector('tbody');

  switch (e.target) {
    case buttons.addRow:
      tBody.append(rows[0].cloneNode(true));
      break;

    case buttons.removeRow:
      tBody.lastElementChild.remove();
      break;

    case buttons.addColumn:
      [...rows].forEach((row) => row.append(document.createElement('td')));
      break;

    case buttons.removeColumn:
      [...rows].forEach((row) => row.lastElementChild.remove());
  }

  updateButtonStates();
});

function updateButtonStates() {
  const rowCount = rows.length;
  const colCount = rows[0].childElementCount;

  buttons.addRow.disabled = rowCount >= 10;
  buttons.removeRow.disabled = rowCount <= 2;
  buttons.addColumn.disabled = colCount >= 10;
  buttons.removeColumn.disabled = colCount <= 2;
}
