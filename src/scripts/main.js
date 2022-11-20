'use strict';

const tableBody = document.querySelector('tbody');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

let rowCount = [...tableBody.children].length;
let columnCount = [...document.querySelector('tr').children].length;

const appendRow = function(e) {
  if (rowCount === 2) {
    removeRowButton.disabled = false;
  }

  const newRow = document.createElement('tr');

  for (let i = 1; i <= columnCount; i++) {
    newRow.append(document.createElement('td'));
  };

  tableBody.append(newRow);
  rowCount++;

  if (rowCount === 10) {
    appendRowButton.disabled = true;
  }
};

const removeRow = function(e) {
  if (rowCount === 10) {
    appendRowButton.disabled = false;
  }

  tableBody.children[0].remove();
  rowCount--;

  if (rowCount === 2) {
    removeRowButton.disabled = true;
  }
};

const appendColumn = function(e) {
  if (columnCount === 2) {
    removeColumnButton.disabled = false;
  }

  [...tableBody.children].forEach(tr => {
    tr.append(document.createElement('td'));
  });

  columnCount++;

  if (columnCount === 10) {
    appendColumnButton.disabled = true;
  }
};

const removeColumn = function(e) {
  if (columnCount === 10) {
    appendColumnButton.disabled = false;
  };

  [...tableBody.children].forEach(tr => {
    tr.children[0].remove();
  });

  columnCount--;

  if (columnCount === 2) {
    removeColumnButton.disabled = true;
  }
};

appendRowButton.addEventListener('click', appendRow);
removeRowButton.addEventListener('click', removeRow);
appendColumnButton.addEventListener('click', appendColumn);
removeColumnButton.addEventListener('click', removeColumn);
