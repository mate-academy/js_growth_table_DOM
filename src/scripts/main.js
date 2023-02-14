'use strict';

const body = document.querySelector('tbody');

const buttonAddRow = document.getElementsByClassName('append-row')[0];
const buttonRemoveRow = document.getElementsByClassName('remove-row')[0];
const buttonAddCol = document.getElementsByClassName('append-column')[0];
const buttonRemoveCol = document.getElementsByClassName('remove-column')[0];

buttonAddRow.addEventListener('click', e => {
  const newRow = document.createElement('tr');
  const numberOfRows = body.firstElementChild.children.length;

  for (let i = 0; i < numberOfRows; i++) {
    const newRowItem = document.createElement('td');

    newRow.appendChild(newRowItem);
    buttonRemoveRow.removeAttribute('disabled');
  }
  body.appendChild(newRow);

  if (body.children.length === 10) {
    buttonAddRow.setAttribute('disabled', true);
  }
});

buttonRemoveRow.addEventListener('click', e => {
  const row = document.querySelector('tr');

  row.remove();
  buttonAddRow.removeAttribute('disabled');

  if (body.children.length === 2) {
    buttonRemoveRow.setAttribute('disabled', true);
  }
});

buttonRemoveCol.addEventListener('click', e => {
  const rows = document.querySelectorAll('tr');

  for (const item of rows) {
    buttonAddCol.removeAttribute('disabled');
    item.lastElementChild.remove();

    if (item.children.length === 2) {
      buttonRemoveCol.setAttribute('disabled', true);
    }
  }
});

buttonAddCol.addEventListener('click', e => {
  const rows = document.querySelectorAll('tr');

  buttonRemoveCol.removeAttribute('disabled');

  for (const row of rows) {
    const newColItem = document.createElement('td');

    row.appendChild(newColItem);
  }

  if (rows[0].children.length === 10) {
    buttonAddCol.setAttribute('disabled', true);
  }
});
