'use strict';

const table = document.querySelector('TBODY');
const rows = document.querySelectorAll('TR');

const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const appendrowButton = document.querySelector('.append-row');
const removerowButton = document.querySelector('.remove-row');

appendColumnButton.addEventListener('click', () => {
  [...table.children].forEach(
    el => el.append(el.lastElementChild.cloneNode(true))
  );

  if (rows[0].children.length >= 10) {
    appendColumnButton.disabled = true;
  }

  if (rows[0].children.length >= 3) {
    removeColumnButton.disabled = false;
  }
});

removeColumnButton.addEventListener('click', () => {
  [...table.children].forEach(
    el => el.lastElementChild.remove()
  );

  if (rows[0].children.length <= 2) {
    removeColumnButton.disabled = true;
  }

  if (rows[0].children.length < 10) {
    appendColumnButton.disabled = false;
  }
});

appendrowButton.addEventListener('click', () => {
  table.append(table.lastElementChild.cloneNode(true));

  if (table.children.length >= 10) {
    appendrowButton.disabled = true;
  }

  if (table.children.length > 2) {
    removerowButton.disabled = false;
  }
});

removerowButton.addEventListener('click', () => {
  table.lastElementChild.remove();

  if (table.children.length <= 2) {
    removerowButton.disabled = true;
  }

  if (table.children.length < 10) {
    appendrowButton.disabled = false;
  }
});
