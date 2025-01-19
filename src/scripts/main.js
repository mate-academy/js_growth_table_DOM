'use strict';

const table = document.querySelector('.field tbody');
const container = document.querySelector('.container');
const row = document.querySelector('tr');
const cell = document.querySelector('td');

const removeRowBtn = document.querySelector('.remove-row');
const appendRowBtn = document.querySelector('.append-row');
const removeColBtn = document.querySelector('.remove-column');
const appendColBtn = document.querySelector('.append-column');

const MIN_AMOUNT = 2;
const MAX_AMOUNT = 10;

container.addEventListener('click', (e) => {
  const rows = [...table.rows];
  const rowsAmount = rows.length;
  const colAmount = rows[0].cells.length;

  const appendRow = e.target.closest('.append-row');
  const removeRow = e.target.closest('.remove-row');
  const appendColumn = e.target.closest('.append-column');
  const removeColumn = e.target.closest('.remove-column');

  if (appendRow) {
    row.after(row.cloneNode(true));
    removeRowBtn.removeAttribute('disabled');

    if (rowsAmount + 1 === MAX_AMOUNT) {
      appendRowBtn.disabled = true;
    }
  } else if (removeRow) {
    table.lastElementChild.remove();
    appendRowBtn.removeAttribute('disabled');

    if (rowsAmount - 1 === MIN_AMOUNT) {
      removeRowBtn.disabled = true;
    }
  } else if (appendColumn) {
    rows.forEach((rowItem) => {
      rowItem.append(cell.cloneNode(true));
      removeColBtn.removeAttribute('disabled');
    });

    if (colAmount + 1 === MAX_AMOUNT) {
      appendColBtn.disabled = true;
    }
  } else if (removeColumn) {
    rows.forEach((rowItem) => {
      rowItem.lastElementChild.remove();
      appendColBtn.removeAttribute('disabled');
    });

    if (colAmount - 1 === MIN_AMOUNT) {
      removeColBtn.disabled = true;
    }
  }
});
