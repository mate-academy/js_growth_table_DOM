'use strict';

const APPEND_ACTIONS = 'append';
const REMOVE_ACTION = 'remove';

function changeRow(action) {
  const tableElement = document.querySelector('table');
  const rowElement = tableElement.rows[0];

  if (action === REMOVE_ACTION) {
    rowElement.remove();
  } else {
    const trElement = document.querySelector('tr');

    trElement.before(rowElement.cloneNode(true));
  }

  const rowLength = tableElement.rows.length;
  const appendButton = document.querySelector('.append-row');
  const removeButton = document.querySelector('.remove-row');

  disableButton(appendButton, removeButton, rowLength);
}

function changeColumn(action) {
  const trElements = Object.values(document.getElementsByTagName('tr'));

  trElements.forEach((element) => {
    if (action === APPEND_ACTIONS) {
      const tdElement = element.cells[0].cloneNode();

      element.append(tdElement);
    } else {
      const tdElement = element.cells[0];

      tdElement.remove();
    }
  });

  const cellsLength = trElements[0].cells.length;
  const appendButton = document.querySelector('.append-column');
  const removeButton = document.querySelector('.remove-column');

  disableButton(appendButton, removeButton, cellsLength);
}

function disableButton(appendButton, removeButton, elementLength) {
  if (elementLength >= 10) {
    appendButton.disabled = 'true';
    removeButton.disabled = '';
  } else if (elementLength <= 2) {
    appendButton.disabled = '';
    removeButton.disabled = 'true';
  } else {
    appendButton.disabled = '';
    removeButton.disabled = '';
  }
}

document.querySelector('.append-row').onclick = () => changeRow(APPEND_ACTIONS);

document.querySelector('.remove-row').onclick = () => changeRow(REMOVE_ACTION);

document.querySelector('.append-column').onclick = () =>
  changeColumn(APPEND_ACTIONS);

document.querySelector('.remove-column').onclick = () =>
  changeColumn(REMOVE_ACTION);
