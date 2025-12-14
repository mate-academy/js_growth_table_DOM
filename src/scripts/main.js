'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = document.querySelector('.field');

appendRow.addEventListener('click', () => {
  const tr = field.querySelectorAll('tr');
  const numbersRows = tr.length; // кількість рядів
  const columns = field.querySelector('tr').children.length;

  if (numbersRows >= 10) {
    appendRow.disabled = false;

    return;
  }

  const newTr = document.createElement('tr'); // створив тр

  for (let i = 0; i < columns; i++) {
    const newTd = document.createElement('td');

    newTr.appendChild(newTd);
  }

  field.appendChild(newTr);
});

removeRow.addEventListener('click', () => {
  const tr = field.querySelectorAll('tr');
  const numbersRows = tr.length; // кількість рядів

  if (numbersRows <= 2) {
    removeRow.disabled = false;

    return;
  }

  const lastTr = tr.length - 1;

  tr[lastTr].remove();
});

appendColumn.addEventListener('click', () => {
  const rows = field.querySelectorAll('tr');
  const columns = rows[0].children.length;

  if (columns >= 10) {
    appendColumn.disabled = false;

    return;
  }

  rows.forEach((el) => {
    const td = document.createElement('td');

    el.appendChild(td);
  });
});

removeColumn.addEventListener('click', () => {
  const rows = field.querySelectorAll('tr');
  const columns = rows[0].children.length;

  if (columns <= 2) {
    removeColumn.disabled = false;

    return;
  }

  rows.forEach((el) => {
    const lastTd = el.children.length - 1;

    el.children[lastTd].remove();
  });
});
