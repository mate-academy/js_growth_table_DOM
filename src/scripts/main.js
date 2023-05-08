/* eslint-disable max-len */
'use strict';

// table dom element
const tableElement = document.querySelector('.field');
// buttons
const addRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const addColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const table = {
  width: 4,
  height: 4,
  minSize: 2,
  maxSize: 10,
};

addRowBtn.addEventListener('click', (e) => {
  tableElement.append(tableElement.rows[tableElement.rows.length - 1].cloneNode(true));
  removeRowBtn.disabled = false;
  table.height++;

  if (table.height >= table.maxSize) {
    e.target.disabled = true;
  }
});

removeRowBtn.addEventListener('click', (e) => {
  tableElement.rows[tableElement.rows.length - 1].remove();
  addRowBtn.disabled = false;
  table.height--;

  if (table.height <= table.minSize) {
    e.target.disabled = true;
  }
});

addColumnBtn.addEventListener('click', (e) => {
  for (const row of tableElement.rows) {
    row.insertAdjacentHTML('beforeend', '<td></td>');
  }
  removeColumnBtn.disabled = false;
  table.width++;

  if (table.width >= table.maxSize) {
    e.target.disabled = true;
  }
});

removeColumnBtn.addEventListener('click', (e) => {
  for (const row of tableElement.rows) {
    row.lastElementChild.remove();
  }
  addColumnBtn.disabled = false;
  table.width--;

  if (table.width <= table.minSize) {
    e.target.disabled = true;
  }
});
