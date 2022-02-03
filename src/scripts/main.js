'use strict';

const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
  if (!e.target.classList.contains('button')) {
    return;
  }

  const table = document.querySelector('.field');
  const rows = document.querySelectorAll('tr');
  const addRow = document.querySelector('.append-row');
  const remRow = document.querySelector('.remove-row');
  const addCol = document.querySelector('.append-column');
  const remCol = document.querySelector('.remove-column');

  let rowLimit = rows.length;
  let columnLimit = rows[0].children.length;

  switch (e.target.classList[0]) {
    case 'append-row':
      const clone = rows[0].cloneNode(true);

      table.firstElementChild.append(clone);
      rowLimit++;
      break;

    case 'remove-row':
      table.firstElementChild.lastElementChild.remove();
      rowLimit--;
      break;

    case 'append-column':
      for (let i = 0; i < rows.length; i++) {
        rows[i].insertAdjacentHTML('beforeend', '<td></td>');
      }
      columnLimit++;
      break;

    case 'remove-column':
      for (let i = 0; i < rows.length; i++) {
        rows[i].lastElementChild.remove();
      }
      columnLimit--;
      break;
  };

  addRow.disabled = rowLimit > 9;
  remRow.disabled = rowLimit < 3;
  addCol.disabled = columnLimit > 9;
  remCol.disabled = columnLimit < 3;
});
