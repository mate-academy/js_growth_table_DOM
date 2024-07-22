'use strict';

const ACTIVE_BUTTON_MAX_LINES = 9;
const ACTIVE_BUTTON_MIN_LINES = 3;

const field = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

appendRowButton.addEventListener('click', (e) => {
  const row = field.rows[0].cloneNode(true);

  field.firstElementChild.appendChild(row);

  if (field.rows.length > ACTIVE_BUTTON_MAX_LINES) {
    appendRowButton.setAttribute('disabled', '');

    return;
  }

  if (field.rows.length === ACTIVE_BUTTON_MIN_LINES) {
    removeRowButton.removeAttribute('disabled');
  }
});

removeRowButton.addEventListener('click', (e) => {
  field.rows[0].outerHTML = '';

  if (field.rows.length < ACTIVE_BUTTON_MIN_LINES) {
    removeRowButton.setAttribute('disabled', '');

    return;
  }

  if (field.rows.length === ACTIVE_BUTTON_MAX_LINES) {
    appendRowButton.removeAttribute('disabled');
  }
});

appendColumnButton.addEventListener('click', (e) => {
  for (const row of field.rows) {
    row.appendChild(document.createElement('td'));
  }

  if (field.rows[0].cells.length > ACTIVE_BUTTON_MAX_LINES) {
    appendColumnButton.setAttribute('disabled', '');

    return;
  }

  if (field.rows[0].cells.length === ACTIVE_BUTTON_MIN_LINES) {
    removeColumnButton.removeAttribute('disabled');
  }
});

removeColumnButton.addEventListener('click', (e) => {
  for (const row of field.rows) {
    row.cells[row.cells.length - 1].outerHTML = '';
  }

  if (field.rows[0].cells.length < ACTIVE_BUTTON_MIN_LINES) {
    removeColumnButton.setAttribute('disabled', '');

    return;
  }

  if (field.rows[0].cells.length === ACTIVE_BUTTON_MAX_LINES) {
    appendColumnButton.removeAttribute('disabled');
  }
});
