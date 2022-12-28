'use strict';

const buttons = document.querySelectorAll('.button');
const table = document.querySelector('tbody');
const container = document.querySelector('.container');
let rowsAmnt = table.rows.length;
let colAmnt = table.rows[0].cells.length;

container.addEventListener('click', e => {
  const target = e.target;

  if (target.classList.contains('append-row')) {
    const row = table.rows[0].cloneNode(true);

    table.append(row);
    rowsAmnt++;
  };

  if (target.classList.contains('remove-row')) {
    table.rows[rowsAmnt - 1].remove();
    rowsAmnt--;
  };

  if (target.classList.contains('append-column')) {
    for (const el of table.rows) {
      el.append(document.createElement('td'));
    };
    colAmnt++;
  };

  if (target.classList.contains('remove-column')) {
    for (const el of table.rows) {
      el.cells[colAmnt - 1].remove();
    };
    colAmnt--;
  };

  [...buttons].find(button => button.classList.contains('append-row'))
    .disabled = rowsAmnt >= 10;

  [...buttons].find(button => button.classList.contains('remove-row'))
    .disabled = rowsAmnt <= 2;

  [...buttons].find(button => button.classList.contains('append-column'))
    .disabled = colAmnt >= 10;

  [...buttons].find(button => button.classList.contains('remove-column'))
    .disabled = colAmnt <= 2;
});
