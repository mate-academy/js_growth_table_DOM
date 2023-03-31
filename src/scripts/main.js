'use strict';

const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const field = document.querySelector('tbody');

addColumnButton.addEventListener('click', addNewColumn);
addRowButton.addEventListener('click', addNewRow);
removeRowButton.addEventListener('click', removeLastRow);
removeColumnButton.addEventListener('click', removeLastColumn);

function addNewColumn() {
  reloadList().forEach(a => {
    const newCell = document.createElement('td');

    a.appendChild(newCell);
  });

  checkLength();
}

function removeLastColumn() {
  reloadList().forEach(a => a.lastElementChild.remove());

  checkLength();
}

function addNewRow() {
  field.appendChild(createRow());
  checkLength();
}

function removeLastRow() {
  field.lastElementChild.remove();
  checkLength();
}

function checkLength() {
  addColumnButton.disabled = reloadList()[0].children.length >= 10;
  removeColumnButton.disabled = reloadList()[0].children.length <= 2;
  addRowButton.disabled = field.children.length >= 10;
  removeRowButton.disabled = field.children.length <= 2;
}

function createRow() {
  const list = document.createElement('tr');

  for (let i = 0; i < reloadList()[0].children.length; i++) {
    const cell = document.createElement('td');

    list.append(cell);
  }

  return list;
}

const reloadList = () => [...document.querySelectorAll('tr')];
