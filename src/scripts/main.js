'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const table = document.querySelector('.field').firstElementChild;

appendColumnButton.addEventListener('click', () => {
  const rows = [...table.children];

  for (let i = 0; i < rows.length; i++) {
    rows[i].append(document.createElement('td'));
  }
  removeColumnButton.disabled = false;

  if (table.children[0].children.length >= 10) {
    appendColumnButton.disabled = true;
  }
});

appendRowButton.addEventListener('click', () => {
  const columnCount = table.children[0].children.length;
  const adding = document.createElement('tr');

  table.append(adding);

  for (let i = 0; i < columnCount; i++) {
    adding.append(document.createElement('td'));
  }
  removeRowButton.disabled = false;

  if (table.children.length >= 10) {
    appendRowButton.disabled = true;
  }
});

removeRowButton.addEventListener('click', () => {
  table.lastElementChild.remove();

  appendRowButton.disabled = false;

  if (table.children.length <= 2) {
    removeRowButton.disabled = true;
  }
});

removeColumnButton.addEventListener('click', () => {
  const rows = [...table.children];

  for (let i = 0; i < rows.length; i++) {
    rows[i].lastElementChild.remove();
  }

  appendColumnButton.disabled = false;

  if (table.children[0].children.length <= 2) {
    removeColumnButton.disabled = true;
  }
});
