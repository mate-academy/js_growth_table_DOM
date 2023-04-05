'use strict';

const table = document.querySelector('table');
const appendRow = document.querySelector('.append-row.button');
const removeRow = document.querySelector('.remove-row.button');
const appendColumn = document.querySelector('.append-column.button');
const removeColumn = document.querySelector('.remove-column.button');
const handleAppendRow = () => {
  removeRow.disabled = false;
  table.insertRow().innerHTML = table.rows[0].innerHTML;
  appendRow.disabled = table.rows.length === 10;
};
const handleRemoveRow = () => {
  table.rows[0].remove();
  appendRow.disabled = false;
  removeRow.disabled = table.rows.length === 2;
};
const handleAppendColumn = () => {
  removeColumn.disabled = false;

  [...table.rows].forEach((row) => {
    row.insertCell().innerHTML = row.cells[0].innerHTML;
  });

  appendColumn.disabled = table.rows[0].cells.length === 10;
};
const handleRemoveColumn = () => {
  [...table.rows].forEach((row) => {
    row.deleteCell(-1);
  });
  appendColumn.disabled = false;
  removeColumn.disabled = table.rows[0].cells.length === 2;
};

appendRow.addEventListener('click', handleAppendRow);
removeRow.addEventListener('click', handleRemoveRow);
appendColumn.addEventListener('click', handleAppendColumn);
removeColumn.addEventListener('click', handleRemoveColumn);
