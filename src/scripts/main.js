'use strict';

const appendRowButton = document.querySelector('.append-row');
const deleteRowButton = document.querySelector('.remove-row');
const appendColButton = document.querySelector('.append-column');
const deleteColButton = document.querySelector('.remove-column');

const table = document.querySelector('table tbody');

appendRowButton.addEventListener('click', () => {
  const tableRows = [...table.rows];

  if (tableRows.length === 2) {
    deleteRowButton.removeAttribute('disabled');

    const rowToAppend = tableRows[tableRows.length - 1];
    const clonedRow = rowToAppend.cloneNode(true);

    table.appendChild(clonedRow);
  } else if (tableRows.length > 2 && tableRows.length < 9) {
    const rowToAppend = tableRows[tableRows.length - 1];
    const clonedRow = rowToAppend.cloneNode(true);

    table.appendChild(clonedRow);
  } else {
    const rowToAppend = tableRows[tableRows.length - 1];
    const clonedRow = rowToAppend.cloneNode(true);

    table.appendChild(clonedRow);
    appendRowButton.setAttribute('disabled', true);
  }
});

deleteRowButton.addEventListener('click', () => {
  const tableRows = [...table.rows];

  if (tableRows.length === 3) {
    const rowToDelete = tableRows[tableRows.length - 1];

    rowToDelete.remove();
    deleteRowButton.setAttribute('disabled', true);
  } else if (tableRows.length === 10) {
    const rowToDelete = tableRows[tableRows.length - 1];

    rowToDelete.remove();
    appendRowButton.removeAttribute('disabled');
  } else {
    const rowToDelete = tableRows[tableRows.length - 1];

    rowToDelete.remove();
  }
});

appendColButton.addEventListener('click', () => {
  const tableRows = [...table.rows];

  if (tableRows[0].children.length === 2) {
    tableRows.forEach((row) => {
      const cell = document.createElement('td');

      row.appendChild(cell);
    });
    deleteColButton.removeAttribute('disabled');
  } else if (tableRows[0].children.length === 9) {
    tableRows.forEach((row) => {
      const cell = document.createElement('td');

      row.appendChild(cell);
    });
    appendColButton.setAttribute('disabled', true);
  } else {
    tableRows.forEach((row) => {
      const cell = document.createElement('td');

      row.appendChild(cell);
    });
  }
});

deleteColButton.addEventListener('click', () => {
  const tableRows = [...table.rows];

  if (tableRows[0].children.length === 10) {
    tableRows.forEach((row) => {
      const cells = [...row.children];
      const cellToRemove = cells[cells.length - 1];

      cellToRemove.remove();
    });
    appendColButton.removeAttribute('disabled');
  } else if (tableRows[0].children.length === 3) {
    tableRows.forEach((row) => {
      const cells = [...row.children];
      const cellToRemove = cells[cells.length - 1];

      cellToRemove.remove();
    });
    deleteColButton.setAttribute('disabled', true);
  } else {
    tableRows.forEach((row) => {
      const cells = [...row.children];
      const cellToRemove = cells[cells.length - 1];

      cellToRemove.remove();
    });
  }
});
