'use strict';

const table = document.querySelector('.field');
const tBody = document.querySelector('tbody');
const container = document.querySelector('.container');
const createTd = document.createElement('td');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const maxLength = 10;
const minLength = 2;

const handler = (e) => {
  const item = e.target;

  buttonClicked(item);
};

container.addEventListener('click', handler, {
  once: false,
});

function buttonClicked(button) {
  const tr = document.querySelector('tr');

  if (button.className === 'append-row button'
    && tBody.children.length < maxLength) {
    tBody.append(tr.cloneNode(true));
  }

  if (button.className === 'remove-row button'
    && tBody.children.length > minLength) {
    table.rows[0].remove();
  }

  if (button.className === 'append-column button'
    && tr.children.length < maxLength) {
    for (let i = 0; i < tBody.children.length; i++) {
      tBody.rows[i].append(createTd.cloneNode(true));
    }
  }

  if (button.className === 'remove-column button'
    && tr.children.length > minLength) {
    let counter = 0;

    for (let i = 0; i < tBody.children.length; i++) {
      tBody.rows[i].cells[counter].remove();
    }
    counter++;
  }

  disableButton(appendRowButton, removeRowButton, tBody.children.length);
  disableButton(appendColumnButton, removeColumnButton, tr.children.length);
}

function disableButton(appendButton, removeButton, elementLength) {
  if (elementLength === maxLength) {
    appendButton.disabled = true;
  } else if (elementLength === minLength) {
    removeButton.disabled = true;
  } else {
    appendButton.disabled = false;
    removeButton.disabled = false;
  }
}
