'use strict';

const field = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

appendRowButton.addEventListener('click', (e) => {
  const row = field.rows[0].cloneNode(true);

  field.firstElementChild.appendChild(row);

  if (field.rows.length >= 10) {
    appendRowButton.setAttribute('disabled', '');

    return;
  }

  if (field.rows.length === 3) {
    removeRowButton.removeAttribute('disabled');
  }
});

removeRowButton.addEventListener('click', (e) => {
  field.rows[0].outerHTML = '';

  if (field.rows.length <= 2) {
    removeRowButton.setAttribute('disabled', '');

    return;
  }

  if (field.rows.length === 9) {
    appendRowButton.removeAttribute('disabled');
  }
});

appendColumnButton.addEventListener('click', (e) => {
  for (const row of field.rows) {
    row.appendChild(document.createElement('td'));
  }

  if (field.rows[0].cells.length >= 10) {
    appendColumnButton.setAttribute('disabled', '');

    return;
  }

  if (field.rows[0].cells.length === 3) {
    removeColumnButton.removeAttribute('disabled');
  }
});

removeColumnButton.addEventListener('click', (e) => {
  for (const row of field.rows) {
    row.cells[row.cells.length - 1].outerHTML = '';
  }

  if (field.rows[0].cells.length <= 2) {
    removeColumnButton.setAttribute('disabled', '');

    return;
  }

  if (field.rows[0].cells.length === 9) {
    appendColumnButton.removeAttribute('disabled');
  }
});
