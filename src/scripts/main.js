'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const field = document.querySelector('.field');
const fieldBody = field.tBodies[0];

appendRow.addEventListener('click', e => {
  fieldBody.append(fieldBody.lastElementChild.cloneNode(true));

  if (fieldBody.rows.length >= 10) {
    appendRow.disabled = true;
  }

  removeRow.disabled = false;
});

removeRow.addEventListener('click', e => {
  fieldBody.lastElementChild.remove();

  if (fieldBody.rows.length <= 2) {
    removeRow.disabled = true;
  }

  appendRow.disabled = false;
});

appendColumn.addEventListener('click', e => {
  for (const row of fieldBody.rows) {
    row.append(row.lastElementChild.cloneNode(true));
  }

  if (fieldBody.rows[0].cells.length >= 10) {
    appendColumn.disabled = true;
  }

  removeColumn.disabled = false;
});

removeColumn.addEventListener('click', e => {
  for (const row of fieldBody.rows) {
    row.lastElementChild.remove();
  }

  if (fieldBody.rows[0].cells.length <= 2) {
    removeColumn.disabled = true;
  }

  appendColumn.disabled = false;
});
