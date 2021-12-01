'use strict';

// write code here

const container = document.querySelector('div');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

container.addEventListener('click', (e) => {
  const clickPoint = e.target.closest('button');

  if (!clickPoint) {
    return;
  }

  const table = document.querySelector('table');
  const lastRow = table.rows[table.rows.length - 1];

  if (e.target === appendRowButton
  && appendRowButton.disabled === false) {
    table.insertAdjacentHTML('beforeend', `${lastRow.outerHTML}`);

    if (table.rows.length === 10) {
      appendRowButton.disabled = true;
    }
  }

  if (e.target === removeRowButton
  && removeRowButton.disabled === false) {
    lastRow.remove();

    if (table.rows.length === 2) {
      removeRowButton.disabled = true;
    }
  }

  if (e.target === appendColumnButton
  && appendColumnButton.disabled === false) {
    for (let i = 0; i < table.rows.length; i++) {
      const currentRow = table.rows[i];
      const cellOfNewColumn = currentRow.cells[0];

      currentRow.insertAdjacentHTML('beforeend', `${
        cellOfNewColumn.outerHTML
      }`);
    }

    if (table.rows[0].cells.length === 10) {
      appendColumnButton.disabled = true;
    }
  }

  if (e.target === removeColumnButton
  && removeColumnButton.disabled === false) {
    for (let i = 0; i < table.rows.length; i++) {
      const currentRow = table.rows[i];
      const cellOfLastColumn = currentRow.cells[currentRow.cells.length - 1];

      cellOfLastColumn.remove();
    }

    if (table.rows[0].cells.length === 2) {
      removeColumnButton.disabled = true;
    }
  }
});
