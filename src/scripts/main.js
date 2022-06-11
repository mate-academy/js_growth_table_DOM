'use strict';

const tBody = document.querySelector('tbody');
const appRow = document.querySelector('.append-row');
const remRow = document.querySelector('.remove-row');
const appCol = document.querySelector('.append-column');
const remCol = document.querySelector('.remove-column');

appCol.addEventListener('click', (e) => {
  const tabRows = document.querySelectorAll('tr');

  for (const row of tabRows) {
    const td = document.createElement('td');

    row.appendChild(td);

    if (row.childElementCount === 3) {
      remCol.disabled = false;
    }

    if (row.childElementCount === 10) {
      appCol.disabled = true;
    }
  }
});

remCol.addEventListener('click', (e) => {
  const tabRows = document.querySelectorAll('tr');

  for (const row of tabRows) {
    row.removeChild(row.lastChild);

    if (row.childElementCount === 2) {
      remCol.disabled = true;
    }

    if (row.childElementCount === 9) {
      appCol.disabled = false;
    }
  }
});

appRow.addEventListener('click', (e) => {
  const tabRow = document.querySelector('tr');

  tBody.appendChild(tabRow.cloneNode(true));

  if (tBody.childElementCount === 3) {
    remRow.disabled = false;
  }

  if (tBody.childElementCount === 10) {
    appRow.disabled = true;
  }
});

remRow.addEventListener('click', (e) => {
  tBody.removeChild(tBody.lastChild);

  if (tBody.childElementCount === 2) {
    remRow.disabled = true;
  }

  if (tBody.childElementCount === 9) {
    appRow.disabled = false;
  }
});
