'use strict';

const findE = (element) => document.querySelector(element);
const modeOn = (element) => element.removeAttribute('disabled');
const modeOff = (element) => element.setAttribute('disabled', '');

const addRow = findE('.append-row');
const removeRow = findE('.remove-row');
const addColumn = findE('.append-column');
const removeColumn = findE('.remove-column');

const tbody = findE('tbody');
const cell = findE('td');

const allRows = document.getElementsByTagName('tr');

addRow.addEventListener('click', () => {
  tbody.append(allRows[0].cloneNode(true));
  modeOn(removeRow);

  if (allRows.length === 10) {
    modeOff(addRow);
  };
});

removeRow.addEventListener('click', () => {
  tbody.firstElementChild.remove();
  modeOn(addRow);

  if (allRows.length === 2) {
    modeOff(removeRow);
  };
});

addColumn.addEventListener('click', () => {
  modeOn(removeColumn);

  [...allRows].map(line => {
    line.append(cell.cloneNode(true));

    if (allRows[0].childElementCount === 10) {
      modeOff(addColumn);
    }
  });
});

removeColumn.addEventListener('click', () => {
  modeOn(addColumn);

  [...allRows].map(line => {
    line.firstElementChild.remove();

    if (allRows[0].childElementCount === 2) {
      modeOff(removeColumn);
    }
  });
});
