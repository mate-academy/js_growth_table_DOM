'use strict';

const table = document.querySelector('.field');
const tbody = table.tBodies[0];
const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColButton = document.querySelector('.append-column');
const removeColButton = document.querySelector('.remove-column');

const maxCount = 10;
const minCount = 2;

addRowButton.addEventListener('click', (e) => {
  let newRow = document.createElement('tr');
  const rows = tbody.children;

  if (rows.length < maxCount) {
    newRow = rows[0].cloneNode(true);
    tbody.append(newRow);
    removeRowButton.removeAttribute('disabled', true);
  }

  if (rows.length === maxCount) {
    addRowButton.setAttribute('disabled', true);
  }
});

removeRowButton.addEventListener('click', (e) => {
  const rows = tbody.children;

  if (rows.length > minCount) {
    rows[0].remove();
    addRowButton.removeAttribute('disabled', true);
  }

  if (rows.length === minCount) {
    removeRowButton.setAttribute('disabled', true);
  }
});

addColButton.addEventListener('click', (e) => {
  const newData = document.createElement('td');
  const rows = tbody.children;
  const colCount = rows[0].children.length;

  if (colCount < maxCount) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].appendChild(newData.cloneNode(true));
    }
    removeColButton.removeAttribute('disabled', true);
  }

  if (colCount === maxCount - 1) {
    addColButton.setAttribute('disabled', true);
  }
});

removeColButton.addEventListener('click', (e) => {
  const rows = tbody.children;
  const colCount = rows[0].children.length;

  if (colCount > minCount) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].children[0].remove();
    }
    addColButton.removeAttribute('disabled');
  }

  if (colCount === minCount + 1) {
    removeColButton.setAttribute('disabled', true);
  }
});
