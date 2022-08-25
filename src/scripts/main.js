'use strict';

const field = document.querySelector('.field');

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

appendRowButton.addEventListener('click', () => {
  if (field.firstElementChild.children.length < 10) {
    const clone = field.firstElementChild.lastElementChild.cloneNode(true);

    field.firstElementChild.append(clone);
  }

  if (field.firstElementChild.children.length >= 10) {
    appendRowButton.disabled = true;
  }

  if (field.firstElementChild.children.length > 2) {
    removeRowButton.disabled = false;
  }
});

removeRowButton.addEventListener('click', () => {
  if (field.firstElementChild.children.length > 2) {
    field.firstElementChild.lastElementChild.remove();
  }

  if (field.firstElementChild.children.length === 2) {
    removeRowButton.disabled = true;
  }

  if (field.firstElementChild.children.length < 10) {
    appendRowButton.disabled = false;
  }
});

appendColumnButton.addEventListener('click', () => {
  if (field.firstElementChild.firstElementChild.children.length < 10) {
    for (const tr of field.firstElementChild.children) {
      tr.insertAdjacentHTML('beforeend', `
      <td></td>
      `);
    }
  }

  if (field.firstElementChild.firstElementChild.children.length >= 10) {
    appendColumnButton.disabled = true;
  }

  if (field.firstElementChild.firstElementChild.children.length > 2) {
    removeColumnButton.disabled = false;
  }

});

removeColumnButton.addEventListener('click', () => {
  if (field.firstElementChild.firstElementChild.children.length > 2) {
    for (const tr of field.firstElementChild.children) {
      tr.lastElementChild.remove();
    }
  }

  if (field.firstElementChild.firstElementChild.children.length === 2) {
    removeColumnButton.disabled = true;
  }

  if (field.firstElementChild.firstElementChild.children.length < 10) {
    appendColumnButton.disabled = false;
  }
});
