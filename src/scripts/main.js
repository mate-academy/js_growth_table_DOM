'use strict';

const table = document.querySelector('tbody');
const body = document.querySelector('body');

const tr = table.children;
const plusRow = document.querySelector('.append-row');
const minusRow = document.querySelector('.remove-row');
const plusColumn = document.querySelector('.append-column');
const minusColumn = document.querySelector('.remove-column');

const addRow = function(e) {
  const item = tr[0].cloneNode(true);

  minusRow.removeAttribute('disabled');
  table.appendChild(item);

  plusRow.disabled = tr.length === 10;
};

const addColumn = function(e) {
  minusColumn.removeAttribute('disabled');

  for (let i = 0; i < tr.length; i++) {
    const item = tr[0].lastElementChild.cloneNode(true);

    plusColumn.disabled = tr[0].children.length === 10;
    tr[i].append(item);
  }
};

const removeRow = function(e) {
  minusRow.removeAttribute('disabled');
  plusRow.removeAttribute('disabled');

  tr[0].remove();
  minusRow.disabled = tr.length === 2;
};

const removeColumn = function(e) {
  plusColumn.removeAttribute('disabled');
  minusColumn.removeAttribute('disabled');

  for (let i = 0; i < table.children.length; i++) {
    table.children[i].lastElementChild.remove();
  }

  minusColumn.disabled = tr[0].children.length === 2;
};

body.addEventListener('click', function(e) {
  switch (e.target) {
    case plusRow:
      addRow();
      break;

    case plusColumn:
      addColumn();
      break;

    case minusRow:
      removeRow();
      break;

    case minusColumn:
      removeColumn();
      break;
  }
});
