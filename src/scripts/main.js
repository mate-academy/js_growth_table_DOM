'use strict';

const root = document.querySelector('.container');
const table = root.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

root.addEventListener('click', () => {
  const buttons = event.target.closest('.button');
  const rowsElements = table.querySelectorAll('tr');
  let rowsCount = table.querySelectorAll('tr').length;
  let columnsCount = table.querySelectorAll('td').length / rowsCount;

  if (!buttons || !root.contains(buttons)) {
    return;
  }

  switch (true) {
    case event.target.matches('.append-row'):
      table.firstElementChild.insertAdjacentHTML('beforeend', `
      <tr>
        ${'<td></td>'.repeat(columnsCount)}
      </tr>
    `);
      rowsCount++;
      break;

    case event.target.matches('.remove-row'):
      table.firstElementChild.lastElementChild.remove();
      rowsCount--;
      break;

    case event.target.matches('.append-column'):
      [...rowsElements]
        .map(row => row.insertAdjacentHTML('beforeend', `<td></td>`));
      columnsCount++;
      break;

    case event.target.matches('.remove-column'):
      [...rowsElements].map(row => row.lastElementChild.remove());
      columnsCount--;
  }

  appendRowButton.disabled = rowsCount >= 10;
  removeRowButton.disabled = rowsCount <= 2;
  appendColumnButton.disabled = columnsCount >= 10;
  removeColumnButton.disabled = columnsCount <= 2;
});
