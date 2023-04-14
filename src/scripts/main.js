'use strict';

const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const tableBody = document.querySelector('tbody');

const check = () => {
  tableBody.children.length >= 10
    ? addRowButton.disabled = true : addRowButton.disabled = false;

  tableBody.children.length <= 2
    ? removeRowButton.disabled = true : removeRowButton.disabled = false;

  tableBody.firstElementChild.children.length >= 10
    ? addColumnButton.disabled = true : addColumnButton.disabled = false;

  tableBody.firstElementChild.children.length <= 2
    ? removeColumnButton.disabled = true : removeColumnButton.disabled = false;
};

addRowButton.onclick = function() {
  tableBody.append(tableBody.firstElementChild.cloneNode(true));
  check();
};

removeRowButton.onclick = function() {
  tableBody.lastElementChild.remove();
  check();
};

addColumnButton.onclick = function() {
  [...tableBody.children].forEach(item => {
    item.append(document.createElement('td'));
  });
  check();
};

removeColumnButton.onclick = function() {
  [...tableBody.children].forEach(item => {
    item.lastElementChild.remove();
  });
  check();
};
