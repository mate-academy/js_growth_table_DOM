'use strict';

const buttons = document.querySelectorAll('.button');
const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');

const removeRowButton = document.querySelector('.remove-row');
const appendRowButton = document.querySelector('.append-row');
const removeColumnButton = document.querySelector('.remove-column');
const appendColumnButton = document.querySelector('.append-column');

const getTableInfo = () => {
  const tableRows = tbody.querySelectorAll('tr');
  const tableColumns = tableRows[0].querySelectorAll('td');

  return [tableRows.length, tableColumns.length];
};

const updateButtonStates = () => {
  const [rowsCount, columnsCount] = getTableInfo();

  appendRowButton.disabled = rowsCount === 10;
  removeRowButton.disabled = rowsCount === 2;
  appendColumnButton.disabled = columnsCount === 10;
  removeColumnButton.disabled = columnsCount === 2;
};

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const currentButton = e.target;
    const tableRows = tbody.querySelectorAll('tr');
    const [rowsCount, columnsCount] = getTableInfo();

    switch (true) {
      case currentButton.classList.contains('append-row') && rowsCount < 10:
        tbody.append(tableRows[0].cloneNode(true));
        break;
      case currentButton.classList.contains('append-column') &&
        columnsCount < 10:
        tableRows.forEach((row) => {
          row.append(row.children[0].cloneNode(true));
        });
        break;
      case currentButton.classList.contains('remove-row') && rowsCount > 2:
        tableRows[rowsCount - 1].remove();
        break;
      case currentButton.classList.contains('remove-column') &&
        columnsCount > 2:
        tableRows.forEach((row) => {
          row.children[columnsCount - 1].remove();
        });
        break;
      default:
    }

    updateButtonStates();
  });
});
