'use strict';

const tbody = document.querySelector('.field tbody');
const buttonAddRow = document.querySelector('.append-row');
const buttonRemoveRow = document.querySelector('.remove-row');
const buttonAddCol = document.querySelector('.append-column');
const buttonRemoveCol = document.querySelector('.remove-column');
const maxSize = 10;
const minSize = 2;

buttonAddRow.onclick = () => {
  tbody.append(tbody.rows[0].cloneNode(true));
  checkTableSize(minSize, maxSize);
};

buttonRemoveRow.onclick = () => {
  tbody.rows[0].remove();
  checkTableSize(minSize, maxSize);
};

buttonAddCol.onclick = () => {
  [...tbody.rows].forEach(col => {
    col.append(col.children[0].cloneNode(true));
  });
  checkTableSize(minSize, maxSize);
};

buttonRemoveCol.onclick = () => {
  [...tbody.rows].forEach(col => {
    col.children[0].remove();
  });
  checkTableSize(minSize, maxSize);
};

function checkTableSize(min, max) {
  tbody.rows.length <= min
    ? buttonRemoveRow.disabled = true
    : buttonRemoveRow.disabled = false;

  tbody.rows.length >= max
    ? buttonAddRow.disabled = true
    : buttonAddRow.disabled = false;

  tbody.rows[0].children.length <= min
    ? buttonRemoveCol.disabled = true
    : buttonRemoveCol.disabled = false;

  tbody.rows[0].children.length >= max
    ? buttonAddCol.disabled = true
    : buttonAddCol.disabled = false;
}
