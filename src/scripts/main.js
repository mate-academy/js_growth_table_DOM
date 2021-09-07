'use strict';

const table = document.querySelector('table');
const addRowsBtn = document.querySelector('.append-row ');
const removeColumnBtn = document.querySelector('.remove-column');
const removeRowsBtn = document.querySelector('.remove-row');
const addColumnsBtn = document.querySelector('.append-column');

addRowsBtn.addEventListener('click', addRow);

function addRow() {
  if (table.rows.length < 10) {
    const newRow = document.createElement('tr');

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      const td = document.createElement('td');

      newRow.append(td);
    };

    table.append(newRow);
  }
}

removeRowsBtn.addEventListener('click', () => {
  if (table.rows.length > 2) {
    table.querySelector('tr:last-child').remove();
  }
});

addColumnsBtn.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  for (let i = 0; i < rows.length; i++) {
    const column = document.createElement('td');

    if (rows[i].cells.length < 10) {
      rows[i].append(column);
    }
  }
});

removeColumnBtn.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  for (let j = 0; j < table.rows.length; j++) {
    if (rows[j].cells.length > 2) {
      rows[j].querySelector('td:last-child').remove();
    }
  }
});
