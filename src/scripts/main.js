'use strict';

const table = document.querySelector('.field');
const tbody = document.querySelector('tbody');

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

appendRowButton.addEventListener('click', () => {
  const countRows = tbody.children.length + 1;
  const newRow = tbody.lastElementChild.cloneNode(true);

  if (countRows >= 10) {
    appendRowButton.disabled = true;
  }
  removeRowButton.disabled = false;
  tbody.append(newRow);
});

removeRowButton.addEventListener('click', () => {
  const countRows = tbody.children.length - 1;

  if (countRows <= 2) {
    removeRowButton.disabled = true;
  }
  appendRowButton.disabled = false;
  tbody.lastElementChild.remove();
});

appendColumnButton.addEventListener('click', () => {
  const arrayOfTr = [...tbody.rows];
  const countColumns = table.querySelectorAll('td').length
    / arrayOfTr.length + 1;

  if (countColumns >= 10) {
    appendColumnButton.disabled = true;
  }
  removeColumnButton.disabled = false;

  arrayOfTr.forEach((el) => {
    const lastCell = el.lastElementChild.cloneNode(true);

    el.appendChild(lastCell);
  });
});

removeColumnButton.addEventListener('click', () => {
  const arrayOfTr = [...tbody.rows];
  const countColumns = table.querySelectorAll('td').length
    / arrayOfTr.length - 1;

  if (countColumns <= 2) {
    removeColumnButton.disabled = true;
  }
  appendColumnButton.disabled = false;

  arrayOfTr.forEach((el) => {
    el.lastElementChild.remove();
  });
});
