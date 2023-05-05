'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('tbody');
const tableRows = document.getElementsByTagName('tr');

function checkDisabled(element, secondElement, condition, secondCondition) {
  if (!element.hasAttribute('disabled') && condition) {
    element.setAttribute('disabled', '');
  } else {
    element.removeAttribute('disabled');
  }

  if (!secondElement.hasAttribute('disabled') && secondCondition) {
    secondElement.setAttribute('disabled', '');
  } else {
    secondElement.removeAttribute('disabled');
  }
}

appendColumn.addEventListener('click', () => {
  if (tableRows[0].children.length <= 9) {
    addTableColumn();
  }

  checkDisabled(appendColumn, removeColumn, tableRows[0].children.length === 10,
    tableRows[0].children.length === 2
  );
});

removeColumn.addEventListener('click', () => {
  if (tableRows[0].children.length >= 3) {
    remoweTableColumn();
  }

  checkDisabled(appendColumn, removeColumn, tableRows[0].children.length === 10,
    tableRows[0].children.length === 2
  );
});

appendRow.addEventListener('click', () => {
  if (tableRows.length <= 9) {
    const tableRow = document.createElement('tr');

    for (let i = 0; i < tableRows[0].children.length; i++) {
      tableRow.append(document.createElement('td'));
    }

    checkDisabled(appendRow, removeRow, tableRows.length === 9,
      tableRows.length === 2);

    table.append(tableRow);
  }
});

removeRow.addEventListener('click', () => {
  if (tableRows.length >= 3) {
    table.removeChild(table.lastElementChild);
  };

  checkDisabled(appendRow, removeRow, tableRows.length === 9,
    tableRows.length === 2);
});

function addTableColumn() {
  for (const tableRowOne of tableRows) {
    const td = document.createElement('td');

    tableRowOne.append(td);
  }
}

function remoweTableColumn() {
  for (const tableRowOne of tableRows) {
    tableRowOne.removeChild(tableRowOne.children[0]);
  }
}
