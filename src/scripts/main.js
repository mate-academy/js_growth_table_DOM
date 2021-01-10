'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('tbody');

const maxCount = 10;
const minCount = 2;

appendRow.addEventListener('click', e => {
  const countOfRows = table.children.length;

  if (countOfRows === maxCount - 1) {
    e.target.disabled = true;
  }

  if (removeRow.disabled) {
    removeRow.disabled = !removeRow.disabled;
  }

  if (countOfRows < maxCount) {
    const clone = table.lastElementChild.cloneNode(true);

    table.append(clone);
  }
});

removeRow.addEventListener('click', e => {
  const countOfRows = table.children.length;

  if (countOfRows - 1 === minCount) {
    e.target.disabled = true;
  }

  if (appendRow.disabled) {
    appendRow.disabled = !appendRow.disabled;
  }

  if (countOfRows > minCount) {
    const lastRow = table.lastElementChild;

    lastRow.remove();
  }
});

appendColumn.addEventListener('click', e => {
  const rows = table.children;
  const countOfColumn = rows[0].children.length;

  if (removeColumn.disabled) {
    removeColumn.disabled = !removeColumn.disabled;
  }

  if (countOfColumn === maxCount - 1) {
    e.target.disabled = !e.target.disabled;
  }

  if (countOfColumn < maxCount) {
    [...rows].forEach(row => {
      row.insertAdjacentHTML('beforeend', `
        <td></td>
      `);
    });
  }
});

removeColumn.addEventListener('click', e => {
  const rows = table.children;
  const countOfColumn = rows[0].children.length;

  if (appendColumn.disabled) {
    appendColumn.disabled = !appendColumn.disabled;
  }

  if (countOfColumn - 1 === minCount) {
    e.target.disabled = !e.target.disabled;
  }

  if (countOfColumn > minCount) {
    [...rows].forEach(row => {
      row.lastElementChild.remove();
    });
  }
});
