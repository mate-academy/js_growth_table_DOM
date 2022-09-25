'use strict';

const table = document.querySelector('tbody');
const rows = document.querySelectorAll('tr');

const newRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');

const newCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');

newRow.addEventListener('click', function() {
  if (table.children.length < 10) {
    removeRow.disabled = false;
    newRow.disabled = false;
    table.append(table.firstChild.cloneNode(true));
  };

  if (table.children.length === 10) {
    newRow.disabled = true;
  }
});

removeRow.addEventListener('click', function() {
  if (table.children.length > 2) {
    newRow.disabled = false;
    removeRow.disabled = false;
    table.lastChild.remove();
  }

  if (table.children.length === 2) {
    removeRow.disabled = true;
  }
});

newCol.addEventListener('click', function() {
  if (rows[0].children.length < 10) {
    newCol.disabled = false;
    removeCol.disabled = false;

    rows.forEach((el) => {
      el.children[0].after(el.children[1].cloneNode(true));
    });
  }

  if (rows[0].children.length === 10) {
    newCol.disabled = true;
  }
});

removeCol.addEventListener('click', function() {
  if (rows[0].children.length > 2) {
    newCol.disabled = false;
    removeCol.disabled = false;

    rows.forEach((el) => {
      el.children[0].remove();
    });
  }

  if (rows[0].children.length === 2) {
    removeCol.disabled = true;
  }
});
