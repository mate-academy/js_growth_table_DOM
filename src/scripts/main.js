'use strict';

const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');
const tbody = document.querySelector('tbody');

function checkDisability() {
  appendRow.disabled = tbody.children.length >= 10;
  removeRow.disabled = tbody.children.length <= 2;

  appendColumn.disabled = tbody.children[0].children.length >= 10;
  removeColumn.disabled = tbody.children[0].children.length <= 2;
}

appendRow.addEventListener('click', e => {
  tbody.append(tbody.children[0].cloneNode(true));

  checkDisability();
});

removeRow.addEventListener('click', e => {
  tbody.lastElementChild.remove();

  checkDisability();
});

appendColumn.addEventListener('click', e => {
  for (const row of tbody.children) {
    row.append(row.children[0].cloneNode(true));
  }

  checkDisability();
});

removeColumn.addEventListener('click', e => {
  for (const row of tbody.children) {
    row.lastElementChild.remove();
  }

  checkDisability();
});
