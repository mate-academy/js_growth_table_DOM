'use strict';

const tbody = document.querySelector('tbody');

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

appendRowButton.addEventListener('click', function() {
  if (tbody.children.length < 10) {
    removeRowButton.disabled = false;
    tbody.append(tbody.lastElementChild.cloneNode(true));
  }

  if (tbody.children.length === 10) {
    appendRowButton.disabled = true;
  }
});

removeRowButton.addEventListener('click', function() {
  if (tbody.children.length > 2) {
    appendRowButton.disabled = false;
    tbody.lastElementChild.remove();
  }

  if (tbody.children.length === 2) {
    removeRowButton.disabled = true;
  }
});

appendColumnButton.addEventListener('click', function() {
  const rows = document.querySelectorAll('tr');

  if (rows[0].children.length < 10) {
    removeColumnButton.disabled = false;

    [...rows].forEach(row => {
      row.append(row.lastElementChild.cloneNode(true));
    });
  }

  if (rows[0].children.length === 10) {
    appendColumnButton.disabled = true;
  }
});

removeColumnButton.addEventListener('click', function() {
  const rows = document.querySelectorAll('tr');

  if (rows[0].children.length > 2) {
    appendColumnButton.disabled = false;

    [...rows].forEach(row => {
      row.lastElementChild.remove();
    });
  }

  if (rows[0].children.length === 2) {
    removeColumnButton.disabled = true;
  }
});
