'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('.field');
const tr = document.getElementsByTagName('tr');

let countRows = tr.length;
let countColumns = tr[0].children.length;

const minCount = 2;
const maxCount = 10;

appendRow.addEventListener('click', () => {
  if (countRows < maxCount) {
    const row = document.createElement('tr');

    row.innerHTML = document.querySelector('tr').innerHTML;

    table.append(row);
    countRows++;

    removeRow.disabled = false;

    if (countRows === maxCount) {
      appendRow.disabled = true;
    }
  }
});

removeRow.addEventListener('click', () => {
  if (countRows > minCount) {
    document.querySelector('tr').remove();
    countRows--;

    appendRow.disabled = false;

    if (countRows === minCount) {
      removeRow.disabled = true;
    }
  }
});

appendColumn.addEventListener('click', () => {
  if (countColumns < maxCount) {
    [...tr].forEach(item => item.append(document.createElement('td')));
    countColumns++;

    removeColumn.disabled = false;

    if (countColumns === maxCount) {
      appendColumn.disabled = true;
    }
  }
});

removeColumn.addEventListener('click', () => {
  if (countColumns > minCount) {
    [...tr].forEach(item => {
      const td = item.querySelector('td');

      td.remove();
    });

    countColumns--;

    appendColumn.disabled = false;

    if (countColumns === minCount) {
      removeColumn.disabled = true;
    }
  }
});
