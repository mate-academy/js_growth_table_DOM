'use strict';

const getElement = (element) => document.querySelector(element);
const modeOn = (element) => element.removeAttribute('disabled');
const modeOff = (element) => element.setAttribute('disabled', '');

const addRow = getElement('.append-row');
const removeRow = getElement('.remove-row');
const addColumn = getElement('.append-column');
const removeColumn = getElement('.remove-column');

const tbody = getElement('tbody');
const cell = getElement('td');

const allRows = document.getElementlementsByTagName('tr');

const minRowsLength = 2;
const maxRowsLength = 10;

addRow.addEventListener('click', () => {
  tbody.append(allRows[0].cloneNode(true));
  modeOn(removeRow);

  if (allRows.length === maxRowsLength) {
    modeOff(addRow);
  };
});

removeRow.addEventListener('click', () => {
  tbody.firstElementChild.remove();
  modeOn(addRow);

  if (allRows.length === minRowsLength) {
    modeOff(removeRow);
  };
});

addColumn.addEventListener('click', () => {
  modeOn(removeColumn);

  [...allRows].map(line => {
    line.append(cell.cloneNode(true));

    if (allRows[0].childElementCount === maxRowsLength) {
      modeOff(addColumn);
    }
  });
});

removeColumn.addEventListener('click', () => {
  modeOn(addColumn);

  [...allRows].map(line => {
    line.firstElementChild.remove();

    if (allRows[0].childElementCount === minRowsLength) {
      modeOff(removeColumn);
    }
  });
});
