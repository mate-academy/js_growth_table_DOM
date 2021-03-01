'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const tableBody = document.querySelector('tbody');
const tableRow = document.querySelector('tr');
const minElements = 3;
const maxElements = 10;

function addRow() {
  removeRow.disabled = false;
  tableBody.append(tableRow.cloneNode('cloned'));

  if (tableBody.children.length === maxElements) {
    appendRow.disabled = true;
  }
}

function deleteRow() {
  appendRow.disabled = false;
  tableBody.children[tableBody.children.length - 1].remove();

  if (tableBody.children.length < minElements) {
    removeRow.disabled = true;
  }
}

function addColumn() {
  removeColumn.disabled = false;

  [...tableBody.rows].forEach(
    row => {
      const clonedElement = row.cells[0].cloneNode(true);

      row.insertBefore(clonedElement, row.cells[0]);
    }
  );

  if (tableRow.children.length === maxElements) {
    appendColumn.disabled = true;
  }
}

function deleteColumn() {
  appendColumn.disabled = false;

  [...tableBody.rows].forEach(
    row => row.children[row.children.length - 1].remove()
  );

  if (tableRow.children.length < minElements) {
    removeColumn.disabled = true;
  }
}

appendRow.addEventListener('click', addRow);
removeRow.addEventListener('click', deleteRow);
appendColumn.addEventListener('click', addColumn);
removeColumn.addEventListener('click', deleteColumn);
