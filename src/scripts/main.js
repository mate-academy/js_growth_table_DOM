'use strict';

// write code here
const container = document.querySelector('.container');
const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

container.addEventListener('click', (e) => {
  const list = [...table.children[0].children];

  switch (e.target.className) {
    case 'append-row button':
      table.children[0].prepend(table.rows[0].cloneNode(true));
      break;
    case 'remove-row button':
      table.children[0].lastElementChild.remove();
      break;
    case 'append-column button':
      list.forEach(tr => {
        const td = table.rows[0].cells[0].cloneNode(true);

        tr.append(td);
      });
      break;
    case 'remove-column button':
      list.forEach(tr => {
        tr.lastElementChild.remove();
      });
      break;
  }

  const rowsLength = table.children[0].rows.length;
  const columnLength = table.children[0].rows[0].cells.length;

  appendRow.disabled = rowsLength >= 10;
  removeRow.disabled = rowsLength <= 2;
  appendColumn.disabled = columnLength >= 10;
  removeColumn.disabled = columnLength <= 2;
});
