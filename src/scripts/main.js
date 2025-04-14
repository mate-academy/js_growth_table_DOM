'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  const field = document.querySelector('tbody');
  const rows = [...field.querySelectorAll('tr')];

  const newRow = rows[0].cloneNode(true);

  rows.push(newRow);

  if (rows.length >= 10) {
    appendRow.disabled = true;
  }

  rows.forEach((row) => field.insertAdjacentElement('afterbegin', row));

  if (rows.length > 2) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  const field = document.querySelector('.field');
  const rows = [...field.querySelectorAll('tr')];

  rows[0].remove();
  rows.shift();

  if (rows.length <= 2) {
    removeRow.disabled = true;
  }

  if (rows.length < 10) {
    appendRow.disabled = false;
  }
});

appendColumn.addEventListener('click', () => {
  const field = document.querySelector('.field');
  const rows = [...field.querySelectorAll('tr')];

  rows.forEach((column) => {
    const cells = [...column.querySelectorAll('td')];
    const newCell = cells[0].cloneNode();

    column.append(newCell);
    cells.push(newCell);

    if (cells.length >= 10) {
      appendColumn.disabled = true;
    }
  });

  const quantityColumns = rows[0].querySelectorAll('td').length;

  if (quantityColumns > 2) {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', () => {
  const field = document.querySelector('.field');
  const rows = [...field.querySelectorAll('tr')];

  rows.forEach((row) => {
    const cells = [...row.querySelectorAll('td')];

    cells[0].remove();
    cells.shift();

    if (cells.length <= 2) {
      removeColumn.disabled = true;
    }
  });

  const quantityColumns = rows[0].querySelectorAll('td').length;

  if (quantityColumns < 10) {
    appendColumn.disabled = false;
  }
});
