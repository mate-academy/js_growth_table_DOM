'use strict';

const addColumn = document.querySelector('.append-column');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');
const tableBody = document.querySelector('.field').tBodies;
const maxElements = 10;
const minElements = 2;

const removeDisabled = (condition, element) => {
  if (condition && element.disabled) {
    element.disabled = false;
  };
};
const addDisabled = (condition, element) => {
  if (condition && !element.disabled) {
    element.disabled = true;
  };
};

addRow.addEventListener('click', (e) => {
  const cloneRow = tableBody[0].firstElementChild.cloneNode(true);

  tableBody[0].prepend(cloneRow);

  const lengthRows = tableBody[0].rows.length;

  removeDisabled((lengthRows > minElements), removeRow);
  addDisabled((lengthRows >= maxElements), e.target);
});

removeRow.addEventListener('click', (e) => {
  tableBody[0].deleteRow(-1);

  const lengthRows = tableBody[0].rows.length;

  addDisabled((lengthRows <= minElements), e.target);
  removeDisabled((lengthRows < maxElements), addRow);
});

addColumn.addEventListener('click', (e) => {
  const arrRows = [...tableBody[0].rows];

  const lengthCells = arrRows[0].cells.length;

  removeDisabled((lengthCells > minElements), removeColumn);
  addDisabled((lengthCells >= maxElements), e.target);
});

removeColumn.addEventListener('click', (e) => {
  const arrRows = [...tableBody[0].rows];

  arrRows.forEach((row) => {
    row.deleteCell(-1);
  });

  const lengthCells = arrRows[0].cells.length;

  removeDisabled((lengthCells < maxElements), addColumn);
  addDisabled((lengthCells <= minElements), e.target);
});
