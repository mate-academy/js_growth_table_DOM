'use strict';

const field = document.querySelector('.field tbody');
const tr = field.querySelector('tr');
const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  const newRow = document.createElement('tr');

  if (field.rows.length < 10) {
    for (let i = 0; i < tr.children.length; i++) {
      const cell = document.createElement('td');

      newRow.appendChild(cell);
    }
    removeRow.disabled = false;
    field.appendChild(newRow);
  }

  if (field.rows.length === 10) {
    appendRow.disabled = true;
  }
});

appendColumn.addEventListener('click', () => {
  const allRows = field.querySelectorAll('tr');

  allRows.forEach((row) => {
    if (row.children.length < 10) {
      const cell = document.createElement('td');

      removeColumn.disabled = false;
      row.appendChild(cell);
    }

    if (row.children.length === 10) {
      appendColumn.disabled = true;
    }
  });
});

removeRow.addEventListener('click', () => {
  const lastRow = field.lastElementChild;

  if (lastRow && field.rows.length > 2) {
    appendRow.disabled = false;
    lastRow.remove();
  }

  if (field.rows.length === 2) {
    removeRow.disabled = true;
  }
});

removeColumn.addEventListener('click', () => {
  const allRows = field.querySelectorAll('tr');

  allRows.forEach((row) => {
    if (row.children.length > 2) {
      row.lastElementChild.remove();
    }
    appendColumn.disabled = false;

    if (row.children.length === 2) {
      removeColumn.disabled = true;
    }
  });
});
