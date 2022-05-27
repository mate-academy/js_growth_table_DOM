'use strict';

// write code here
const tbody = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const max = 10;
const min = 2;

document.addEventListener('click', (e) => {
  const target = e.target.closest('.button');

  if (!target || target.disabled) {
    return;
  }

  switch (target) {
    case appendRow:
      tbody.append(tbody.querySelector('tr').cloneNode(true));
      break;
    case removeRow:
      tbody.querySelector('tr').remove();
      break;
    case appendColumn:
      const cell = document.querySelector('td');

      [...tbody.rows].forEach(row => row.append(cell.cloneNode(true)));
      break;
    case removeColumn:
      [...tbody.rows].forEach(row1 => row1.firstElementChild.remove());
      break;
  }

  appendColumn.disabled = tbody.querySelector('tr').children.length >= max;
  removeColumn.disabled = tbody.querySelector('tr').children.length <= min;
  appendRow.disabled = tbody.rows.length >= max;
  removeRow.disabled = tbody.rows.length <= min;
});
