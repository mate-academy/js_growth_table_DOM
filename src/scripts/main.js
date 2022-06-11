'use strict';

const tBody = document.querySelector('tbody');
const appRow = document.querySelector('.append-row');
const remRow = document.querySelector('.remove-row');
const appCol = document.querySelector('.append-column');
const remCol = document.querySelector('.remove-column');

document.querySelector('.container').addEventListener('click', (e) => {
  const tabRows = document.querySelectorAll('tr');
  const tabRow = document.querySelector('tr');

  switch (e.target) {
    case appCol:

      for (const row of tabRows) {
        const td = document.createElement('td');

        row.appendChild(td);
      }
      break;

    case remCol:
      for (const row of tabRows) {
        row.removeChild(row.lastChild);
      }
      break;

    case appRow:
      tBody.appendChild(tabRow.cloneNode(true));
      break;

    case remRow:
      tBody.removeChild(tBody.lastChild);
  }

  remCol.disabled = tabRow.childElementCount === 2;
  appCol.disabled = tabRow.childElementCount === 10;
  remRow.disabled = tBody.childElementCount === 2;
  appRow.disabled = tBody.childElementCount === 10;

});
