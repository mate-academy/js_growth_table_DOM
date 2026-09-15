'use strict';

const table = document.querySelector('.field');

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

appendRowButton.addEventListener('click', () => {
  if (table.rows.length >= 10) {
    return;
  }

  const row = table.insertRow();
  const columns = table.rows[0].cells.length;

  for (let i = 0; i < columns; i++) {
    row.insertCell();
  }

  if (table.rows.length === 10) {
    appendRowButton.disabled = true;
  }

  removeRowButton.disabled = false;
});

removeRowButton.addEventListener('click', () => {
  if (table.rows.length <= 2) {
    return;
  }

  table.deleteRow(-1);

  if (table.rows.length < 10) {
    appendRowButton.disabled = false;
  }

  if (table.rows.length === 2) {
    removeRowButton.disabled = true;
  }
});

appendColumnButton.addEventListener('click', () => {
  const columns = table.rows[0].cells.length;

  if (columns >= 10) {
    return;
  }

  Array.from(table.rows).forEach((row) => {
    row.insertCell();
  });

  if (table.rows[0].cells.length === 10) {
    appendColumnButton.disabled = true;
  }

  removeColumnButton.disabled = false;
});

removeColumnButton.addEventListener('click', () => {
  const columns = table.rows[0].cells.length;

  if (columns <= 2) {
    return;
  }

  Array.from(table.rows).forEach((row) => {
    row.deleteCell(-1);
  });

  if (table.rows[0].cells.length < 10) {
    appendColumnButton.disabled = false;
  }

  if (table.rows[0].cells.length === 2) {
    removeColumnButton.disabled = true;
  }
});
