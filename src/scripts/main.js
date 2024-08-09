'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const field = document.querySelector('table').tBodies.item(0);

appendRowButton.addEventListener('click', () => {
  if (field.rows.length >= 10) {
    return;
  }

  const newRow = field.insertRow();
  const firstRowLength = field.rows.item(0).children.length;

  for (let i = 0; i < firstRowLength; i++) {
    newRow.insertCell(i);
  }

  if (field.rows.length >= 10) {
    appendRowButton.disabled = true;
  }

  if (field.rows.length > 2) {
    removeRowButton.disabled = false;
  }
});

appendColumnButton.addEventListener('click', () => {
  const firstRowLength = field.rows.item(0).children.length;

  if (firstRowLength >= 10) {
    return;
  }

  for (let i = 0; i < field.rows.length; i++) {
    field.rows[i].insertCell();
  }

  const firstRowLengthAfterAdd = field.rows.item(0).children.length;

  if (firstRowLengthAfterAdd >= 10) {
    appendColumnButton.disabled = true;
  }

  if (firstRowLengthAfterAdd > 2) {
    removeColumnButton.disabled = false;
  }
});

removeRowButton.addEventListener('click', () => {
  if (field.rows.length <= 2) {
    return;
  }

  field.deleteRow(field.rows.length - 1);

  if (field.rows.length <= 2) {
    removeRowButton.disabled = true;
  }

  if (field.rows.length < 10) {
    appendRowButton.disabled = false;
  }
});

removeColumnButton.addEventListener('click', () => {
  const firstRowLength = field.rows.item(0).children.length;

  if (firstRowLength <= 2) {
    return;
  }

  for (let i = 0; i < field.rows.length; i++) {
    field.rows[i].deleteCell(field.rows.item(0).children.length - 1);
  }

  const firstRowLengthAfterAdd = field.rows.item(0).children.length;

  if (firstRowLengthAfterAdd <= 2) {
    removeColumnButton.disabled = true;
  }

  if (firstRowLengthAfterAdd < 10) {
    appendColumnButton.disabled = false;
  }
});
