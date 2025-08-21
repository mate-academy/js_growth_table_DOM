'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = document.querySelector('.field');

const minCount = 2;
const maxCount = 10;

appendColumn.addEventListener('click', () => {
  const rows = field.querySelectorAll('tr');
  const columnsCount = rows[0].children.length;

  if (columnsCount < maxCount) {
    rows.forEach((row) => {
      const newColumn = document.createElement('td');

      row.appendChild(newColumn);
    });

    if (columnsCount + 1 > minCount) {
      removeColumn.disabled = false;
    }

    if (columnsCount + 1 === maxCount) {
      appendColumn.disabled = true;
    }
  } else {
    appendColumn.disabled = true;
  }
});

removeColumn.addEventListener('click', () => {
  const rows = field.querySelectorAll('tr');
  const columnsCount = rows[0].children.length;

  if (columnsCount > minCount) {
    rows.forEach((row) => {
      row.removeChild(row.lastElementChild);
    });

    if (columnsCount - 1 < maxCount) {
      appendColumn.disabled = false;
    }

    if (columnsCount - 1 === minCount) {
      removeColumn.disabled = true;
    }
  } else {
    removeColumn.disabled = true;
  }
});

appendRow.addEventListener('click', () => {
  const newRow = document.createElement('tr');
  const firstRow = field.querySelector('tr');
  const columnsCount = firstRow.children.length;

  for (let i = 0; i < columnsCount; i++) {
    const newColumn = document.createElement('td');

    newRow.appendChild(newColumn);
  }

  if (field.querySelectorAll('tr').length < maxCount) {
    field.appendChild(newRow);

    if (field.querySelectorAll('tr').length > minCount) {
      removeRow.disabled = false;
    }

    if (field.querySelectorAll('tr').length === maxCount) {
      appendRow.disabled = true;
    }
  } else {
    appendRow.disabled = true;
  }
});

removeRow.addEventListener('click', () => {
  const rows = field.querySelectorAll('tr');

  if (rows.length > minCount) {
    rows[rows.length - 1].remove();

    if (field.querySelectorAll('tr').length < maxCount) {
      appendRow.disabled = false;
    }

    if (field.querySelectorAll('tr').length === minCount) {
      removeRow.disabled = true;
    }
  } else {
    removeRow.disabled = true;
  }
});
