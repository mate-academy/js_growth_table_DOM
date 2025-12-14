'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = document.querySelector('.field');

function updateButtonsState() {
  const rows = field.querySelectorAll('tr');
  const rowCount = rows.length;
  const columnCount = rows[0].children.length;

  appendRow.disabled = rowCount >= 10;
  removeRow.disabled = rowCount <= 2;

  appendColumn.disabled = columnCount >= 10;
  removeColumn.disabled = columnCount <= 2;
}

appendRow.addEventListener('click', () => {
  const tr = field.querySelectorAll('tr');
  const numbersRows = tr.length; // кількість рядів
  const columns = field.querySelector('tr').children.length;

  if (numbersRows >= 10) {
    return;
  }

  const newTr = document.createElement('tr'); // створив тр

  for (let i = 0; i < columns; i++) {
    const newTd = document.createElement('td');

    newTr.appendChild(newTd);
  }

  field.appendChild(newTr);
  updateButtonsState();
});

removeRow.addEventListener('click', () => {
  const tr = field.querySelectorAll('tr');
  const numbersRows = tr.length; // кількість рядів

  if (numbersRows <= 2) {
    return;
  }

  const lastTr = tr.length - 1;

  tr[lastTr].remove();
  updateButtonsState();
});

appendColumn.addEventListener('click', () => {
  const rows = field.querySelectorAll('tr');
  const columns = rows[0].children.length;

  if (columns >= 10) {
    return;
  }

  rows.forEach((el) => {
    const td = document.createElement('td');

    el.appendChild(td);
  });
  updateButtonsState();
});

removeColumn.addEventListener('click', () => {
  const rows = field.querySelectorAll('tr');
  const columns = rows[0].children.length;

  if (columns <= 2) {
    return;
  }

  rows.forEach((el) => {
    const lastTd = el.children.length - 1;

    el.children[lastTd].remove();
  });
  updateButtonsState();
});
