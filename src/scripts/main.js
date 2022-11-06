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
    delRow.disabled = false;
  }

  if (e.target === delRow) {
    deleteRow();
    addRow.disabled = false;
  }

  if (e.target === addColumn) {
    addNewColumn();
    delColumn.disabled = false;
  }

  if (e.target === delColumn) {
    deleteColumn();
    addColumn.disabled = false;
  }

  const rowsLength = table.children.length;
  const columnsLength = table.children[0].children.length;

  if (rowsLength >= maxLength) {
    addRow.disabled = true;
  }

  if (rowsLength <= minLength) {
    delRow.disabled = true;
  }

  if (columnsLength >= maxLength) {
    addColumn.disabled = true;
  }

  if (columnsLength <= minLength) {
    delColumn.disabled = true;
  }
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
