'use strict';

// write code here
const table = document.querySelector('tbody');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColum = document.querySelector('.append-column');
const removeColum = document.querySelector('.remove-column');
const max = 10;
const min = 2;

addRow.addEventListener('click', e => {
  table.prepend(table.lastElementChild.cloneNode(true));

  removeRow.disabled = false;

  if (table.children.length >= max) {
    addRow.disabled = true;
  }
});

removeRow.addEventListener('click', e => {
  addRow.disabled = false;

  table.lastElementChild.remove();

  if (table.children.length <= min) {
    removeRow.disabled = true;
  }
});

removeColum.addEventListener('click', e => {
  const allCell = document.querySelectorAll('tr');

  allCell.forEach((item) => {
    item.lastElementChild.remove();

    if (item.children.length < max) {
      addColum.disabled = false;
    }

    if (item.children.length <= min) {
      removeColum.disabled = true;
    }
  });
});

addColum.addEventListener('click', e => {
  const allCell = document.querySelectorAll('tr');

  allCell.forEach((item) => {
    const td = document.createElement('td');

    item.append(td);

    if (item.children.length >= max) {
      addColum.disabled = true;
    }

    if (item.children.length > min) {
      removeColum.disabled = false;
    }
  });
});
