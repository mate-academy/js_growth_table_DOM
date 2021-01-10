'use strict';

const table = document.querySelector('TBODY');
const rows = [...document.querySelectorAll('TR')];

const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const appendrowButton = document.querySelector('.append-row');
const removerowButton = document.querySelector('.remove-row');

function disabledChanger() {
  (rows[0].children.length >= 10)
    ? appendColumnButton.disabled = true
    : appendColumnButton.disabled = false;

  (rows[0].children.length > 2)
    ? removeColumnButton.disabled = false
    : removeColumnButton.disabled = true;

  (table.children.length >= 10)
    ? appendrowButton.disabled = true
    : appendrowButton.disabled = false;

  (table.children.length > 2)
    ? removerowButton.disabled = false
    : removerowButton.disabled = true;
}

appendColumnButton.addEventListener('click', () => {
  rows.forEach(
    el => el.append(el.lastElementChild.cloneNode())
  );
  disabledChanger();
});

removeColumnButton.addEventListener('click', () => {
  rows.forEach(
    el => el.lastElementChild.remove()
  );
  disabledChanger();
});

appendrowButton.addEventListener('click', () => {
  table.append(table.lastElementChild.cloneNode(true));
  disabledChanger();
});

removerowButton.addEventListener('click', () => {
  table.lastElementChild.remove();
  disabledChanger();
});
