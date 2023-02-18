'use strict';

const container = document.querySelector('.container');
const table = container.querySelector('.field');

const buttonRemoveRow = container.querySelector('.remove-row');
const buttonAddRow = container.querySelector('.append-row');
const buttonRemoveColumn = container.querySelector('.remove-column');
const buttonAddColumn = container.querySelector('.append-column');

const maxSizeTable = 10;
const minSizeTable = 2;

container.addEventListener('click', (ev) => {
  const button = ev.target;
  const buttonClass = [...button.classList];
  const tbody = table.firstElementChild;
  const rows = tbody.querySelectorAll('tr');

  if (!buttonClass.includes('button')) {
    return;
  }

  const rowsCount = [...tbody.children].length;
  const columnCount = [...rows[0].children].length;
  const oneCell = 1;

  switch (buttonClass[0]) {
    case 'append-column':
      rows.forEach(el => {
        el.append(el.lastElementChild.cloneNode());
      });
      buttonRemoveColumn.removeAttribute('disabled');
      addAtribute(button, maxSizeTable, (columnCount + oneCell));
      break;

    case 'remove-column':
      rows.forEach(e => {
        e.lastElementChild.remove();
      });
      buttonAddColumn.removeAttribute('disabled');
      addAtribute(button, minSizeTable, (columnCount - oneCell));
      break;

    case 'append-row':
      tbody.append(rows[0].cloneNode(true));
      buttonRemoveRow.removeAttribute('disabled');
      addAtribute(button, maxSizeTable, (rowsCount + oneCell));
      break;

    case 'remove-row':
      tbody.lastElementChild.remove();
      buttonAddRow.removeAttribute('disabled');
      addAtribute(button, minSizeTable, (rowsCount - oneCell));
      break;

    default:
      throw new Error('no case');
  }
});

function addAtribute(button, size, currentSize) {
  if (size === currentSize) {
    button.setAttribute('disabled', 'true');
  }
}
