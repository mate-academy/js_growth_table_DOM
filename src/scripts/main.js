'use strict';

/* eslint-disable */
const container = document.querySelector('.container');
const appendRowButton = container.querySelector('.append-row');
const removeRowButton = container.querySelector('.remove-row');
const appendColumnButton = container.querySelector('.append-column');
const removeColumnButton = container.querySelector('.remove-column');

const table = document.querySelector('.field tbody');

appendRowButton.addEventListener('click', () => {
  const rowLength = table.querySelectorAll('tr').length;
  const cellsValue = table.querySelector('tr').querySelectorAll('td').length;

  if (rowLength === 10) {
    return;
  }

  const newTr = document.createElement('tr');
  for (let i = 0; i < cellsValue; i++) {
    const newCeil = document.createElement('td');
    newTr.append(newCeil);
  }

  table.append(newTr);
})

removeRowButton.addEventListener('click', () => {
  const rowLength = table.querySelectorAll('tr').length;

  if (rowLength === 2) {
    return;
  }

  table.lastElementChild.remove();
})

appendColumnButton.addEventListener('click', () => {
  const rowLength = table.querySelectorAll('tr');
  const currentColumsValue = table.querySelector('tr').querySelectorAll('td').length;

  if (currentColumsValue === 10) {
    return;
  }

  for (const row of rowLength) {
    const newCeil = document.createElement('td');
    row.append(newCeil);
  }

})

removeColumnButton.addEventListener('click', () => {
  const rows = table.querySelectorAll('tr');
  const cellsValue = table.querySelector('tr').querySelectorAll('td').length;

  if (cellsValue === 2) {
    return;
  }

  for (const row of rows) {
    row.lastElementChild.remove();
  }
})
