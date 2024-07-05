'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const body = document.querySelector('tbody');

let qtyRows = 4;
let qtyColumns = 4;

appendRow.addEventListener('click', () => {
  qtyRows += 1;

  if (qtyRows === 10) {
    appendRow.disabled = true;
  }

  if (qtyRows >= 2) {
    removeRow.disabled = false;
  }

  const line = document.createElement('tr');

  for (let i = 0; i < qtyColumns; i++) {
    const column = document.createElement('td');

    line.appendChild(column);
  }

  body.append(line);
});

appendColumn.addEventListener('click', () => {
  qtyColumns += 1;

  if (qtyColumns === 10) {
    appendColumn.disabled = true;
  }

  if (qtyColumns >= 2) {
    removeColumn.disabled = false;
  }

  const lines = [...body.children];

  lines.forEach((line) => {
    const data = document.createElement('td');

    line.append(data);
  });
});

removeRow.addEventListener('click', () => {
  qtyRows -= 1;

  if (qtyRows <= 10) {
    appendRow.disabled = false;
  }

  if (qtyRows === 2) {
    removeRow.disabled = true;
  }

  body.removeChild(body.lastElementChild);
});

removeColumn.addEventListener('click', () => {
  qtyColumns -= 1;

  if (qtyColumns <= 10) {
    appendColumn.disabled = false;
  }

  if (qtyColumns === 2) {
    removeColumn.disabled = true;
  }

  const lines = [...body.children];

  lines.forEach((item) => {
    item.removeChild(item.lastElementChild);
  });
});
