'use strict';

// write code here
const MAX_ROWS = 10;
const MAX_COLUMNS = 10;
const MIN_ROWS = 2;
const MIN_COLUMNS = 2;

const container = document.querySelector('.container');
const appendRowButton = container.querySelector('.append-row');
const removeRowButton = container.querySelector('.remove-row');
const appendColumnButton = container.querySelector('.append-column');
const removeColumnButton = container.querySelector('.remove-column');
const tableRows = container.querySelector('tbody');

const appendRow = (rows) => {
  const newRow = document.createElement('tr');

  for (
    let i = 0;
    i < rows.firstElementChild.querySelectorAll('td').length;
    i++
  ) {
    const newCell = document.createElement('td');

    newRow.appendChild(newCell);
  }
  rows.appendChild(newRow);
};

const removeRow = (rows) => {
  rows.lastElementChild.remove();
};

const appendColumn = (rows) => {
  rows.querySelectorAll('tr').forEach((elem) => {
    const newTableData = document.createElement('td');

    elem.appendChild(newTableData);
  });
};

const removeColumn = (rows) => {
  rows.querySelectorAll('tr').forEach((elem) => {
    elem.lastElementChild.remove();
  });
};

const updateButtonsState = () => {
  const rowsCount = tableRows.children.length;
  const columnsCount = tableRows.firstChild.children.length;

  appendRowButton.disabled = rowsCount >= MAX_ROWS;
  removeRowButton.disabled = rowsCount <= MIN_ROWS;
  appendColumnButton.disabled = columnsCount >= MAX_COLUMNS;
  removeColumnButton.disabled = columnsCount <= MIN_COLUMNS;
};

appendRowButton.addEventListener('click', (e) => {
  const rowsCount = tableRows.children.length;

  if (rowsCount < MAX_ROWS) {
    appendRow(tableRows);
    updateButtonsState();
  }
});

removeRowButton.addEventListener('click', (e) => {
  const rowsCount = tableRows.children.length;

  if (rowsCount > MIN_ROWS) {
    removeRow(tableRows);
    updateButtonsState();
  }
});

appendColumnButton.addEventListener('click', (e) => {
  const columnsCount = tableRows.firstChild.children.length;

  if (columnsCount < MAX_COLUMNS) {
    appendColumn(tableRows);
    updateButtonsState();
  }
});

removeColumnButton.addEventListener('click', (e) => {
  const columnsCount = tableRows.firstChild.children.length;

  if (columnsCount > MIN_COLUMNS) {
    removeColumn(tableRows);
    updateButtonsState();
  }
});

updateButtonsState();
