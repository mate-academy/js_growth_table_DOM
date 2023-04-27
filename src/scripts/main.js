'use strict';

const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

appendRow.onclick = () => {
  if (table.rows.length < 10) {
    const newRow = tbody.children[0].cloneNode(true);

    table.append(newRow);
  }
};

removeRow.onclick = () => {
  if (table.rows.length > 2) {
    table.deleteRow(0);
  }
};

appendColumn.onclick = () => {
  if (table.rows[0].children.length < 10) {
    [...table.rows].forEach((row) => {
      row.insertCell(0);
    });
  }
};

removeColumn.onclick = () => {
  if (table.rows[0].children.length > 2) {
    [...table.rows].forEach((row) => {
      row.deleteCell(0);
    });
  }
};
