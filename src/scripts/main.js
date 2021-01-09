'use strict';

const tableBody = document.querySelector('tbody');
const addRow = document.querySelector('.append-row');
const delRow = document.querySelector('.remove-row');
const addCol = document.querySelector('.append-column');
const delCol = document.querySelector('.remove-column');
const sizeMin = 2;
const sizeMax = 10;

addRow.addEventListener('click', () => {
  const clone = tableBody.firstElementChild.cloneNode(true);

  tableBody.append(clone);
  buttonCheck(sizeMin, sizeMax);
});

delRow.addEventListener('click', () => {
  tableBody.lastElementChild.remove();
  buttonCheck(sizeMin, sizeMax);
});

addCol.addEventListener('click', () => {
  [...tableBody.children].map(e => {
    const clone = [...tableBody.children][0].firstElementChild.cloneNode();

    return e.append(clone);
  });
  buttonCheck(sizeMin, sizeMax);
});

delCol.addEventListener('click', () => {
  [...tableBody.children].map(e => e.lastElementChild.remove());
  buttonCheck(sizeMin, sizeMax);
});

function buttonCheck(min, max) {
  const colLength = [...tableBody.children][0].children.length;
  const rowLength = tableBody.children.length;

  rowLength === max
    ? addRow.disabled = true
    : addRow.disabled = false;

  rowLength === min
    ? delRow.disabled = true
    : delRow.disabled = false;

  colLength === max
    ? addCol.disabled = true
    : addCol.disabled = false;

  colLength === min
    ? delCol.disabled = true
    : delCol.disabled = false;
}
