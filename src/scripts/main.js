'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('.field');

const tableRow = table.children[0].children;
const tableColumn = table.children[0].children[0].children;
const tbody = table.tBodies[0];

container.addEventListener('click', (event) => {
  const item = event.target;

  const createTr = document.createElement('tr');
  let createTd = document.createElement('td');

  const buttonApRow = document.querySelector('.append-row');
  const buttonRemRow = document.querySelector('.remove-row');
  const buttonApCol = document.querySelector('.append-column');
  const buttonRemCol = document.querySelector('.remove-column');

  switch (item.classList[0]) {
    case 'append-row':
      for (let i = 0; i < tableColumn.length; i++) {
        createTd = document.createElement('td');
        createTr.append(createTd);
      }
      tbody.append(createTr);

      if (tableRow.length === 10) {
        buttonApRow.disabled = true;
        break;
      }

      if (tableRow.length > 2 && tableRow.length < 10) {
        buttonRemRow.disabled = false;
        break;
      }
      break;
    case 'remove-row':
      tbody.lastElementChild.parentNode.removeChild(tbody.lastElementChild);

      if (tableRow.length === 2) {
        buttonRemRow.disabled = true;
        break;
      }

      if (tableRow.length < 10) {
        buttonApRow.disabled = false;
        break;
      }

      break;
    case 'append-column':
      for (let i = 0; i < tableRow.length; i++) {
        createTd = document.createElement('td');
        tableRow[i].append(createTd);
      }

      if (tableColumn.length > 2 && tableColumn.length < 10) {
        buttonRemCol.disabled = false;
        break;
      }

      if (tableColumn.length === 10) {
        buttonApCol.disabled = true;
        break;
      }
      break;
    case 'remove-column':
      for (let i = 0; i < tableRow.length; i++) {
        tableRow[i].lastElementChild.parentNode
          .removeChild(tableRow[i].lastElementChild);
      }

      if (tableColumn.length === 2) {
        buttonRemCol.disabled = true;
        break;
      }

      if (tableColumn.length < 10 && tableColumn.length > 2) {
        buttonApCol.disabled = false;
        break;
      }
      break;
  }
});
