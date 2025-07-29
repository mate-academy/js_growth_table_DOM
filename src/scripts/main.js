'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = document.querySelector('.field').children[0];

appendRow.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  if (rows.length === 9) {
    appendRow.disabled = true;
  }

  if (rows.length >= 10) {
    appendRow.disabled = true;

    return;
  }

  const row = document.querySelector('tr');
  const copiedRow = row.cloneNode(true);

  field.appendChild(copiedRow);
});

removeRow.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  if (rows.length === 3) {
    removeRow.disabled = true;
  }

  if (rows.length <= 2) {
    return;
  }

  const row = document.querySelector('tr');

  row.remove();
});

appendColumn.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  rows.forEach((row) => {
    if (row.children.length === 9) {
      appendColumn.disabled = true;
    }

    if (row.children.length >= 10) {
      appendColumn.disabled = true;

      return;
    }

    const td = document.createElement('td');

    row.appendChild(td);
  });
});

removeColumn.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  rows.forEach((row) => {
    if (row.children.length === 3) {
      removeColumn.disabled = true;
    }

    if (row.children.length <= 2) {
      // removeColumn.disabled = true;

      return;
    }

    const td = row.querySelector('td');

    row.removeChild(td);
  });
});

// i need to add or remove column/row and then move the buttons
// to delete the row you need to remove tr, to remove the column
// you need to delete the firstChild of each tr
// then need to calculate the position of the elemensts
