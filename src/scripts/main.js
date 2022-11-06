'use strict';

const table = document.querySelector('tbody');
const addRow = document.querySelector('.append-row');
const delRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const delColumn = document.querySelector('.remove-column');
const minLength = 2;
const maxLength = 10;

document.body.addEventListener('click', (e) => {
  if (e.target === addRow) {
    addNewRow();
  }

  if (e.target === delRow) {
    deleteRow();
  }

  if (e.target === addColumn) {
    addNewColumn();
  }

  if (e.target === delColumn) {
    deleteColumn();
  }

  const rowsLength = table.children.length;
  const columnsLength = table.children[0].children.length;

  addRow.disabled = rowsLength >= maxLength;
  delRow.disabled = rowsLength <= minLength;
  addColumn.disabled = columnsLength >= maxLength;
  delColumn.disabled = columnsLength <= minLength;
});

function addNewRow() {
  table.append(table.children[0].cloneNode(true));
};

function deleteRow() {
  table.lastElementChild.remove();
};

function addNewColumn() {
  for (const el of table.children) {
    el.append(el.firstElementChild.cloneNode());
  }
};

function deleteColumn() {
  for (const el of table.children) {
    el.firstElementChild.remove();
  }
};
