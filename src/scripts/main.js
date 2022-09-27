'use strict';

// write code here

document.addEventListener('click', action => {
  const appendRow = document.querySelector('.append-row');
  const appendColumn = document.querySelector('.append-column');
  const removeRow = document.querySelector('.remove-row');
  const removeColumn = document.querySelector('.remove-column');

  const table = document.querySelector('table');
  const rows = document.querySelectorAll('tr');

  const limitMax = 10;
  const limitMin = 2;

  let rowLimit = rows.length;
  let columnLimit = rows[0].children.length;

  if (action.target === appendRow) {
    const clone = rows[0].cloneNode(true);

    table.firstElementChild.append(clone);
    rowLimit++;
  }

  if (action.target === removeRow) {
    table.firstElementChild.lastElementChild.remove();
    rowLimit--;
  }

  if (action.target === appendColumn) {
    for (let i = 0; i < rowLimit; i++) {
      const addColumn = document.createElement('td');

      rows[i].insertAdjacentElement('beforeend', addColumn);
    }

    columnLimit++;
  }

  if (action.target === removeColumn) {
    for (let j = 0; j < rowLimit; j++) {
      rows[j].lastElementChild.remove();
    }

    columnLimit--;
  }

  appendRow.disabled = rowLimit >= limitMax;

  removeRow.disabled = rowLimit <= limitMin;

  appendColumn.disabled = columnLimit >= limitMax;

  removeColumn.disabled = columnLimit <= limitMin;
});
