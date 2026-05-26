'use strict';

const table = document.querySelector('.field tbody');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const MAX = 10;
const MIN = 2;

function makeButtonDisabled(buttonElement) {
  buttonElement.disabled = true;
}

function makeButtonEnabled(buttonElement) {
  buttonElement.disabled = false;
}

appendRow.addEventListener('click', () => {
  if (table.rows.length === MIN) {
    makeButtonEnabled(removeRow);
  }

  if (table.rows.length === MAX) {
    return;
  }

  const newRow = document.createElement('tr');

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    newRow.appendChild(document.createElement('td'));
  }

  table.appendChild(newRow);

  if (table.rows.length >= MAX) {
    makeButtonDisabled(appendRow);
  }
});

removeRow.addEventListener('click', () => {
  if (table.rows.length === MIN + 1) {
    makeButtonDisabled(removeRow);
  }

  table.rows[table.rows.length - 1].remove();

  if (table.rows.length <= MAX) {
    makeButtonEnabled(appendRow);
  }
});

appendColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length >= MAX) {
    return;
  }

  if (table.rows[0].cells.length === MIN) {
    makeButtonEnabled(removeColumn);
  }

  for (let i = 0; i < table.rows.length; i++) {
    const td = document.createElement('td');

    table.rows[i].appendChild(td);
  }

  if (table.rows[0].cells.length >= MAX) {
    makeButtonDisabled(appendColumn);
  }
});

removeColumn.addEventListener('click', () => {
  if (table.rows[0].cells.length === MIN + 1) {
    makeButtonDisabled(removeColumn);
  }

  if (table.rows[0].cells.length <= MIN) {
    return;
  }

  for (let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[table.rows[i].cells.length - 1].remove();
  }

  if (table.rows[0].cells.length <= MAX) {
    makeButtonEnabled(appendColumn);
  }
});
