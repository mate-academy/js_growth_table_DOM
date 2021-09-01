'use strict';

// write code here
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
  switch (e.target) {
    case appendRow:
      addRow();
      break;
    case removeRow:
      deleteRow();
      break;
    case appendColumn:
      addColumn();
      break;
    case removeColumn:
      deleteColumn();
      break;
  }
});

function addRow() {
  const tableBody = table.querySelector('tbody');
  const currentTr = Array.from(table.querySelectorAll('tr'));

  if (removeRow.hasAttribute('disabled')) {
    removeRow.removeAttribute('disabled');
  }

  if (tableBody.children.length < 10) {
    const row = tableBody.insertRow(0);

    for (let i = 0; i < currentTr[0].cells.length; i++) {
      row.insertCell(i);
    };
  }

  if (tableBody.children.length === 10) {
    appendRow.setAttribute('disabled', true);
  }
}

function deleteRow() {
  const tableBody = table.querySelector('tbody');

  if (appendRow.hasAttribute('disabled')) {
    appendRow.removeAttribute('disabled');
  }

  if (tableBody.children.length > 2) {
    tableBody.deleteRow(0);
  }

  if (tableBody.children.length === 2) {
    removeRow.setAttribute('disabled', true);
  }
}

function addColumn() {
  const tableBody = table.querySelector('tbody');

  if (removeColumn.hasAttribute('disabled')) {
    removeColumn.removeAttribute('disabled');
  }

  if (tableBody.children[0].children.length < 10) {
    for (let i = 0; i < tableBody.children.length; i++) {
      tableBody.children[i].innerHTML += `
        <td></td>
      `;
    }
  }

  if (tableBody.children[0].children.length === 10) {
    appendColumn.setAttribute('disabled', true);
  }
}

function deleteColumn() {
  const tableBody = table.querySelector('tbody');

  if (appendColumn.hasAttribute('disabled')) {
    appendColumn.removeAttribute('disabled');
  }

  if (tableBody.children[0].children.length > 2) {
    for (let i = 0; i < tableBody.children.length; i++) {
      tableBody.children[i].children[0].remove();
    }
  }

  if (tableBody.children[0].children.length === 2) {
    removeColumn.setAttribute('disabled', true);
  }
}
