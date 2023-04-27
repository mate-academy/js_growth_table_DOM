'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

appendRow.onclick = () => {
  if (table.rows.length < 10) {
    const newRow = table.rows[0].cloneNode(true);

    table.append(newRow);
    removeRow.disabled = false;
  }

  if (table.rows.length >= 10) {
    appendRow.disabled = true;
  }
};

removeRow.onclick = () => {
  if (table.rows.length > 2) {
    table.deleteRow(0);
    appendRow.disabled = false;
  }

  if (table.rows.length <= 2) {
    removeRow.disabled = true;
  }
};

appendColumn.onclick = () => {
  if (table.rows[0].children.length < 10) {
    [...table.rows].forEach((row) => {
      row.insertCell(0);
    });
    removeColumn.disabled = false;
  }

  if (table.rows[0].children.length >= 10) {
    appendColumn.disabled = true;
  }
};

removeColumn.onclick = () => {
  if (table.rows[0].children.length > 2) {
    [...table.rows].forEach((row) => {
      row.deleteCell(0);
    });
    appendColumn.disabled = false;
  }

  if (table.rows[0].children.length <= 2) {
    removeColumn.disabled = true;
  }
};
