'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('tbody');

let numRow = 4;
let numColumn = 4;

appendRow.addEventListener('click', () => {
  const tr = document.createElement('tr');

  for (let i = 0; i < numColumn; i++) {
    const td = document.createElement('td');

    tr.appendChild(td);
  }

  table.append(tr);
  numRow += 1;

  if (numRow === 10) {
    appendRow.disabled = true;
  }

  if (numRow >= 2) {
    removeRow.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  const tr = table.querySelectorAll('tr');
  const lastRow = tr[tr.length - 1];

  lastRow.parentNode.removeChild(lastRow);
  numRow -= 1;

  if (numRow <= 10) {
    appendRow.disabled = false;
  }

  if (numRow === 2) {
    removeRow.disabled = true;
  }
});

appendColumn.addEventListener('click', () => {
  const tr = table.querySelectorAll('tr');

  tr.forEach((element) => {
    const td = document.createElement('td');

    element.appendChild(td);
  });

  numColumn += 1;

  if (numColumn === 10) {
    appendColumn.disabled = true;
  }

  if (numColumn >= 2) {
    removeColumn.disabled = false;
  }
});

removeColumn.addEventListener('click', () => {
  const tr = table.querySelectorAll('tr');

  tr.forEach((element) => {
    element.removeChild(element.lastElementChild);
  });

  numColumn -= 1;

  if (numColumn <= 10) {
    appendColumn.disabled = false;
  }

  if (numColumn === 2) {
    removeColumn.disabled = true;
  }
});
