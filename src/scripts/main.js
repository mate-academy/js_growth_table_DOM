'use strict';

const appendrow = document.querySelector('.append-row');
const removerow = document.querySelector('.remove-row');
const appendcolumn = document.querySelector('.append-column');
const removecolumn = document.querySelector('.remove-column');

let rowList = document.querySelectorAll('tr');
let row = document.querySelector('tr');
const table = document.querySelector('tbody');
const td = document.querySelector('td');

appendrow.addEventListener('click', (e) => {
  const newtr = row.cloneNode(true);

  table.append(newtr);
  rowList = document.querySelectorAll('tr');

  appendrow.disabled = rowList.length >= 10;
  removerow.disabled = rowList.length < 2;
});

removerow.addEventListener('click', (e) => {
  row = document.querySelector('tr');
  row.remove();
  rowList = document.querySelectorAll('tr');

  appendrow.disabled = rowList.length > 10;
  removerow.disabled = rowList.length <= 2;
});

appendcolumn.addEventListener('click', (e) => {
  for (const currentRow of rowList) {
    const newtd = td.cloneNode(true);

    currentRow.append(newtd);

    appendcolumn.disabled = currentRow.children.length >= 10;
    removecolumn.disabled = currentRow.children.length < 2;
  }
});

removecolumn.addEventListener('click', (e) => {
  for (const currentRow of rowList) {
    currentRow.lastElementChild.remove();

    appendcolumn.disabled = currentRow.children.length > 10;
    removecolumn.disabled = currentRow.children.length <= 2;
  }
});
