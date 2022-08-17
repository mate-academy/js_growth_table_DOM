'use strict';

const buttonAppendRow = document.querySelector('.append-row');
const buttonRemoveRow = document.querySelector('.remove-row');
const buttonAppendColumn = document.querySelector('.append-column');
const buttonRemoveColumn = document.querySelector('.remove-column');
const tableBody = document.querySelector('tbody');

buttonAppendRow.addEventListener('click', e => {
  buttonRemoveRow.disabled = false;
  tableBody.append(tableBody.lastElementChild.cloneNode(true));

  if (tableBody.children.length >= 10) {
    buttonAppendRow.disabled = true;
  }
});

buttonRemoveRow.addEventListener('click', e => {
  buttonAppendRow.disabled = false;
  tableBody.lastElementChild.remove();

  if (tableBody.children.length <= 2) {
    buttonRemoveRow.disabled = true;
  }
});

buttonAppendColumn.addEventListener('click', e => {
  buttonRemoveColumn.disabled = false;

  [...tableBody.children].forEach(element => {
    element.append(element.lastElementChild.cloneNode(true));
  });

  if (tableBody.firstChild.children.length >= 10) {
    buttonAppendColumn.disabled = true;
  };
});

buttonRemoveColumn.addEventListener('click', e => {
  buttonAppendColumn.disabled = false;

  [...tableBody.children].forEach(element => {
    element.lastElementChild.remove();
  });

  if (tableBody.firstChild.children.length <= 2) {
    buttonRemoveColumn.disabled = true;
  };
});
