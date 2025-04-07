'use strict';

const row = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

document.addEventListener('click', (e) => {
  if (e.target === appendRow) {
    const columnsCount = row.querySelector('tr').children.length;
    const newRow = document.createElement('tr');

    for (let i = 0; i < columnsCount; i++) {
      const newCeil = document.createElement('td');

      newRow.append(newCeil);
    }

    row.append(newRow);
    checkButtonState();
  }

  if (e.target.closest('.remove-row')) {
    const rowsLength = row.querySelectorAll('tr').length;

    if (rowsLength > 2) {
      row.lastElementChild.remove();
      checkButtonState();
    }
  }

  const rows = Array.from(row.children);

  if (e.target.closest('.append-column')) {
    rows.forEach((element) => {
      element.append(document.createElement('td'));
    });

    checkButtonState();
  }

  if (e.target.closest('.remove-column')) {
    rows.forEach((element) => {
      element.lastElementChild.remove();
    });

    checkButtonState();
  }
});

function checkButtonState() {
  const rowsCount = row.querySelectorAll('tr').length;
  const columnsCount = row.querySelector('tr').children.length;

  removeRow.disabled = rowsCount <= 2;
  appendRow.disabled = rowsCount >= 10;

  appendColumn.disabled = columnsCount >= 10;
  removeColumn.disabled = columnsCount <= 2;
}
