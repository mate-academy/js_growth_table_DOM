'use strict';

const MIN_CLICK = 2;
const MAX_CLICK = 18;

const appendRow = document.querySelector('button.append-row');
const removeRow = document.querySelector('button.remove-row');
const appendColumn = document.querySelector('button.append-column');
const removeColumn = document.querySelector('button.remove-column');

const checkButton = () => {
  const table = document.querySelector('table.field');
  const trListElements = table.querySelectorAll('tr');
  const tdListLength = trListElements[0].querySelectorAll('td').length;

  appendRow.disabled = trListElements.length >= MAX_CLICK;
  removeRow.disabled = trListElements.length <= MIN_CLICK;
  appendColumn.disabled = tdListLength >= MAX_CLICK;
  removeColumn.disabled = tdListLength <= MIN_CLICK;
};

appendRow.addEventListener('click', (ev) => {
  const table = document.querySelector('table.field');
  const trListElements = document.querySelectorAll('tr');

  if (trListElements.length < MAX_CLICK) {
    const copyElement = trListElements[1].cloneNode(true);

    table.append(copyElement);
  }

  checkButton();
});

removeRow.addEventListener('click', () => {
  const trListElements = document.querySelectorAll('tr');

  if (trListElements.length > MIN_CLICK) {
    const lastRow = trListElements[trListElements.length - 1];

    lastRow.remove();
  }
  checkButton();
});

appendColumn.addEventListener('click', () => {
  const trListElements = document.querySelectorAll('tr');

  trListElements.forEach((trElem) => {
    const tdListLength = trElem.querySelectorAll('td').length;

    if (tdListLength < MAX_CLICK) {
      trElem.append(document.createElement('td'));
    }
  });
  checkButton();
});

removeColumn.addEventListener('click', () => {
  const trListElements = document.querySelectorAll('tr');

  trListElements.forEach((trElem) => {
    const tdListLength = trElem.querySelectorAll('td');

    if (tdListLength.length > MIN_CLICK) {
      const lastColumn = tdListLength[tdListLength.length - 1];

      lastColumn.remove();
    }
  });
  checkButton();
});

checkButton();
