'use strict';

const addRow = document.querySelector('.append-row');
const addColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');
const tableField = document.querySelector('.field > tbody');
let tableitems = tableField.querySelectorAll('tr');

addRow.addEventListener('click', () => {
  removeRow.removeAttribute('disabled');
  tableField.append(tableitems[0].cloneNode(true));
  tableitems = tableField.querySelectorAll('tr');

  if (tableitems.length > 9) {
    addRow.setAttribute('disabled', true);
  };
});

removeRow.addEventListener('click', () => {
  addRow.removeAttribute('disabled');
  tableField.lastElementChild.remove();
  tableitems = tableField.querySelectorAll('tr');

  if (tableitems.length <= 2) {
    removeRow.setAttribute('disabled', true);
  };
});

addColumn.addEventListener('click', () => {
  removeColumn.removeAttribute('disabled');
  [...tableitems].map(el => el.append(el.lastElementChild.cloneNode()));

  if ([...tableitems][0].children.length > 9) {
    addColumn.setAttribute('disabled', true);
  };
});

removeColumn.addEventListener('click', () => {
  addColumn.removeAttribute('disabled');
  [...tableitems].map(el => el.lastElementChild.remove());

  if ([...tableitems][0].children.length <= 2) {
    removeColumn.setAttribute('disabled', true);
  };
});
