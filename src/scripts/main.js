'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const tbody = document.querySelector('tbody');
const row = document.querySelector('tr');

const addRow = () => {
  const newRow = tbody.children[0].cloneNode(true);

  tbody.append(newRow);

  if (tbody.children.length === 10) {
    appendRowButton.disabled = true;
  }

  removeRowButton.disabled = false;
};

const removeRow = () => {
  tbody.lastElementChild.remove();

  if (tbody.children.length < 3) {
    removeRowButton.disabled = true;
  }

  appendRowButton.disabled = false;
};

const addColumn = () => {
  for (let i = 0; i < tbody.children.length; i++) {
    const newColumn = document.createElement('td');

    tbody.children[i].append(newColumn);
  }

  if (row.children.length === 10) {
    appendColumnButton.disabled = true;
  }

  removeColumnButton.disabled = false;
};

const removeColumn = () => {
  for (let i = 0; i < tbody.children.length; i++) {
    tbody.children[i].lastElementChild.remove();
  }

  if (row.children.length === 3) {
    removeColumnButton.disabled = true;
  }

  appendColumnButton.disabled = false;
};

appendRowButton.addEventListener('click', addRow);
removeRowButton.addEventListener('click', removeRow);
appendColumnButton.addEventListener('click', addColumn);
removeColumnButton.addEventListener('click', removeColumn);

// write code here
