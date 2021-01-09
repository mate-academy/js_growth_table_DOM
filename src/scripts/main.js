'use strict';

const table = document.querySelector('tbody');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  const addRow = table.lastElementChild;

  table.append(addRow.cloneNode(true));

  if (table.childElementCount >= 10) {
    appendRow.setAttribute('disabled', true);
  }

  if (table.childElementCount > 2) {
    removeRow.removeAttribute('disabled');
  }
});

removeRow.addEventListener('click', () => {
  table.lastElementChild.remove();

  if (table.childElementCount <= 2) {
    removeRow.setAttribute('disabled', true);
  }

  if (table.childElementCount < 10) {
    appendRow.removeAttribute('disabled');
  }
});

appendColumn.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');

  for (const row of rows) {
    const cell = document.createElement('td');

    row.append(cell);

    if (row.childElementCount >= 10) {
      appendColumn.setAttribute('disabled', true);
    }

    if (row.childElementCount > 2) {
      removeColumn.removeAttribute('disabled');
    }
  }
});

removeColumn.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');

  for (const row of rows) {
    row.lastElementChild.remove();

    if (row.childElementCount <= 2) {
      removeColumn.setAttribute('disabled', true);
    }

    if (row.childElementCount < 10) {
      appendColumn.removeAttribute('disabled');
    }
  }
}
);
