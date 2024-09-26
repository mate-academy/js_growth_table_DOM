'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  const table = document.querySelector('tbody');

  if (table.children.length < 10) {
    const cloneItem = table.firstChild.cloneNode(true);

    table.append(cloneItem);
  }
});

removeRow.addEventListener('click', () => {
  const table = document.querySelector('tbody');

  if (table.children.length > 2) {
    table.lastChild.remove();
  }
});

appendColumn.addEventListener('click', () => {
  const table = document.querySelector('tbody');
  const tableRow = document.querySelector('tr');

  if (tableRow.children.length < 10) {
    [...table.children].forEach(el => {
      const newTableItem = document.createElement('td');

      el.append(newTableItem);
    });
  }
});

removeColumn.addEventListener('click', () => {
  const table = document.querySelector('tbody');
  const tableRow = document.querySelector('tr');

  if (tableRow.children.length > 2) {
    [...table.children].forEach(el => el.lastChild.remove());
  }
});
