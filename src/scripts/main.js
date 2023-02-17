'use strict';

const container = document.querySelector('.container');
const table = container.querySelector('.field');

const buttonRemoveRow = container.querySelector('.remove-row');
const buttonAddRow = container.querySelector('.append-row');
const buttonRemoveColumn = container.querySelector('.remove-column');
const buttonAddColumn = container.querySelector('.append-column');

container.addEventListener('click', (ev) => {
  const buttonClass = [...ev.target.classList];
  const tbody = table.firstElementChild;
  const rows = tbody.querySelectorAll('tr');

  if (!buttonClass.includes('button')) {
    return;
  }

  switch (buttonClass[0]) {
    case 'append-column':
      rows.forEach(el => {
        el.append(el.lastElementChild.cloneNode());
      });
      buttonRemoveColumn.removeAttribute('disabled');
      break;

    case 'remove-column':
      rows.forEach(e => {
        e.lastElementChild.remove();
      });
      buttonAddColumn.removeAttribute('disabled');
      break;

    case 'append-row':
      tbody.append(rows[0].cloneNode(true));
      buttonRemoveRow.removeAttribute('disabled');
      break;

    case 'remove-row':
      tbody.lastElementChild.remove();
      buttonAddRow.removeAttribute('disabled');
      break;
  }

  const rowsLength = [...tbody.children].length;
  const columnLength = [...rows[0].children].length;

  toggleDisableButton(rowsLength, columnLength)
});

function toggleDisableButton(rowLeng, columns) {
  if (rowLeng === 2) {
    buttonRemoveRow.setAttribute('disabled', 'true');
  }

  if (rowLeng === 10) {
    buttonAddRow.setAttribute('disabled', 'true');
  } 
  
  if (columns === 2) {
    buttonRemoveColumn.setAttribute('disabled', 'true');
  } 

  if (columns === 10) {
    buttonAddColumn.setAttribute('disabled', 'true');
  } 
}
