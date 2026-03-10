'use strict';

const btnAppendRow = document.querySelector('.append-row');
const btnRemoveRow = document.querySelector('.remove-row');
const btnAppendColumn = document.querySelector('.append-column');
const btnRemoveColumn = document.querySelector('.remove-column');

function updateButtons() {
  const table = document.querySelector('tbody');
  const rowCount = table.rows.length;
  const columnCount = rowCount > 0 ? table.rows[0].cells.length : 0;

  btnAppendRow.disabled = rowCount >= 10;
  btnRemoveRow.disabled = rowCount <= 2;

  btnAppendColumn.disabled = columnCount >= 10;
  btnRemoveColumn.disabled = columnCount <= 2;
}

btnAppendRow.addEventListener('click', () => {
  const table = document.querySelector('tbody');

  if (table.rows.length < 10) {
    const value = table.rows[0].cells.length;
    const newRow = document.createElement('tr');

    for (let i = 0; i < value; i++) {
      const newTd = document.createElement('td');

      newRow.append(newTd);
    }
    table.append(newRow);
    updateButtons();
  }
});

btnAppendColumn.addEventListener('click', () => {
  const table = document.querySelector('tbody');
  const columnCount = table.rows[0].cells.length;

  if (columnCount < 10) {
    for (const row of table.rows) {
      const newTd = document.createElement('td');

      row.append(newTd);
    }

    updateButtons();
  }
});

btnRemoveRow.addEventListener('click', () => {
  const table = document.querySelector('tbody');

  if (table.rows.length > 2) {
    table.lastElementChild.remove();
    updateButtons();
  }
});

btnRemoveColumn.addEventListener('click', () => {
  const table = document.querySelector('tbody');
  const columnCount = table.rows[0].cells.length;

  if (columnCount > 2) {
    for (const row of table.rows) {
      row.lastElementChild.remove();
    }

    updateButtons();
  }
});

updateButtons();
