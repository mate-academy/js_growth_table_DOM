'use strict';

const tableBody = document.querySelector('tbody');
const addRow = document.querySelector('.append-row');
const delRow = document.querySelector('.remove-row');
const addCol = document.querySelector('.append-column');
const delCol = document.querySelector('.remove-column');

addRow.addEventListener('click', () => {
  const clone = tableBody.firstElementChild.cloneNode(true);

  tableBody.append(clone);
  buttonCheck();
});

delRow.addEventListener('click', () => {
  tableBody.lastElementChild.remove();
  buttonCheck();
});

addCol.addEventListener('click', () => {
  [...tableBody.children].map(e => {
    const clone = [...tableBody.children][0].firstElementChild.cloneNode();

    return e.append(clone);
  });
  buttonCheck();
});

delCol.addEventListener('click', () => {
  [...tableBody.children].map(e => e.lastElementChild.remove());
  buttonCheck();
});

function buttonCheck() {
  if (tableBody.children.length === 10) {
    addRow.disabled = true;
  } else {
    addRow.disabled = false;
  }

  if (tableBody.children.length === 2) {
    delRow.disabled = true;
  } else {
    delRow.disabled = false;
  }

  if ([...tableBody.children][0].children.length === 10) {
    addCol.disabled = true;
  } else {
    addCol.disabled = false;
  }

  if ([...tableBody.children][0].children.length === 2) {
    delCol.disabled = true;
  } else {
    delCol.disabled = false;
  }
}
