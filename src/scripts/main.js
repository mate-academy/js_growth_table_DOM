'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');
const table = document.querySelector('table');

appendRow.addEventListener('click', (e) => {
  table.append(document.querySelector('tr').cloneNode(true));
});

removeRow.addEventListener('click', (e) => {
  document.querySelector('tr').remove();
});

appendCol.addEventListener('click', (e) => {
  const allRows = [...document.querySelectorAll('tr')];

  allRows.forEach((el) => {
    el.append(el.lastElementChild.cloneNode());
  });
});

removeCol.addEventListener('click', (e) => {
  const allRows = [...document.querySelectorAll('tr')];

  allRows.forEach((el) => {
    el.lastElementChild.remove();
  });
});

function updateButtons() {
  const rowCount = document.querySelectorAll('table tr').length;
  const colCount = document.querySelector('tr').children.length;

  appendRow.disabled = rowCount === 10;
  removeRow.disabled = rowCount === 2;
  appendCol.disabled = colCount === 10;
  removeCol.disabled = colCount === 2;
}

document.addEventListener('click', updateButtons);
