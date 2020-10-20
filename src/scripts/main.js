'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const tbody = document.querySelector('.field tbody');
const min = 2;
const max = 10;

appendRow.onclick = () => {
  removeRow.disabled = false;

  tbody.append(tbody.children[0].cloneNode(true));

  appendRow.disabled = tbody.children.length === max;
};

removeRow.onclick = () => {
  appendRow.disabled = false;

  tbody.children[0].remove();

  removeRow.disabled = tbody.children.length === min;
};

appendColumn.onclick = () => {
  removeColumn.disabled = false;

  for (let i = 0; i < tbody.children.length; i++) {
    const td = tbody.children[i].cells[0];

    td.before(td.cloneNode(true));
  }

  appendColumn.disabled = tbody.children[0].cells.length === max;
};

removeColumn.onclick = () => {
  appendColumn.disabled = false;

  for (let i = 0; i < tbody.children.length; i++) {
    tbody.children[i].cells[0].remove();
  }

  removeColumn.disabled = tbody.children[0].cells.length === min;
};
