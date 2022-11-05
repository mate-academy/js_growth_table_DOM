'use strict';

const getE = (element) => document.querySelector(element);
const modeOn = (element) => element.removeAttribute('disabled');
const modeOff = (element) => element.setAttribute('disabled', '');

const addRow = getE('.append-row');
const removeRow = getE('.remove-row');
const addColumn = getE('.append-column');
const removeColumn = getE('.remove-column');

const tbody = getE('tbody');
const cell = getE('td');

const allRows = document.getElementsByTagName('tr');

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
