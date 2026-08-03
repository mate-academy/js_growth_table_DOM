'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const tableBody = table.firstElementChild;
const MAX = 10;
const MIN = 2;

appendRow.onclick = (e) => {
  if (table.rows.length === MAX) {
    return;
  }

  if (table.rows.length === MIN) {
    removeRow.disabled = false;
  }

  const newRow = document.createElement('tr');

  for (let i = 0; i < table.rows[0].children.length; i++) {
    newRow.append(document.createElement('td'));
  }

  tableBody.append(newRow);

  if (table.rows.length === MAX) {
    appendRow.disabled = true;
  }
};

removeRow.onclick = (e) => {
  if (table.rows.length === MAX) {
    appendRow.disabled = false;
  }

  tableBody.lastElementChild.remove();

  if (table.rows.length === MIN) {
    removeRow.disabled = true;
  }
};

appendColumn.onclick = (e) => {
  if (table.rows[0].children.length === MAX) {
    return;
  }

  if (table.rows[0].children.length === MIN) {
    removeColumn.disabled = false;
  }

  for (const row of table.rows) {
    row.append(document.createElement('td'));
  }

  if (table.rows[0].children.length === MAX) {
    appendColumn.disabled = true;
  }
};

removeColumn.onclick = (e) => {
  if (table.rows[0].children.length === MAX) {
    appendColumn.disabled = false;
  }

  for (const row of table.rows) {
    row.lastElementChild.remove();
  }

  if (table.rows[0].children.length === MIN) {
    removeColumn.disabled = true;
  }
};
