'use strict';

const addRowButton = document.querySelector('.append-row');
const deleteRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const deleteColumnButton = document.querySelector('.remove-column');
const tableBody = document.querySelector('.field tbody');

function addRow() {
  addRowButton.addEventListener('click', () => {
    if (tableBody.children.length < 10) {
      const rowCopy = tableBody.firstElementChild.cloneNode(true);

      tableBody.append(rowCopy);
    }

    if (tableBody.children.length > 2) {
      deleteRowButton.disabled = false;
    }

    if (tableBody.children.length === 10) {
      addRowButton.disabled = true;
    }
  });
}

function deleteRow() {
  deleteRowButton.addEventListener('click', () => {
    if (tableBody.children.length > 2) {
      tableBody.lastElementChild.remove();
    }

    if (tableBody.children.length === 2) {
      deleteRowButton.disabled = true;
    }

    if (tableBody.children.length < 10) {
      addRowButton.disabled = false;
    }
  });
}

function addColumn() {
  addColumnButton.addEventListener('click', () => {
    [...tableBody.children].forEach(item => {
      if (item.children.length < 10) {
        const copyColumn = item.lastElementChild.cloneNode(true);

        item.append(copyColumn);

        if (item.children.length > 2) {
          deleteColumnButton.disabled = false;
        }

        if (item.children.length === 10) {
          addColumnButton.disabled = true;
        }
      }
    });
  });
}

function deleteColumn() {
  deleteColumnButton.addEventListener('click', () => {
    [...tableBody.children].forEach(item => {
      if (item.children.length > 2) {
        item.lastElementChild.remove();

        if (item.children.length === 2) {
          deleteColumnButton.disabled = true;
        }

        if (item.children.length < 10) {
          addColumnButton.disabled = false;
        }
      }
    });
  });
}

addRow();
deleteRow();
addColumn();
deleteColumn();
