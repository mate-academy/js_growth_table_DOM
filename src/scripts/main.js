'use strict';

const addRowButton = document.querySelector('.append-row');
const deleteRowButton = document.querySelector('.remove-row');
const addColButton = document.querySelector('.append-column');
const deieteColButton = document.querySelector('.remove-column');
const table = document.querySelector('.field');

const max = 10;
const min = 2;

document.addEventListener('click', (clickedElement) => {
  const target = clickedElement.target.closest('.button');

  if (!target || target.disabled) {
    return;
  }

  switch (target) {
    case addRowButton:
      table.append(table.querySelector('tr').cloneNode(true));
      break;

    case deleteRowButton:
      table.querySelector('tr').remove();
      break;

    case addColButton:
      const col = document.querySelector('td');

      [...table.rows].forEach(row => row.append(col.cloneNode(true)));
      break;

    case deieteColButton:
      [...table.rows].forEach(rowOne => rowOne.firstElementChild.remove());
      break;
  }

  addRowButton.disabled = table.rows.length >= max;
  deleteRowButton.disabled = table.rows.length <= min;
  addColButton.disabled = table.querySelector('tr').children.length >= max;
  deieteColButton.disabled = table.querySelector('tr').children.length <= min;
});
