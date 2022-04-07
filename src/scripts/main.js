'use strict';

const container = document.querySelector('.container');

container.addEventListener('click', e => {
  if (!e.target.classList.contains('button')) {
    return;
  };

  const table = document.querySelector('.field');
  const rows = document.querySelectorAll('tr');
  const addRow = document.querySelector('.append-row');
  const removeRow = document.querySelector('.remove-row');
  const addCol = document.querySelector('.append-column');
  const removeCol = document.querySelector('.remove-column');

  let rowMax = rows.length;
  let colMax = rows[0].children.length;

  switch (e.target.classList[0]) {
    case 'append-row':
      const clone = rows[0].cloneNode(true);

      table.firstElementChild.append(clone);
      rowMax++;
      break;

    case 'remove-row':
      table.firstElementChild.lastElementChild.remove();
      rowMax--;
      break;

    case 'append-column':
      for (let i = 0; i < rows.length; i++) {
        rows[i].insertAdjacentHTML('afterbegin', '<td></td>');
      }
      colMax++;
      break;

    case 'remove-column':
      for (let i = 0; i < rows.length; i++) {
        rows[i].lastElementChild.remove();
      }
      colMax--;
      break;
  };

  addRow.disabled = rowMax > 9;
  removeRow.disabled = rowMax < 3;
  addCol.disabled = colMax > 9;
  removeCol.disabled = colMax < 3;
})
