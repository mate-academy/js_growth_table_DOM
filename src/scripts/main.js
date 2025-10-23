'use strict';

let countOfRows = 4;
let countOfColumns = 4;
const minRows = 2;
const minColumns = 2;
const maxRows = 10;
const maxColumns = 10;

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const addRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const addColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

addColumnBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (countOfColumns < maxColumns) {
    if (countOfColumns >= minColumns) {
      removeColumnBtn.disabled = false;
    }

    countOfColumns++;

    if (countOfColumns >= maxColumns) {
      addColumnBtn.disabled = true;
    }

    const trElements = tbody.querySelectorAll('tr');

    trElements.forEach((el) => {
      const newElement = document.createElement('td');

      el.appendChild(newElement);
    });
  }
});

removeColumnBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (countOfColumns > minColumns) {
    if (countOfColumns >= maxColumns) {
      addColumnBtn.disabled = false;
    }

    countOfColumns--;

    if (countOfColumns <= minColumns) {
      removeColumnBtn.disabled = true;
    }

    const trElements = tbody.querySelectorAll('tr');

    trElements.forEach((el) => {
      const allChildren = el.querySelectorAll('td');

      allChildren[allChildren.length - 1].remove();
    });
  }
});

addRowBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (countOfRows < maxRows) {
    if (countOfRows >= minRows) {
      removeRowBtn.disabled = false;
    }

    countOfRows++;

    if (countOfRows >= maxRows) {
      addRowBtn.disabled = true;
    }

    const clone = tbody.querySelector('tr').cloneNode(true);

    tbody.appendChild(clone);
  }
});

removeRowBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (countOfRows > minRows) {
    if (countOfRows >= maxRows) {
      addRowBtn.disabled = false;
    }

    countOfRows--;

    if (countOfRows <= minRows) {
      removeRowBtn.disabled = true;
    }

    const trLastElement = tbody.querySelectorAll('tr');

    trLastElement[trLastElement.length - 1].remove();
  }
});
