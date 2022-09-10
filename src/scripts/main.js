'use strict';

const root = document.querySelector('.container');
const table = root.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

root.addEventListener('click', () => {
  const button = event.target.closest('.button');
  const rowsElements = table.querySelectorAll('tr');
  let rowsCount = table.querySelectorAll('tr').length;
  let columnsCount = table.querySelectorAll('td').length / rowsCount;
  const maxSize = 10;
  const minSize = 2;

  if (!button || !root.contains(button)) {
    return;
  }

  switch (button) {
    case appendRowButton:
      table.firstElementChild.insertAdjacentHTML('beforeend', `
      <tr>
        ${'<td></td>'.repeat(columnsCount)}
      </tr>
    `);
      rowsCount++;
      break;

    case removeRowButton:
      table.firstElementChild.lastElementChild.remove();
      rowsCount--;
      break;

    case appendColumnButton:
      [...rowsElements]
        .map(row => row.insertAdjacentHTML('beforeend', `<td></td>`));
      columnsCount++;
      break;

    case removeColumnButton:
      [...rowsElements].map(row => row.lastElementChild.remove());
      columnsCount--;
  }

  appendRowButton.disabled = rowsCount >= maxSize;
  removeRowButton.disabled = rowsCount <= minSize;
  appendColumnButton.disabled = columnsCount >= maxSize;
  removeColumnButton.disabled = columnsCount <= minSize;
});
