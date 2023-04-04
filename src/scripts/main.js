'use strict';

const field = document.querySelector('tbody');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const row = document.querySelector('tr');

appendRowButton.addEventListener('click', e => {
  const clonedRow = row.cloneNode(true);

  field.append(clonedRow);

  if (field.rows.length >= 10) {
    e.target.disabled = true;
  } else {
    removeRowButton.disabled = false;
  }
});

removeRowButton.addEventListener('click', e => {
  field.deleteRow(-1);

  if (field.rows.length <= 2) {
    e.target.disabled = true;
  } else {
    appendRowButton.disabled = false;
  }
});

appendColumnButton.addEventListener('click', e => {
  [...field.rows].forEach(fieldRow => {
    const cell = document.createElement('td');

    fieldRow.append(cell);

    if (fieldRow.cells.length >= 10) {
      e.target.disabled = true;
    } else {
      removeColumnButton.disabled = false;
    }
  });
});

removeColumnButton.addEventListener('click', e => {
  [...field.rows].forEach(fieldRow => {
    fieldRow.deleteCell(-1);

    if (fieldRow.cells.length <= 2) {
      e.target.disabled = true;
    } else {
      appendColumnButton.disabled = false;
    }
  });
});
