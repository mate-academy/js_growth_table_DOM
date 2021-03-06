'use strict';

// write code here

const body = document.querySelector('body');
const table = document.querySelector('tbody');
const tr = document.querySelector('tr');
let tdLength = tr.querySelectorAll('td').length;
let trLength = table.querySelectorAll('tr').length;

body.addEventListener('click', (e) => {
  const addRow = document.querySelector('.append-row');
  const remRow = document.querySelector('.remove-row');
  const addColumn = document.querySelector('.append-column');
  const remColumn = document.querySelector('.remove-column');

  if (trLength === 10 || tdLength === 10) {
    return;
  }

  switch (e.target) {
    case addRow:
      table.append(tr.cloneNode(true));
      trLength += 1;
      break;
    case remRow:
      table.lastElementChild.remove();
      trLength -= 1;
      break;
    case addColumn:
      for (const elem of table.querySelectorAll('tr')) {
        const td = document.createElement('td');

        elem.append(td);
      }
      tdLength += 1;
      break;
    case remColumn:
      for (const elem of table.querySelectorAll('tr')) {
        elem.firstElementChild.remove();
      }
      tdLength -= 1;
      break;
  }

  if (trLength === 10) {
    document.querySelector('.append-row').disabled = true;
    document.querySelector('.remove-row').disabled = false;
  }

  if (trLength === 2) {
    document.querySelector('.remove-row').disabled = true;
    document.querySelector('.append-row').disabled = false;
  }

  if (tdLength === 10) {
    document.querySelector('.append-column').disabled = true;
    document.querySelector('.remove-column').disabled = false;
  }

  if (tdLength === 2) {
    document.querySelector('.remove-column').disabled = true;
    document.querySelector('.append-column').disabled = false;
  }
});
