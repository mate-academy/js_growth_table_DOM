'use strict';

const appendColumn = document.querySelector('.append-column');
const appendRow = document.querySelector('.append-row');
const removeColumn = document.querySelector('.remove-column');
const removeRow = document.querySelector('.remove-row');
const table = document.querySelector('table').rows;
const MAX = 10;
const MIN = 2;

function changeBtn(firstBtn, secondBtn) {
  const tableLength = firstBtn === appendRow || firstBtn === removeRow
    ? table.length : table[0].children.length;

  if (tableLength === MAX || tableLength === MIN) {
    firstBtn.setAttribute('disabled', '');
  }

  if (secondBtn.getAttribute('disabled') !== null) {
    secondBtn.removeAttribute('disabled');
  }
}

appendRow.addEventListener('click', (e) => {
  const el = table[0].cloneNode(true);

  table[0].parentElement.append(el);
  changeBtn(e.target, removeRow);
});

removeRow.addEventListener('click', (e) => {
  table[0].remove();
  changeBtn(e.target, appendRow);
});

appendColumn.addEventListener('click', (e) => {
  for (const element of table) {
    const createCol = document.createElement('td');

    element.append(createCol);
  }
  changeBtn(e.target, removeColumn);
});

removeColumn.addEventListener('click', (e) => {
  for (const element of table) {
    element.children[0].remove();
  }
  changeBtn(e.target, appendColumn);
});
