'use strict';

const container = document.querySelector('.container');
const maxCount = 10;
const minCount = 2;

container.addEventListener('click', (e) => {
  const appendRow = document.querySelector('.append-row');
  const removeRow = document.querySelector('.remove-row');
  const appendColumn = document.querySelector('.append-column');
  const removeColumn = document.querySelector('.remove-column');

  const table = document.querySelector('tbody');
  const contentOfRow = [...table.children];
  const rowsLength = table.children.length;
  const coloumnLenght = table.firstElementChild.children.length;

  if (e.target === appendRow) {
    if (rowsLength + 1 === maxCount) {
      appendRow.setAttribute('disabled', 'true');
    }

    if (removeRow.hasAttribute('disabled')) {
      removeRow.removeAttribute('disabled');
    }

    const newRow = table.insertRow();

    let count = table.firstElementChild.children.length;

    while (count > 0) {
      newRow.insertCell();
      count--;
    }
  }

  if (e.target === removeRow) {
    if (rowsLength - 1 === minCount) {
      removeRow.setAttribute('disabled', 'true');
    }

    if (appendRow.hasAttribute('disabled')) {
      appendRow.removeAttribute('disabled');
    }

    const lastRow = table.lastElementChild;

    lastRow.remove();
  }

  if (e.target === appendColumn) {
    if (removeColumn.hasAttribute('disabled')) {
      removeColumn.removeAttribute('disabled');
    }

    contentOfRow.forEach((element) => {
      element.insertCell();
    });

    if (coloumnLenght + 1 === maxCount) {
      appendColumn.setAttribute('disabled', 'true');
    }
  }

  if (e.target === removeColumn) {
    if (coloumnLenght - 1 === minCount) {
      removeColumn.setAttribute('disabled', 'true');
    }

    if (appendColumn.hasAttribute('disabled')) {
      appendColumn.removeAttribute('disabled');
    }

    contentOfRow.forEach((element) => {
      const lastCell = element.lastElementChild;

      lastCell.remove();
    });
  }
});
