'use strict';

const buttons = document.querySelectorAll('.button');
const table = document.querySelector('tbody');
const container = document.querySelector('.container');
let rowsAmnt = table.rows.length;
let colAmnt = table.rows[0].cells.length;

function colTransf(cl) {
  for (const el of table.rows) {
    cl === 'append-column'
      ? el.append(document.createElement('td'))
      : el.cells[colAmnt - 1].remove();
  };
};

function disabler(arr, min, max) {
  for (const button of arr) {
    switch (button.classList[0]) {
      case 'append-row':
        button.disabled = rowsAmnt >= max;
        break;
      case 'remove-row':
        button.disabled = rowsAmnt <= min;
        break;
      case 'append-column':
        button.disabled = colAmnt >= max;
        break;
      default:
        button.disabled = colAmnt <= min;
        break;
    };
  };
};

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
    colTransf('append-column');
    colAmnt++;
  };

  if (target.classList.contains('remove-column')) {
    colTransf('remove-column');
    colAmnt--;
  };

  disabler([...buttons], 2, 10);
});
