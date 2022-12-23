'use strict';

const table = document.querySelector('tbody');
const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const maxCount = 10;
const minCount = 2;

addRowButton.addEventListener('click', e => {
  removeRowButton.disabled = false;

  table.prepend(table.lastElementChild.cloneNode(true));

  countForRowButton(table);
});

removeRowButton.addEventListener('click', e => {
  addRowButton.disabled = false;

  table.lastElementChild.remove();

  countForRowButton(table);
});

removeColumnButton.addEventListener('click', e => {
  const allCell = document.querySelectorAll('tr');

  allCell.forEach((item) => {
    item.lastElementChild.remove();

    countForColumnButton(item);
  });
});

addColumnButton.addEventListener('click', e => {
  const allCell = document.querySelectorAll('tr');

  allCell.forEach((item) => {
    const td = document.createElement('td');

    item.append(td);

    countForColumnButton(item);
  });
});

function countForColumnButton(item) {
  if (item.children.length >= maxCount) {
    addColumnButton.disabled = true;
  }

  if (item.children.length > minCount) {
    removeColumnButton.disabled = false;
  }

  if (item.children.length < maxCount) {
    addColumnButton.disabled = false;
  }

  if (item.children.length <= minCount) {
    removeColumnButton.disabled = true;
  }
}

function countForRowButton(item) {
  if (item.children.length <= minCount) {
    removeRowButton.disabled = true;
  }

  if (item.children.length >= maxCount) {
    addRowButton.disabled = true;
  }
}
