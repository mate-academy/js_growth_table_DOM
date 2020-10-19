'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const tbody = document.querySelector('.field tbody');

appendRow.onclick = () => {
  if (removeRow.disabled) {
    removeRow.disabled = false;
  }

  tbody.append(tbody.children[0].cloneNode(true));

  if (tbody.children.length === 10) {
    appendRow.disabled = true;
  }
};

removeRow.onclick = () => {
  if (appendRow.disabled) {
    appendRow.disabled = false;
  }

  tbody.children[0].remove();

  if (tbody.children.length === 2) {
    removeRow.disabled = true;
  }
};

appendColumn.onclick = () => {
  if (removeColumn.disabled) {
    removeColumn.disabled = false;
  }

  for (let i = 0; i < tbody.children.length; i++) {
    const td = tbody.children[i].cells[0];

    td.before(td.cloneNode(true));
  }

  if (tbody.children[0].cells.length === 10) {
    appendColumn.disabled = true;
  }
};

removeColumn.onclick = () => {
  if (appendColumn.disabled) {
    appendColumn.disabled = false;
  }

  for (let i = 0; i < tbody.children.length; i++) {
    tbody.children[i].cells[0].remove();
  }

  if (tbody.children[0].cells.length === 2) {
    removeColumn.disabled = true;
  }
};
