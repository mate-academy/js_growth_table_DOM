'use strict';

const table = document.querySelector('tbody');
const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumButton = document.querySelector('.append-column');
const removeColumButton = document.querySelector('.remove-column');
const maxCount = 10;
const minCount = 2;

addRowButton.addEventListener('click', e => {
  removeRowButton.disabled = false;

  table.prepend(table.lastElementChild.cloneNode(true));

  if (table.children.length >= maxCount) {
    addRowButton.disabled = true;
  }
});

removeRowButton.addEventListener('click', e => {
  addRowButton.disabled = false;

  table.lastElementChild.remove();

  if (table.children.length <= minCount) {
    removeRowButton.disabled = true;
  }
});

removeColumButton.addEventListener('click', e => {
  const allCell = document.querySelectorAll('tr');

  allCell.forEach((item) => {
    item.lastElementChild.remove();

    minMax(item);
  });
});

addColumButton.addEventListener('click', e => {
  const allCell = document.querySelectorAll('tr');

  allCell.forEach((item) => {
    const td = document.createElement('td');

    item.append(td);

    minMax(item);
  });
});

function minMax(item) {
  if (item.children.length >= maxCount) {
    addColumButton.disabled = true;
  }

  if (item.children.length > minCount) {
    removeColumButton.disabled = false;
  }

  if (item.children.length < maxCount) {
    addColumButton.disabled = false;
  }

  if (item.children.length <= minCount) {
    removeColumButton.disabled = true;
  }
}
