'use strict';

const field = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();

  const quantityOfRows = field.querySelectorAll('tr').length;

  if (quantityOfRows < 10) {
    const newRow = field.querySelector('tr').cloneNode(true);

    field.append(newRow);
  }

  if (field.querySelectorAll('tr').length >= 10) {
    appendRow.style.display = 'none';
  }

  if (field.querySelectorAll('tr').length > 2) {
    removeRow.style.display = 'block';
  }
});

removeRow.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();

  const rows = field.querySelectorAll('tr');
  const quantityOfRows = rows.length;

  if (quantityOfRows > 2) {
    rows[0].remove();
  }

  if (field.querySelectorAll('tr').length < 10) {
    appendRow.style.display = 'block';
  }

  if (field.querySelectorAll('tr').length <= 2) {
    removeRow.style.display = 'none';
  }
});

appendColumn.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();

  const allRows = field.querySelectorAll('tr');
  const quantityOfColumns = field
    .querySelector('tr')
    .querySelectorAll('td').length;

  allRows.forEach((tr) => {
    if (quantityOfColumns < 10) {
      const cell = document.querySelector('td').cloneNode(true);

      tr.appendChild(cell);
    }
  });

  if (field.querySelector('tr').querySelectorAll('td').length >= 10) {
    appendColumn.style.display = 'none';
  }

  if (field.querySelector('tr').querySelectorAll('td').length > 2) {
    removeColumn.style.display = 'block';
  }
});

removeColumn.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();

  const allFirstTdRows = document.querySelectorAll('.field tr>td:nth-child(1)');
  const quantityOfColumns = field
    .querySelector('tr')
    .querySelectorAll('td').length;

  allFirstTdRows.forEach((item) => {
    if (quantityOfColumns > 2) {
      item.remove();
    }
  });

  if (field.querySelector('tr').querySelectorAll('td').length < 10) {
    appendColumn.style.display = 'block';
  }

  if (field.querySelector('tr').querySelectorAll('td').length <= 2) {
    removeColumn.style.display = 'none';
  }
});
