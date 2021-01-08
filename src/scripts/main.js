'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const tableBody = document.querySelector('.field > tbody');

appendColumnButton.addEventListener('click', (e) => {
  const rows = [...document.querySelector('.field > tbody').children];

  if (removeColumnButton.disabled) {
    removeColumnButton.disabled = false;
  }

  if (rows[0].cells.length === 9) {
    e.target.disabled = true;
  };

  rows.forEach((el) => {
    const toAddTD = document.createElement('td');

    el.append(toAddTD);
  });
});

removeColumnButton.addEventListener('click', (e) => {
  const rows = [...document.querySelector('.field > tbody').children];

  if (appendColumnButton.disabled) {
    appendColumnButton.disabled = false;
  }

  if (rows[0].cells.length === 3) {
    e.target.disabled = true;
  };

  rows.forEach((el) => {
    el.lastElementChild.remove();
  });
});

appendRowButton.addEventListener('click', (e) => {
  if (removeRowButton.disabled) {
    removeRowButton.disabled = false;
  }

  if ([...tableBody.children].length === 9) {
    e.target.disabled = true;
  }
  tableBody.append(tableBody.lastElementChild.cloneNode(true));
});

removeRowButton.addEventListener('click', (e) => {
  if (appendRowButton.disabled) {
    appendRowButton.disabled = false;
  }

  if ([...tableBody.children].length === 3) {
    e.target.disabled = true;
  }
  tableBody.lastElementChild.remove();
});
