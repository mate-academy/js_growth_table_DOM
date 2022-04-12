'use strict';

const tbody = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

document.addEventListener('click', ev => {
  const rows = document.querySelectorAll('tr');
  const button = ev.target.closest('button');

  let countRows = rows.length;

  if (!button) {
    return;
  }

  switch (button.classList[0]) {
    case 'append-row':
      tbody.append(rows[0].cloneNode(true));
      countRows++;
      break;

    case 'remove-row':
      tbody.lastElementChild.outerHTML = '';
      countRows--;
      break;

    case 'append-column':
      rows.forEach(el => el.append(rows[0].firstElementChild.cloneNode(true)));
      break;

    case 'remove-column':
      rows.forEach(el => {
        el.firstElementChild.outerHTML = '';
      });
      break;
    
    default:
      break;
  }

  appendRow.disabled = countRows === 10;
  removeRow.disabled = countRows === 2;
  appendColumn.disabled = rows[0].childElementCount === 10;
  removeColumn.disabled = rows[0].childElementCount === 2;
});
