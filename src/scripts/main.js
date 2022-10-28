'use strict';

const buttons = document.querySelectorAll('.button');
const tbody = document.querySelector('tbody');
const minLimit = 2;
const maxLimit = 10;
let countRow = tbody.rows.length;
let countColumn = tbody.rows[0].cells.length;

document.addEventListener('click', events => {
  const target = events.target;

  if (!target.classList.contains('button')) {
    return;
  }

  if (target.classList.contains('append-row')) {
    const tr = document.createElement('tr');

    for (let i = 0; i < countColumn; i++) {
      tr.append(document.createElement('td'));
    }

    tbody.append(tr);
    countRow++;
  }

  if (target.classList.contains('remove-row')) {
    tbody.rows[countRow - 1].remove();
    countRow--;
  }

  if (target.classList.contains('append-column')) {
    for (const row of tbody.rows) {
      row.append(document.createElement('td'));
    }

    countColumn++;
  }

  if (target.classList.contains('remove-column')) {
    for (const row of tbody.rows) {
      row.cells[countColumn - 1].remove();
    }
    countColumn--;
  }

  [ ...buttons ].find(c => c.classList.contains('remove-row'))
    .disabled = countRow <= minLimit;

  [ ...buttons ].find(c => c.classList.contains('append-row'))
    .disabled = countRow >= maxLimit;

  [ ...buttons ].find(c => c.classList.contains('remove-column'))
    .disabled = countColumn <= minLimit;

  [ ...buttons ].find(c => c.classList.contains('append-column'))
    .disabled = countColumn >= maxLimit;
});
