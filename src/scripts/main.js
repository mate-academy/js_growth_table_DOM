'use strict';

const date = document.querySelector('tbody');
const container = document.querySelector('.container');
const addRow = document.querySelector('.append-row');
const delRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const delColumn = document.querySelector('.remove-column');
const minLength = 2;
const maxLength = 10;

container.addEventListener('click', (e) => {
  if (e.target === addRow) {
    date.append(date.lastElementChild.cloneNode(true));
  };

  if (e.target === delRow) {
    date.lastElementChild.remove();
  };

  if (e.target === addColumn) {
    [...date.children].forEach(item =>
      item.lastElementChild.after(item.lastElementChild.cloneNode(true)));
  };

  if (e.target === delColumn) {
    [...date.children].forEach(item =>
      item.lastElementChild.after(item.lastElementChild.remove()));
  };

  const rowsLength = date.childElementCount;
  const columnsLength = date.firstElementChild.childElementCount;

  addRow.disabled = rowsLength >= maxLength;
  delRow.disabled = rowsLength <= minLength;
  addColumn.disabled = columnsLength >= maxLength;
  delColumn.disabled = columnsLength <= minLength;
});
