'use strict';

const tbody = document.querySelector('tbody');
const rowAppend = document.querySelector('.append-row');
const rowRemove = document.querySelector('.remove-row');
const columnAppend = document.querySelector('.append-column');
const columnRemove = document.querySelector('.remove-column');

rowAppend.addEventListener('click', () => {
  tbody.append(tbody.lastElementChild.cloneNode(true));

  rowRemove.disabled = false;
  rowAppend.disabled = tbody.childElementCount === 10;
});

rowRemove.addEventListener('click', () => {
  tbody.lastElementChild.remove();

  rowAppend.disabled = false;
  rowRemove.disabled = tbody.childElementCount === 2;
});

columnAppend.addEventListener('click', () => {
  [...tbody.rows].forEach(el =>
    el.append(el.lastElementChild.cloneNode(true)));

  columnRemove.disabled = false;
  columnAppend.disabled = tbody.children[0].childElementCount === 10;
});

columnRemove.addEventListener('click', () => {
  [...tbody.rows].forEach(el =>
    el.lastElementChild.remove());

  columnAppend.disabled = false;
  columnRemove.disabled = tbody.children[0].childElementCount === 2;
});
