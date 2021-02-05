'use strict';

const tbody = document.querySelector('tbody');
const tr = document.querySelector('tr');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

appendColumnButton.addEventListener('click', (e) => {
  for (let i = 0; i < tbody.children.length; i++) {
    const newTd = document.createElement('td');

    tbody.children[i].append(newTd);
  }

  if (tr.children.length > 2) {
    removeColumnButton.disabled = false;
  }

  if (tr.children.length === 10) {
    appendColumnButton.disabled = true;
  }
});

removeColumnButton.addEventListener('click', (e) => {
  for (let i = 0; i < tbody.children.length; i++) {
    tbody.children[i].lastElementChild.remove();
  }

  if (tr.children.length === 2) {
    removeColumnButton.disabled = true;
  }

  if (tr.children.length < 10) {
    appendColumnButton.disabled = false;
  }
});

appendRowButton.addEventListener('click', (e) => {
  tbody.append(tbody.children[0].cloneNode(true));

  if (tbody.children.length === 10) {
    appendRowButton.disabled = true;
  }

  removeRowButton.disabled = false;
});

removeRowButton.addEventListener('click', (e) => {
  if (tbody.children.length > 2) {
    tbody.lastElementChild.remove();
  }

  if (tbody.children.length === 2) {
    removeRowButton.disabled = true;
  }

  appendRowButton.disabled = false;
});
