'use strict';

const container = document.querySelector('.container');
let activeRows = [...document.querySelectorAll('tr')].length;
let activeColumns = [...document.querySelectorAll('td')].length / activeRows;
const tableField = document.querySelector('.field');
const addRowElement = document.querySelector('.append-row');
const removeRowElement = document.querySelector('.remove-row');
const addColumnElement = document.querySelector('.append-column');
const removeColumnElement = document.querySelector('.remove-column');

container.addEventListener('click', (e) => {
  const element = e.target.closest('button');

  if (!element) {
    return;
  }

  const action = element.getAttribute('class').split(' ')[0];

  switch (action) {
    case 'append-row':
      appendNewRow();
      break;
    case 'remove-row':
      removeRow();
      break;
    case 'append-column':
      appendNewColumn();
      break;
    case 'remove-column':
      removeColumn();
      break;
  }
});

function appendNewRow() {
  if (activeRows === 10) {
    return;
  }

  if (activeRows === 2) {
    removeRowElement.removeAttribute('disabled');
  }

  const newElement = document.createElement('tr');

  for (let i = 1; i <= activeColumns; i++) {
    const newColumn = document.createElement('td');

    newElement.appendChild(newColumn);
  }

  tableField.querySelector('tbody').appendChild(newElement);
  activeRows++;

  if (activeRows === 10) {
    addRowElement.setAttribute('disabled', 'true');
  }
}

function removeRow() {
  if (activeRows === 2) {
    return;
  }

  if (activeRows === 10) {
    addRowElement.removeAttribute('disabled');
  }

  const allRows = [...document.querySelectorAll('tr')];

  allRows[allRows.length - 1].remove();

  activeRows--;

  if (activeRows === 2) {
    removeRowElement.setAttribute('disabled', 'true');
  }
}

function appendNewColumn() {
  if (activeColumns === 10) {
    return;
  }

  if (activeColumns === 2) {
    removeColumnElement.disabled = false;
  }

  const allRows = [...document.querySelectorAll('tr')];

  allRows.forEach((row) => {
    const newColumn = document.createElement('td');

    row.appendChild(newColumn);
  });

  activeColumns++;

  if (activeColumns === 10) {
    addColumnElement.disabled = true;
  }
}

function removeColumn() {
  if (activeColumns === 2) {
    return;
  }

  if (activeColumns === 10) {
    addColumnElement.disabled = false;
  }

  const allRows = [...document.querySelectorAll('tr')];

  allRows.forEach((row) => {
    row.querySelector('td:last-child').remove();
  });

  activeColumns--;

  if (activeColumns === 2) {
    removeColumnElement.disabled = true;
  }
}
