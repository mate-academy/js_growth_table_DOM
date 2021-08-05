'use strict';

// write code here
const table = document.querySelector('tbody');

const appendRow = document.querySelector('.append-row');
const appendCol = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeCol = document.querySelector('.remove-column');

appendRow.addEventListener('click', () => {
  if (table.children.length < 10) {
    const newRow = table.rows[0].cloneNode(true);

    table.append(newRow);
  }

  if (table.children.length >= 10) {
    appendRow.disabled = true;
  } else {
    appendRow.disabled = false;
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  if (table.children.length > 2) {
    table.deleteRow(-1);
  }

  if (table.children.length === 2) {
    removeRow.disabled = true;
    appendRow.disabled = false;
  } else {
    removeRow.disabled = false;
    appendRow.disabled = false;
  }
});

appendCol.addEventListener('click', () => {
  if (table.children[0].children.length < 10) {
    for (const row of table.rows) {
      const selectedColumn = 0;

      row.insertBefore(
        row.children[selectedColumn].cloneNode(true)
        , row.children[table.rows[0].cells.length - 1]);
    }
  }

  if (table.children[0].children.length === 10) {
    appendCol.disabled = true;
    removeCol.disabled = false;
  } else {
    appendCol.disabled = false;
    removeCol.disabled = false;
  }
});

removeCol.addEventListener('click', () => {
  if (table.children[0].children.length > 2) {
    for (const row of table.rows) {
      row.deleteCell(0);
    };
  };

  if (table.children[0].children.length > 2) {
    removeCol.disabled = false;
    appendCol.disabled = false;
  } else {
    removeCol.disabled = true;
  }
});
