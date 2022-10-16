'use strict';

const tableBody = document.querySelector('tbody');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const disableButtons = (node, append, remove) => {
  const minCount = 2;
  const maxCount = 10;

  if (node.children.length === maxCount) {
    append.disabled = true;
  }

  if (node.children.length > minCount) {
    remove.disabled = false;
  }

  if (node.children.length === minCount) {
    remove.disabled = true;
  }

  if (node.children.length < maxCount) {
    append.disabled = false;
  }
};

const addRow = () => {
  tableBody.append(tableBody.lastElementChild.cloneNode(true));
  disableButtons(tableBody, appendRow, removeRow);
};

const deleteRow = () => {
  tableBody.lastElementChild.remove();
  disableButtons(tableBody, appendRow, removeRow);
};

const addCell = () => {
  [...tableBody.children].forEach(row => {
    row.append(row.lastElementChild.cloneNode(true));
    disableButtons(row, appendColumn, removeColumn);
  });
};

const deleteCell = () => {
  [...tableBody.children].forEach(row => {
    row.lastElementChild.remove();
    disableButtons(row, appendColumn, removeColumn);
  });
};

appendRow.addEventListener('click', addRow);
removeRow.addEventListener('click', deleteRow);
appendColumn.addEventListener('click', addCell);
removeColumn.addEventListener('click', deleteCell);
