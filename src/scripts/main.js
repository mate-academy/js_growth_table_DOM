'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const table = document.querySelector('tbody');
const tableRow = document.querySelector('tr');
const minElements = 2;
const maxElements = 10;

function addRow(e) {
  if (e.target === appendRow) {
    table.prepend(tableRow.cloneNode('cloned'));
    removeRow.disabled = false;
  };

  if (table.children.length >= maxElements) {
    appendRow.disabled = true;
  }
}

function deleteRow(e) {
  if (e.target === removeRow) {
    table.children[table.children.length - 1].remove();
    appendRow.disabled = false;
  };

  if (table.children.length === minElements) {
    removeRow.disabled = true;
  }
}

function addColumn(e) {
  if (e.target === appendColumn) {
    [...table.rows].forEach(
      row => {
        const clonedElement = row.cells[0].cloneNode(true);

        row.insertBefore(clonedElement, row.cells[0]);
      });
    removeColumn.disabled = false;
  };

  if (tableRow.children.length >= maxElements) {
    appendColumn.disabled = true;
  }
}

function deleteColumn(e) {
  if (e.target === removeColumn) {
    [...table.rows].forEach(
      row => row.children[row.children.length - 1].remove()
    );
    appendColumn.disabled = false;
  };

  if (tableRow.children.length === minElements) {
    removeColumn.disabled = true;
  }
}

appendRow.addEventListener('click', addRow);
removeRow.addEventListener('click', deleteRow);
appendColumn.addEventListener('click', addColumn);
removeColumn.addEventListener('click', deleteColumn);
