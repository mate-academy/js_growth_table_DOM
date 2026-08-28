'use strict';

const apRow = document.querySelector('.append-row');
const delRow = document.querySelector('.remove-row');
const apColumn = document.querySelector('.append-column');
const delColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');

let countRows = 4;
let countColumns = 4;

function check() {
  apRow.disabled = countRows === 10;
  delRow.disabled = countRows === 2;
  apColumn.disabled = countColumns === 10;
  delColumn.disabled = countColumns === 2;
}

apRow.addEventListener('click', () => {
  if (countRows === 10) {
    return;
  }

  const newRow = table.insertRow(-1);

  for (let i = 0; i < countColumns; i++) {
    newRow.insertCell(-1);
  }

  countRows++;
  check();
});

delRow.addEventListener('click', () => {
  if (countRows === 2) {
    return;
  }

  table.deleteRow(-1);

  countRows--;
  check();
});

apColumn.addEventListener('click', () => {
  if (countColumns === 10) {
    return;
  }

  const list = table.querySelectorAll('tr');

  list.forEach((str) => {
    str.insertCell(-1);
  });

  countColumns++;
  check();
});

delColumn.addEventListener('click', () => {
  if (countColumns === 2) {
    return;
  }

  const list = table.querySelectorAll('tr');

  list.forEach((str) => {
    const lastCell = str.querySelector('td:last-child');

    if (lastCell) {
      lastCell.remove();
    }
  });

  countColumns--;
  check();
});

check();
