/* eslint-disable no-console */
'use strict';

const minRowOrCol = 2;
const maxRowOrCol = 10;

const table = document.querySelector('.field');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

appendRowBtn.addEventListener('click', () => {
  manageTable('addRow');
});

removeRowBtn.addEventListener('click', () => {
  manageTable('removeRow');
});

appendColBtn.addEventListener('click', () => {
  manageTable('addColumn');
});

removeColBtn.addEventListener('click', () => {
  manageTable('removeColumn');
});

function toggleDisabled(elem, curr, min, max) {
  const elemClass = elem.className;

  if (elemClass.includes('append-row') || elemClass.includes('append-column')) {
    if (curr >= max) {
      elem.setAttribute('disabled', true);
    } else {
      elem.removeAttribute('disabled');
    }
  }

  if (elemClass.includes('remove-row') || elemClass.includes('remove-column')) {
    if (curr <= min) {
      elem.setAttribute('disabled', true);
    } else {
      elem.removeAttribute('disabled');
    }
  }
}

function manageTable(action) {
  const actions = ['addRow', 'removeRow', 'addColumn', 'removeColumn'];

  if (!actions.includes(action)) {
    return;
  }

  const tbody = table.children[0];
  const tRows = [...tbody.rows];

  switch (action) {
    case 'addRow':
      tbody.appendChild(tbody.children[0].cloneNode(true));
      break;

    case 'removeRow':
      tbody.children[0].remove();
      break;

    case 'addColumn':
      tRows.forEach((row) => {
        row.appendChild(row.cells[0].cloneNode(true));
      });
      break;

    case 'removeColumn':
      tRows.forEach((row) => {
        const lastCell = row.cells[row.cells.length - 1];

        lastCell.remove();
      });
      break;

    default:
      return;
  }

  if (action === 'addColumn' || action === 'removeColumn') {
    const colsAmount = tRows[0].cells.length;

    toggleDisabled(appendColBtn, colsAmount, minRowOrCol, maxRowOrCol);
    toggleDisabled(removeColBtn, colsAmount, minRowOrCol, maxRowOrCol);
  }

  if (action === 'addRow' || action === 'removeRow') {
    const rowsAmount = tbody.rows.length;

    toggleDisabled(removeRowBtn, rowsAmount, minRowOrCol, maxRowOrCol);
    toggleDisabled(appendRowBtn, rowsAmount, minRowOrCol, maxRowOrCol);
  }
}
