'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const minCount = 2;
const maxCount = 10;

const table = document.querySelector('tbody');

addColumn.addEventListener('click', (e) => {
  const cells = [...table.rows[0].cells];

  if (cells.length < maxCount) {
    [...table.rows].forEach(row => {
      row.append(row.cells[0].cloneNode(true));
    });
  };

  if (cells.length === maxCount - 1) {
    addColumn.disabled = true;
  };

  getEnable(removeColumn);
});

removeColumn.addEventListener('click', (e) => {
  const cells = [...table.rows[0].cells];

  if (cells.length > minCount) {
    [...table.rows].forEach(row => {
      row.cells[0].remove();
    });
  };

  if (cells.length === minCount + 1) {
    removeColumn.disabled = true;
  };

  getEnable(addColumn);
});

addRow.addEventListener('click', (e) => {
  if ([...table.rows].length < maxCount) {
    table.append([...table.rows][0].cloneNode(true));
  };

  if ([...table.rows].length === maxCount) {
    addRow.disabled = true;
  };

  getEnable(removeRow);
});

removeRow.addEventListener('click', (e) => {
  if ([...table.rows].length > minCount) {
    [...table.rows][0].remove();
  };

  if ([...table.rows].length === minCount) {
    removeRow.disabled = true;
  };

  getEnable(addRow);
});

function getEnable(button) {
  if (button.disabled === true) {
    button.disabled = false;
  };
};
