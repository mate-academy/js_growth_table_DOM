'use strict';

const table = document.querySelector('table');

const buttonAppendRow = document.querySelector('.append-row');
const buttonRemoveRow = document.querySelector('.remove-row');
const buttonAppendColumn = document.querySelector('.append-column');
const buttonRemoveColumn = document.querySelector('.remove-column');

document.addEventListener('click', e => {
  switch (true) {
    case (e.target.classList.contains('append-row')):
      const newRow = table.insertRow();

      [...table.rows[0].cells].forEach(() => newRow.insertCell());
      break;
    case (e.target.classList.contains('remove-row')):
      table.deleteRow(-1);
      break;
    case (e.target.classList.contains('append-column')):
      for (const row of table.rows) {
        row.insertCell();
      }
      break;
    case (e.target.classList.contains('remove-column')):
      for (const row of table.rows) {
        row.deleteCell(-1);
      }
      break;
  }

  if (table.rows.length === 10) {
    buttonAppendRow.disabled = true;
  } else {
    buttonAppendRow.disabled = false;
  }

  if (table.rows.length === 2) {
    buttonRemoveRow.disabled = true;
  } else {
    buttonRemoveRow.disabled = false;
  }

  if (table.rows[0].cells.length === 10) {
    buttonAppendColumn.disabled = true;
  } else {
    buttonAppendColumn.disabled = false;
  }

  if (table.rows[0].cells.length === 2) {
    buttonRemoveColumn.disabled = true;
  } else {
    buttonRemoveColumn.disabled = false;
  }
});
