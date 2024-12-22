'use strict';

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');
const field = document.querySelector('.field');

appendRowBtn.addEventListener('click', appendRow);
removeRowBtn.addEventListener('click', removeRow);
appendColumnBtn.addEventListener('click', appendColumn);
removeColumnBtn.addEventListener('click', removeColumn);

function updateRowBtns() {
  const rowCount = field.querySelectorAll('tr').length;

  appendRowBtn.disabled = rowCount === 10;
  removeRowBtn.disabled = rowCount === 2;
}

function updateColomnBtns() {
  const columnCount = field.querySelector('tr').children.length;

  appendColumnBtn.disabled = columnCount === 10;
  removeColumnBtn.disabled = columnCount === 2;
}

function appendRow() {
  if (field.querySelectorAll('tr').length < 10) {
    const row = document.createElement('tr');
    const columnCount = field.querySelector('tr').children.length;

    row.innerHTML = `<td></td>`.repeat(columnCount);
    field.append(row);
  }

  updateRowBtns();
}

function removeRow() {
  const row = field.querySelectorAll('tr');

  if (row.length > 2) {
    row[row.length - 1].remove();
  }

  updateRowBtns();
}

function appendColumn() {
  if (field.querySelectorAll('tr')[0].children.length < 10) {
    field.querySelectorAll('tr').forEach((row) => {
      const colomn = document.createElement('td');

      row.append(colomn);
    });
  }
  updateColomnBtns();
}

function removeColumn() {
  const column = field.querySelector('tr').children;

  if (column.length > 2) {
    field.querySelectorAll('tr').forEach((row) => {
      row.lastElementChild.remove();
    });
  }

  updateColomnBtns();
}
