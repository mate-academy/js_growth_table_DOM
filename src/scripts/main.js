'use strict';

const table = document.querySelector('table');
const addRowsBtn = document.querySelector('.append-row ');
const removeColumnBtn = document.querySelector('.remove-column');
const removeRowsBtn = document.querySelector('.remove-row');
const addColumnsBtn = document.querySelector('.append-column');

addRowsBtn.addEventListener('click', () => {
  const newRow = table.rows[0].cloneNode(true);

  removeRowsBtn.removeAttribute('disabled');

  if (table.rows.length < 9) {
    table.append(newRow);
  } else {
    table.append(newRow);
    addRowsBtn.setAttribute('disabled', true);
  }
});

removeRowsBtn.addEventListener('click', () => {
  if (table.rows.length > 3) {
    table.querySelector('tr:last-child').remove();
    addRowsBtn.removeAttribute('disabled');
  } else {
    table.querySelector('tr:last-child').remove();
    removeRowsBtn.setAttribute('disabled', true);
  }
});

addColumnsBtn.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  for (let i = 0; i < rows.length; i++) {
    const column = document.createElement('td');

    if (rows[i].cells.length === 9) {
      rows[i].append(column);
      addColumnsBtn.setAttribute('disabled', true);
    } else {
      removeColumnBtn.removeAttribute('disabled');
      rows[i].append(column);
    }
  }
});

removeColumnBtn.addEventListener('click', () => {
  const rows = document.querySelectorAll('tr');

  for (let j = 0; j < table.rows.length; j++) {
    if (rows[j].cells.length > 3) {
      rows[j].querySelector('td:last-child').remove();
      addColumnsBtn.removeAttribute('disabled');
    } else {
      rows[j].querySelector('td:last-child').remove();
      removeColumnBtn.setAttribute('disabled', true);
    }
  }
});
