'use strict';

const container = document.querySelector('.container');
const table = container.querySelector('.field');
const bodyOfTable = table.querySelector('tbody');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const appendRow = () => {
  const lastChildOfBody = bodyOfTable.lastElementChild;
  const cloneRow = lastChildOfBody.cloneNode(true);

  bodyOfTable.append(cloneRow);

  if (bodyOfTable.rows.length === 10) {
    appendRowButton.disabled = true;
  }

  removeRowButton.disabled = false;
};

const removeRow = () => {
  bodyOfTable.lastElementChild.remove();

  if (bodyOfTable.rows.length === 2) {
    removeRowButton.disabled = true;
  }

  appendRowButton.disabled = false;
};

const appendColumn = () => {
  for (const row of bodyOfTable.rows) {
    const cloneRow = row.lastElementChild.cloneNode(true);

    row.append(cloneRow);
  }

  if (bodyOfTable.firstElementChild.children.length === 10) {
    appendColumnButton.disabled = true;
  }

  removeColumnButton.disabled = false;
};

const removeColumn = () => {
  for (const row of bodyOfTable.rows) {
    row.lastElementChild.remove();
  }

  if (bodyOfTable.firstElementChild.children.length === 2) {
    removeColumnButton.disabled = true;
  }

  appendColumnButton.disabled = false;
};

appendRowButton.addEventListener('click', appendRow);
removeRowButton.addEventListener('click', removeRow);
appendColumnButton.addEventListener('click', appendColumn);
removeColumnButton.addEventListener('click', removeColumn);
