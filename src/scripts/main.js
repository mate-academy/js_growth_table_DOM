'use strict';

const MAXCOUNT = 10;
const MINCOUNT = 2;

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const field = document.querySelector('.field');
const tbody = document.querySelector('tbody');

const updateButtonStates = () => {
  const rowCount = field.rows.length;
  const colCount = field.rows[0].cells.length;

  appendRowButton.disabled = rowCount >= MAXCOUNT;
  removeRowButton.disabled = rowCount <= MINCOUNT;
  appendColumnButton.disabled = colCount >= MAXCOUNT;
  removeColumnButton.disabled = colCount <= MINCOUNT;
};

appendRowButton.addEventListener('click', () => {
  const row = document.createElement('tr');
  const colCount = field.rows[0].cells.length;

  for (let i = 0; i < colCount; i++) {
    const td = document.createElement('td');

    row.appendChild(td);
  }

  tbody.appendChild(row);
  updateButtonStates();
});

removeRowButton.addEventListener('click', () => {
  if (field.rows.length > MINCOUNT) {
    field.deleteRow(-1);
    updateButtonStates();
  }
});

appendColumnButton.addEventListener('click', () => {
  [...tbody.rows].forEach((row) => {
    const td = document.createElement('td');

    row.appendChild(td);
  });

  updateButtonStates();
});

removeColumnButton.addEventListener('click', () => {
  if (field.rows[0].cells.length > MINCOUNT) {
    [...field.rows].forEach((row) => {
      row.deleteCell(-1);
    });

    updateButtonStates();
  }
});
