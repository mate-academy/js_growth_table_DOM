'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('table');
const listTr = table.querySelector('tr');
const listTd = document.querySelector('td');

document.addEventListener('click', (e) => {
  const target = e.target.closest('.button');

  switch (target) {
    case appendRow:
      table.append(listTr.cloneNode(true));
      break;

    case removeRow:
      listTr.remove();
      break;

    case appendColumn:

      [...table.rows].forEach(el => el.append(listTd.cloneNode(true)));
      break;

    case removeColumn:
      [...table.rows].forEach(el => el.firstElementChild.remove());
      break;
  }

  appendRow.disabled = table.rows.length >= 10;
  removeRow.disabled = table.rows.length <= 2;
  appendColumn.disabled = listTr.children.length >= 10;
  removeColumn.disabled = listTr.children.length <= 2;
});
