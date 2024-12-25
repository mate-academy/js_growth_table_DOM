'use strict';

// write code here
const tbody = document.querySelector('tbody');

const firstRow = document.querySelector('tr');

const rowCount = () => tbody.childElementCount;
const columnsCount = () => firstRow.childElementCount;

const minCount = 2;
const maxCount = 10;

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const setDisabled = (addBtn, removeBtn, counter) => {
  const setFunc = (btn) => {
    btn.setAttribute('disabled', '');
  };

  const removeFunc = (btn) => {
    if (btn.hasAttribute('disabled')) {
      btn.removeAttribute('disabled');
    }
  };

  if (counter === minCount) {
    setFunc(removeBtn);
  }

  if (counter > minCount) {
    removeFunc(removeBtn);
  }

  if (counter === maxCount) {
    setFunc(addBtn);
  }

  if (counter < maxCount) {
    removeFunc(addBtn);
  }
};

addRow.addEventListener('click', () => {
  const newRow = firstRow.cloneNode(true);

  if (rowCount() < maxCount) {
    tbody.appendChild(newRow);
  }

  setDisabled(addRow, removeRow, rowCount());
});

addColumn.addEventListener('click', () => {
  const newColumn = document.createElement('td');

  if (columnsCount() < maxCount) {
    for (const row of tbody.children) {
      const columnCopy = newColumn.cloneNode(true);

      row.append(columnCopy);
    }
  }

  setDisabled(addColumn, removeColumn, columnsCount());
});

removeRow.addEventListener('click', () => {
  if (rowCount() > minCount) {
    tbody.lastElementChild.remove();

    setDisabled(addRow, removeRow, rowCount());
  }
});

removeColumn.addEventListener('click', () => {
  if (columnsCount() > minCount) {
    for (const row of tbody.children) {
      row.lastElementChild.remove();
    }
  }

  setDisabled(addColumn, removeColumn, columnsCount());
});
