'use strict';

const table = document.querySelector('table tbody');

const buttonAppendRow = document.querySelector('.append-row');
const buttonRemoveRow = document.querySelector('.remove-row');
const buttonAppendColumn = document.querySelector('.append-column');
const buttonRemoveColumn = document.querySelector('.remove-column');

const MAX_COUNT = 10;
const MIN_COUNT = 2;

function removeRow() {
  const elemTrList = table.querySelectorAll('tr');

  elemTrList[elemTrList.length - 1].remove();

  if (elemTrList.length - 1 <= MIN_COUNT) {
    buttonRemoveRow.setAttribute('disabled', '');
  }

  if (table.querySelectorAll('tr').length < MAX_COUNT) {
    buttonAppendRow.removeAttribute('disabled');
  }
}

function appendRow() {
  const trList = [...table.querySelectorAll('tr')];
  const elemRow = trList[0].outerHTML;

  table.insertAdjacentHTML('beforeend', elemRow);

  if ([...table.querySelectorAll('tr')].length >= MIN_COUNT) {
    buttonRemoveRow.removeAttribute('disabled');
  }

  if ([...table.querySelectorAll('tr')].length >= MAX_COUNT) {
    buttonAppendRow.setAttribute('disabled', '');
  }
}

function appendColumn() {
  const trList = [...table.querySelectorAll('tr')];

  // get quantity elements
  const quantityRowElement = [...trList[0].children];
  // get one HTML_element
  const elemColumn = quantityRowElement[0].outerHTML;

  trList.forEach((item) => {
    item.insertAdjacentHTML('beforeend', elemColumn);
  });

  if (table.querySelectorAll('tr')[0].children.length > MIN_COUNT) {
    buttonRemoveColumn.removeAttribute('disabled');
  }

  if (table.querySelectorAll('tr')[0].children.length >= MAX_COUNT) {
    buttonAppendColumn.setAttribute('disabled', '');
  }
}

function removeColumn() {
  const trList = [...table.querySelectorAll('tr')];

  trList.forEach((item, i) => {
    item.lastElementChild.remove();
  });

  if (table.querySelectorAll('tr')[0].children.length <= MIN_COUNT) {
    buttonRemoveColumn.setAttribute('disabled', '');
  }

  if (table.querySelectorAll('tr')[0].children.length < MAX_COUNT) {
    buttonAppendColumn.removeAttribute('disabled');
  }
}

buttonRemoveRow.addEventListener('click', removeRow);
buttonAppendRow.addEventListener('click', appendRow);
buttonAppendColumn.addEventListener('click', appendColumn);
buttonRemoveColumn.addEventListener('click', removeColumn);
