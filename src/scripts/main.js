'use strict';

// write code here
const buttonAppendRow = document.querySelector('.append-row');
const buttonRemoveRow = document.querySelector('.remove-row');
const buttonAppendColumn = document.querySelector('.append-column');
const buttonRemoveColumn = document.querySelector('.remove-column');

const table = document.querySelector('.field').tBodies[0];

buttonAppendRow.addEventListener('click', e => {
  table.append(table.lastElementChild.cloneNode(true));

  if (table.children.length === 10) {
    buttonAppendRow.disabled = true;
  }

  if (table.children.length > 2) {
    buttonRemoveRow.disabled = false;
  }
});

buttonRemoveRow.addEventListener('click', e => {
  table.lastElementChild.remove();

  if (table.children.length === 2) {
    buttonRemoveRow.disabled = true;
  }

  if (table.children.length < 10) {
    buttonAppendRow.disabled = false;
  }
});

buttonAppendColumn.addEventListener('click', e => {
  for (const row of table.rows) {
    row.append(row.lastElementChild.cloneNode(true));
  }

  if (table.firstElementChild.children.length === 10) {
    buttonAppendColumn.disabled = true;
  }

  if (table.firstElementChild.children.length > 2) {
    buttonRemoveColumn.disabled = false;
  }
});

buttonRemoveColumn.addEventListener('click', e => {
  for (const row of table.rows) {
    row.lastElementChild.remove();
  }

  if (table.firstElementChild.children.length === 2) {
    buttonRemoveColumn.disabled = true;
  }

  if (table.firstElementChild.children.length < 10) {
    buttonAppendColumn.disabled = false;
  }
});
