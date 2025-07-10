'use strict';

const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const MAX = 10;
const MIN = 2;

function isEnableButtons() {
  appendRow.disabled = tbody.rows.length >= MAX;
  removeRow.disabled = tbody.rows.length <= MIN;
  appendColumn.disabled = tbody.rows[0].cells.length >= MAX;
  removeColumn.disabled = tbody.rows[0].cells.length <= MIN;
}

isEnableButtons();

function growthTable(e) {
  const [action, type] = e.className.split(' ')[0].split('-');

  if (type === 'row' && action === 'append' && tbody.rows.length >= MAX) {
    return;
  }

  if (type === 'row' && action === 'remove' && tbody.rows.length <= MIN) {
    return;
  }

  if (
    type === 'column' &&
    action === 'append' &&
    tbody.rows[0].cells.length >= MAX
  ) {
    return;
  }

  if (
    type === 'column' &&
    action === 'remove' &&
    tbody.rows[0].cells.length <= MIN
  ) {
    return;
  }

  switch (action) {
    case 'append':
      if (type === 'row') {
        const newRow = tbody.rows[0].cloneNode(true);

        tbody.append(newRow);
      }

      if (type === 'column') {
        for (const row of tbody.rows) {
          row.append(document.createElement('td'));
        }
      }
      break;

    case 'remove':
      if (type === 'row') {
        tbody.rows[tbody.rows.length - 1]?.remove();
      }

      if (type === 'column') {
        for (const row of tbody.rows) {
          row.cells[row.cells.length - 1]?.remove();
        }
      }
      break;
  }

  isEnableButtons();
}

appendRow.addEventListener('click', (e) => growthTable(e.currentTarget));
removeRow.addEventListener('click', (e) => growthTable(e.currentTarget));
appendColumn.addEventListener('click', (e) => growthTable(e.currentTarget));
removeColumn.addEventListener('click', (e) => growthTable(e.currentTarget));
