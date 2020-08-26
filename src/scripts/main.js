'use strict';

const field = document.querySelector('tbody');

const addRowBtn = document.querySelector('.append-row');
const cutRowBtn = document.querySelector('.remove-row');
const addColBtn = document.querySelector('.append-column');
const cutColBtn = document.querySelector('.remove-column');

addRowBtn.addEventListener('click', (event) => {
  field.append(field.lastElementChild.cloneNode(true));

  if (field.children.length === 10) {
    addRowBtn.disabled = true;
  }

  if (field.children.length > 2) {
    cutRowBtn.disabled = false;
  }
});

cutRowBtn.addEventListener('click', (event) => {
  field.lastElementChild.remove();

  if (field.children.length === 2) {
    cutRowBtn.disabled = true;
  }

  if (field.children.length < 10) {
    addRowBtn.disabled = false;
  }
});

addColBtn.addEventListener('click', (event) => {
  for (const row of field.children) {
    row.append(row.lastElementChild.cloneNode(true));
  }

  if (field.lastElementChild.children.length === 10) {
    addColBtn.disabled = true;
  }

  if (field.lastElementChild.children.length > 2) {
    cutColBtn.disabled = false;
  }
});

cutColBtn.addEventListener('click', (event) => {
  for (const row of field.children) {
    row.lastElementChild.remove();
  }

  if (field.lastElementChild.children.length === 2) {
    cutColBtn.disabled = true;
  }

  if (field.lastElementChild.children.length < 10) {
    addColBtn.disabled = false;
  }
});
