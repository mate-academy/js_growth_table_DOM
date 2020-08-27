'use strict';

// write code here
const list = document.querySelector('div.container');

list.addEventListener('click', (event) => {
  const item = event.target;

  const buttonAppendRow = document.querySelector('button.append-row');
  const buttonRemoveRow = document.querySelector('button.remove-row');
  const buttonAppendColumn = document.querySelector('button.append-column');
  const buttonRemoveColumn = document.querySelector('button.remove-column');

  const table = document.querySelector('table');

  if (item === buttonAppendColumn) {
    for (let i = 0; i < table.rows.length; i++) {
      const cloneElement = table.rows[i].cells[1].cloneNode(true);

      table.rows[i].append(cloneElement);
    }
  }

  if (item === buttonRemoveColumn) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].cells[table.rows[i].cells.length - 1].remove();
    }
  }

  if (item === buttonAppendRow) {
    const cloneElement = table.rows[0].cloneNode(true);

    table.append(cloneElement);
  }

  if (item === buttonRemoveRow) {
    table.deleteRow(0);
  }

  if (table.rows[0].cells.length >= 10) {
    buttonAppendColumn.disabled = true;
  } else {
    buttonAppendColumn.disabled = false;
  }

  if (table.rows[0].cells.length <= 2) {
    buttonRemoveColumn.disabled = true;
  } else {
    buttonRemoveColumn.disabled = false;
  }

  if (table.rows.length <= 2) {
    buttonRemoveRow.disabled = true;
  } else {
    buttonRemoveRow.disabled = false;
  }

  if (table.rows.length >= 10) {
    buttonAppendRow.disabled = true;
  } else {
    buttonAppendRow.disabled = false;
  }
});
