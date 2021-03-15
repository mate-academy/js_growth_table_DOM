'use strict';

// write code here
const container = document.querySelector('.container');
const field = document.querySelector('tbody');
const itemTd = document.createElement('td');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

container.addEventListener('click', (tap) => {
  const element = document.getElementsByTagName('tr');

  if (tap.target.matches('.append-row')
  && field.childElementCount !== 10) {
    removeRow.disabled = false;
    field.append(field.children[0].cloneNode(true));

    if (field.childElementCount === 10) {
      appendRow.disabled = true;
    }
  }

  if (tap.target.matches('.remove-row')) {
    appendRow.disabled = false;
    field.lastElementChild.remove();

    if (field.childElementCount === 2) {
      removeRow.disabled = true;
    }
  }

  if (tap.target.matches('.append-column')
  && element[0].childElementCount !== 10) {
    removeColumn.disabled = false;
    [...element].forEach(tag => tag.append(itemTd.cloneNode()));

    if (element[0].childElementCount === 10) {
      appendColumn.disabled = true;
    }
  }

  if (tap.target.matches('.remove-column')) {
    appendColumn.disabled = false;
    [...element].forEach(tag => tag.lastElementChild.remove());

    if (element[0].childElementCount === 2) {
      removeColumn.disabled = true;
    }
  }
});
