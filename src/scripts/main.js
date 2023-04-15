'use strict';

// write code here
const container = document.querySelector('.container');
const table = document.querySelector('.field');

container.addEventListener('click', e => {
  e.preventDefault();

  const item = e.target;
  const len = table.rows[0].cells.length;

  if (!item.classList.contains('button')) {
    return;
  }

  if (item.classList.contains('append-row')) {
    const newRow = table.insertRow(table.rows.length);

    [...table.rows[0].cells].forEach((el, index) => {
      newRow.insertCell(index);
    });
  }

  if (item.classList.contains('remove-row') && table.rows.length > 1) {
    table.deleteRow(table.rows.length - 1);
  }

  if (item.classList.contains('append-column')) {
    [...table.rows].forEach((el, index) => {
      el.insertCell(len);
    });
  }

  if (item.classList.contains('remove-column') && len > 1) {
    [...table.rows].forEach((row, i) => {
      row.deleteCell(len - 1);
    });
  }
});
