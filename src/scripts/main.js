'use strict';

const tbody = document.querySelector('tbody');

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const max = 10;
const min = 2;

appendRowButton.addEventListener('click', function() {
  if (tbody.children.length < max) {
    removeRowButton.disabled = false;
    tbody.append(tbody.lastElementChild.cloneNode(true));
  }

  if (tbody.children.length === max) {
    appendRowButton.disabled = true;
  }
});

removeRowButton.addEventListener('click', function() {
  if (tbody.children.length > min) {
    appendRowButton.disabled = false;
    tbody.lastElementChild.remove();
  }

  if (tbody.children.length === min) {
    removeRowButton.disabled = true;
  }
});

appendColumnButton.addEventListener('click', function() {
  const rows = document.querySelectorAll('tr');

  if (rows[0].children.length < max) {
    removeColumnButton.disabled = false;

    [...rows].forEach(row => {
      row.append(row.lastElementChild.cloneNode(true));
    });
  }

  if (rows[0].children.length === max) {
    appendColumnButton.disabled = true;
  }
});

removeColumnButton.addEventListener('click', function() {
  const rows = document.querySelectorAll('tr');

  if (rows[0].children.length > min) {
    appendColumnButton.disabled = false;

    [...rows].forEach(row => {
      row.lastElementChild.remove();
    });
  }

  if (rows[0].children.length === min) {
    removeColumnButton.disabled = true;
  }
});
