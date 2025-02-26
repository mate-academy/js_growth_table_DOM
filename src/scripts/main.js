'use strict';

const tableElem = document.querySelector('table');

const addRowBtn = document.querySelector('.append-row');
const deleteRowBtn = document.querySelector('.remove-row');
const addColBtn = document.querySelector('.append-column');
const deleteColBtn = document.querySelector('.remove-column');

addRowBtn.addEventListener('click', (e) => {
  tableElem.append(document.querySelector('tr').cloneNode(true));
});

deleteRowBtn.addEventListener('click', (e) => {
  document.querySelector('tr').remove();
});

addColBtn.addEventListener('click', (e) => {
  const allRow = [...document.querySelectorAll('tr')];

  allRow.forEach((el) => {
    el.append(el.lastElementChild.cloneNode());
  });
});

deleteColBtn.addEventListener('click', (e) => {
  const allRow = [...document.querySelectorAll('tr')];

  allRow.forEach((el) => {
    el.lastElementChild.remove();
  });
});

function buttonCondition() {
  const rowCount = [...document.querySelectorAll('table tr')].length;
  const colCount = document.querySelector('tr').children.length;

  addRowBtn.disabled = rowCount === 10;
  deleteRowBtn.disabled = rowCount === 2;
  addColBtn.disabled = colCount === 10;
  deleteColBtn.disabled = colCount === 2;
}

document.addEventListener('click', buttonCondition);
