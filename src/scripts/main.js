'use strict';

// write code here
const table = document.querySelector('.container');
const blueCells = document.querySelector('.field').tBodies[0];
const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

let rowsCount = blueCells.children.length;
let columnsCount = blueCells.firstElementChild.children.length;

table.addEventListener('click', (ev) => {
  const item = ev.target;

  if (!item.classList.contains('button')) {
    return;
  }

  switch (item) {
    case addRowButton:
      const newRow = blueCells.firstElementChild.cloneNode(true);

      blueCells.append(newRow);
      rowsCount++;
      break;

    case removeRowButton:
      blueCells.lastElementChild.remove();
      rowsCount--;
      break;

    case addColumnButton:
      [...blueCells.children].forEach(row => {
        return row.append(row.lastElementChild.cloneNode(true));
      });
      columnsCount++;
      break;

    case removeColumnButton:
      [...blueCells.children].forEach(row => row.lastElementChild.remove());
      columnsCount--;
      break;
  }

  switch (rowsCount) {
    case 10:
      addRowButton.disabled = 'true';
      break;

    case 2:
      removeRowButton.disabled = 'true';
      break;

    default:
      addRowButton.removeAttribute('disabled');
      removeRowButton.removeAttribute('disabled');
  }

  switch (columnsCount) {
    case 10:
      addColumnButton.disabled = 'true';
      break;

    case 2:
      removeColumnButton.disabled = 'true';
      break;

    default:
      addColumnButton.removeAttribute('disabled');
      removeColumnButton.removeAttribute('disabled');
  }
});
