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
    appendRowButton.disabled = true;

    return;
  }

  if (field.rows.length === ACTIVE_BUTTON_MIN_LINES) {
    removeRowButton.disabled = false;
  }
});

removeRowButton.addEventListener('click', (e) => {
  field.rows[0].outerHTML = '';

  if (field.rows.length < ACTIVE_BUTTON_MIN_LINES) {
    removeRowButton.disabled = true;

    return;
  }

  if (field.rows.length === ACTIVE_BUTTON_MAX_LINES) {
    appendRowButton.disabled = false;
  }
});

appendColumnButton.addEventListener('click', (e) => {
  for (const row of field.rows) {
    row.appendChild(document.createElement('td'));
  }

  if (field.rows[0].cells.length > ACTIVE_BUTTON_MAX_LINES) {
    appendColumnButton.disabled = true;

    return;
  }

  if (field.rows[0].cells.length === ACTIVE_BUTTON_MIN_LINES) {
    removeColumnButton.disabled = false;
  }
});

removeColumnButton.addEventListener('click', (e) => {
  for (const row of field.rows) {
    row.cells[row.cells.length - 1].outerHTML = '';
  }

  if (field.rows[0].cells.length < ACTIVE_BUTTON_MIN_LINES) {
    removeColumnButton.disabled = true;

    return;
  }

  if (field.rows[0].cells.length === ACTIVE_BUTTON_MAX_LINES) {
    appendColumnButton.disabled = false;
  }
});
